module Accessibility
  class HtmlAudit
    Violation = Data.define(:rule, :message)

    def initialize(html)
      @document = Nokogiri::HTML.fragment(html)
    end

    def violations
      duplicate_ids + unlabeled_controls + unnamed_interactives + broken_aria_references + heading_violations
    end

    def valid?
      violations.empty?
    end

    private

    attr_reader :document

    def duplicate_ids
      document.css("[id]").group_by { |node| node["id"] }.filter_map do |id, nodes|
        Violation.new(rule: :duplicate_id, message: "Duplicate id: #{id}") if nodes.size > 1
      end
    end

    def unlabeled_controls
      document.css("input:not([type='hidden']), select, textarea").filter_map do |control|
        next if control["aria-label"].present? || labelled_by?(control)
        next if control["id"].present? && document.at_css("label[for='#{css_escape(control['id'])}']")

        Violation.new(rule: :control_label, message: "Control has no accessible label: #{control.name}##{control['id']}")
      end
    end

    def unnamed_interactives
      document.css("button, a[href]").filter_map do |node|
        next if node.text.squish.present? || node["aria-label"].present? || labelled_by?(node)

        Violation.new(rule: :accessible_name, message: "Interactive element has no accessible name: #{node.name}")
      end
    end

    def broken_aria_references
      document.css("[aria-labelledby], [aria-describedby], [aria-controls]").flat_map do |node|
        %w[aria-labelledby aria-describedby aria-controls].flat_map do |attribute|
          node[attribute].to_s.split.filter_map do |id|
            next if document.at_css("##{css_escape(id)}")

            Violation.new(rule: :aria_reference, message: "#{attribute} references missing id: #{id}")
          end
        end
      end
    end

    def heading_violations
      levels = document.css("h1, h2, h3, h4, h5, h6").map { |heading| heading.name.delete_prefix("h").to_i }
      levels.each_cons(2).filter_map do |previous, current|
        Violation.new(rule: :heading_order, message: "Heading level jumps from h#{previous} to h#{current}") if current > previous + 1
      end
    end

    def labelled_by?(node)
      node["aria-labelledby"].to_s.split.any? { |id| document.at_css("##{css_escape(id)}") }
    end

    def css_escape(value)
      value.to_s.gsub(/([^a-zA-Z0-9_-])/, '\\\\1')
    end
  end
end

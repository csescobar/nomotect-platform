# frozen_string_literal: true

require "fileutils"

module Releases
  class NotesGenerator
    CATEGORY_HEADINGS = {
      "feature" => "Added",
      "fix" => "Fixed",
      "security" => "Security",
      "deprecation" => "Deprecated",
      "removal" => "Removed",
      "documentation" => "Documentation",
      "internal" => "Internal"
    }.freeze
    IMPACT_ORDER = %w[none patch minor major].freeze
    OUTPUTS = {
      "CHANGELOG.md" => :changelog,
      "docs/releases/generated/unreleased.md" => :release_notes,
      "docs/releases/generated/migration-notes.md" => :migration_notes,
      "docs/releases/generated/upgrade-notes.md" => :upgrade_notes
    }.freeze

    def initialize(
      fragments: ChangeCatalog.new.fragments,
      current_version: Platform::Version.current.to_s,
      root: Rails.root
    )
      @fragments = fragments.sort_by(&:id)
      @current_version = current_version
      @root = Pathname(root)
    end

    def documents
      OUTPUTS.to_h { |path, renderer| [ path, public_send(renderer) ] }
    end

    def write!
      documents.each do |relative_path, content|
        path = root.join(relative_path)
        path.dirname.mkpath
        path.write(content)
      end
      documents.keys
    end

    def validate
      documents.filter_map do |relative_path, expected|
        path = root.join(relative_path)
        next "missing generated release document: #{relative_path}" unless path.file?
        next if path.read == expected

        "stale generated release document: #{relative_path}"
      end
    end

    def changelog
      <<~MARKDOWN
        # Changelog

        All notable platform changes are generated from versioned change fragments.

        ## Unreleased

        Required release impact: `#{highest_release_impact}`.

        #{change_sections}

        ## 0.8.0

        - Completed the Epic 8 AI Platform and Repository Intelligence baseline.
      MARKDOWN
    end

    def release_notes
      <<~MARKDOWN
        # Unreleased Release Notes

        - Current released version: `#{current_version}`
        - Required release impact: `#{highest_release_impact}`

        ## Changes

        #{change_sections}

        ## Affected contracts

        #{contract_lines}

        ## Cross-cutting assessments

        #{assessment_lines}
      MARKDOWN
    end

    def migration_notes
      action_notes(
        title: "Unreleased Migration Notes",
        field: "migration",
        empty: "No database or data migrations are declared."
      )
    end

    def upgrade_notes
      action_notes(
        title: "Unreleased Upgrade Notes",
        field: "upgrade",
        empty: "No operator upgrade actions are declared."
      )
    end

    private

    attr_reader :fragments, :current_version, :root

    def highest_release_impact
      fragments.map(&:release_impact).max_by { |impact| IMPACT_ORDER.index(impact) } || "none"
    end

    def change_sections
      grouped = fragments.group_by(&:category)
      CATEGORY_HEADINGS.filter_map do |category, heading|
        items = grouped.fetch(category, [])
        next if items.empty?

        "### #{heading}\n\n#{items.map { |fragment| "- #{fragment.summary} (`#{fragment.id}`)" }.join("\n")}"
      end.join("\n\n")
    end

    def contract_lines
      contracts = fragments.flat_map(&:contracts).uniq.sort
      return "- No public contracts declared." if contracts.empty?

      contracts.map { |contract| "- `#{contract}`" }.join("\n")
    end

    def assessment_lines
      lines = %w[security privacy accessibility].flat_map do |field|
        fragments.filter_map do |fragment|
          assessment = fragment.data.fetch(field)
          next if assessment.fetch("impact") == "none"

          notes = assessment.fetch("notes").presence || "Reviewed with no additional action."
          "- **#{field.capitalize} — #{fragment.id}:** #{notes}"
        end
      end
      lines.empty? ? "- No cross-cutting impacts declared." : lines.join("\n")
    end

    def action_notes(title:, field:, empty:)
      applicable = fragments.select { |fragment| fragment.data.dig(field, "required") }
      body = if applicable.empty?
        empty
      else
        applicable.map do |fragment|
          "- **#{fragment.id}:** #{fragment.data.dig(field, 'notes')}"
        end.join("\n")
      end
      "# #{title}\n\n#{body}\n"
    end
  end
end

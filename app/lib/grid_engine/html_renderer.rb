module GridEngine
  class HtmlRenderer
    include ActionView::Helpers::TagHelper
    include ActionView::Helpers::OutputSafetyHelper

    def initialize(definition, records, locale: I18n.locale)
      @definition = definition
      @records = records
      @locale = locale
    end

    def call
      tag.table(class: "grid-engine-table") do
        safe_join([
          tag.thead { tag.tr { safe_join(visible_columns.map { |column| tag.th(label_for(column), scope: "col") }) } },
          tag.tbody { safe_join(@records.map { |record| row(record) }) }
        ])
      end
    end

    private

    def row(record)
      tag.tr do
        safe_join(visible_columns.map do |column|
          value = record.public_send(column.attribute)
          formatted = value.nil? ? "" : Types.registry.fetch(column.type).format(value, locale: @locale)
          tag.td(formatted)
        end)
      end
    end

    def visible_columns = @definition.columns.values.select(&:visible)

    def label_for(column)
      column.label || I18n.t("grid_engine.columns.#{column.key}", default: column.key.humanize)
    end
  end
end

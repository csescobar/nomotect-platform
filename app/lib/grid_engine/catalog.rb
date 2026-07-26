module GridEngine
  module Catalog
    module_function

    def fetch(key)
      definitions.fetch(key.to_s) { raise KeyError, "Unknown grid: #{key}" }
    end

    def definitions
      @definitions ||= {
        "organizations" => Definition.new(key: :organizations, model_class: Organization) do
          column :name, type: :string, label: I18n.t("grid_engine.organizations.columns.name")
          column :slug, type: :string, label: I18n.t("grid_engine.organizations.columns.slug")
          column :created_at, type: :datetime, label: I18n.t("grid_engine.organizations.columns.created_at")
          sort :name
        end
      }.freeze
    end

    def reset!
      @definitions = nil
    end
  end
end

module Installation
  module Configuration
    module_function

    def enabled?
      ActiveModel::Type::Boolean.new.cast(ENV.fetch("INSTALLATION_ENABLED", "false"))
    end

    def production_token_required?
      Rails.env.production?
    end
  end
end

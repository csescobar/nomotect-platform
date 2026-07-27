module Installation
  class StepsController < BaseController
    def show
      @state = StateStore.new.read.fetch("state")
      @step = Wizard.new.step(normalized_step)
      load_step
    end

    def update
      @state = StateStore.new.read.fetch("state")
      @step = Wizard.new.step(normalized_step)
      return update_appearance if @step.name == "appearance"
      return test_database if @step.name == "database" && params[:commit] == "Test connection"
      return provision_database if @step.name == "database"

      head :method_not_allowed
    rescue ArgumentError, DatabaseConnector::ConnectionError, ExecutionLock::AlreadyLocked => error
      load_step
      flash.now[:alert] = error.message
      render :show, status: :unprocessable_entity
    end

    def export
      head :forbidden unless Configuration.token_editing_allowed?
      send_file Rails.root.join("config/design_tokens/tokens.yml"), type: "application/yaml", disposition: "attachment"
    end

    private

    def update_appearance
      AppearanceUpdater.new.update!(appearance_attributes, uploads: appearance_uploads, token_yaml: params[:token_yaml])
      advance_to_database!
      redirect_to installation_step_path("database"), notice: "Appearance saved."
    end

    def test_database
      configuration = database_configuration
      DatabaseConnector.new.test!(configuration)
      persist_database_metadata!(configuration)
      load_database
      flash.now[:notice] = "PostgreSQL connection succeeded."
      render :show
    end

    def provision_database
      configuration = database_configuration
      ExecutionLock.new.synchronize { DatabaseProvisioner.new.provision!(configuration) }
      persist_database_metadata!(configuration)
      advance_to_provisioning!
      redirect_to installation_step_path("provisioning"), notice: "Database provisioned."
    end

    def load_step
      load_appearance if @step.name == "appearance"
      load_database if @step.name == "database"
      @progress = ProgressStore.new.read if %w[database provisioning].include?(@step.name)
    end

    def load_appearance
      @appearance = AppearanceStore.new.read
      @token_yaml = Rails.root.join("config/design_tokens/tokens.yml").read
    end

    def load_database
      metadata = StateStore.new.read.fetch("metadata", {}).fetch("database", {})
      @database = {
        "host" => metadata.fetch("host", "localhost"),
        "port" => metadata.fetch("port", 5432),
        "maintenance_database" => metadata.fetch("maintenance_database", "postgres"),
        "application_database" => metadata.fetch("application_database", "rails_hotwire_platform"),
        "application_username" => metadata.fetch("application_username", "rails_hotwire_platform"),
        "sslmode" => metadata.fetch("sslmode", "prefer")
      }
    end

    def database_configuration
      DatabaseConfiguration.new(params.require(:database).permit(*DatabaseConfiguration::ATTRIBUTES))
    end

    def persist_database_metadata!(configuration)
      store = StateStore.new
      current = store.read
      metadata = current.fetch("metadata", {}).merge("database" => configuration.public_attributes)
      store.write!(state: current.fetch("state"), metadata: metadata)
    end

    def appearance_attributes
      params.require(:appearance).permit(:application_name, :default_locale, supported_locales: [])
    end

    def appearance_uploads
      {
        logo: params.dig(:appearance, :logo),
        compact_logo: params.dig(:appearance, :compact_logo),
        favicon: params.dig(:appearance, :favicon)
      }
    end

    def advance_to_database!
      store = StateStore.new
      current = store.read
      state = current.fetch("state")
      state = StateMachine.new(state).transition_to("appearance").state if state == "not_started"
      next_state = StateMachine.new(state).transition_to("database").state
      store.write!(state: next_state, metadata: current.fetch("metadata", {}).merge("appearance_saved" => true))
    end

    def advance_to_provisioning!
      store = StateStore.new
      current = store.read
      next_state = StateMachine.new(current.fetch("state")).transition_to("provisioning").state
      store.write!(state: next_state, metadata: current.fetch("metadata", {}).merge("database_provisioned" => true))
    end

    def normalized_step
      requested = params[:step].to_s.tr("-", "_")
      return "appearance" if @state == "not_started" || @state == "failed"

      requested.presence || @state
    end
  end
end

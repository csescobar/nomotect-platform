module Installation
  class StepsController < BaseController
    def show
      @state = StateStore.new.read.fetch("state")
      @step = Wizard.new.step(normalized_step)
      load_appearance if @step.name == "appearance"
    end

    def update
      @state = StateStore.new.read.fetch("state")
      @step = Wizard.new.step(normalized_step)
      return head :method_not_allowed unless @step.name == "appearance"

      AppearanceUpdater.new.update!(appearance_attributes, uploads: appearance_uploads, token_yaml: params[:token_yaml])
      advance_to_database!
      redirect_to installation_step_path("database"), notice: "Appearance saved."
    rescue ArgumentError => error
      load_appearance
      flash.now[:alert] = error.message
      render :show, status: :unprocessable_entity
    end

    def export
      head :forbidden unless Configuration.token_editing_allowed?
      send_file Rails.root.join("config/design_tokens/tokens.yml"), type: "application/yaml", disposition: "attachment"
    end

    private

    def load_appearance
      @appearance = AppearanceStore.new.read
      @token_yaml = Rails.root.join("config/design_tokens/tokens.yml").read
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

    def normalized_step
      requested = params[:step].to_s.tr("-", "_")
      return "appearance" if @state == "not_started" || @state == "failed"

      requested.presence || @state
    end
  end
end

module Installation
  class StepsController < BaseController
    def show
      @state = StateStore.new.read.fetch("state")
      @step = Wizard.new.step(normalized_step)
    end

    private

    def normalized_step
      requested = params[:step].to_s.tr("-", "_")
      return "appearance" if @state == "not_started" || @state == "failed"

      requested.presence || @state
    end
  end
end

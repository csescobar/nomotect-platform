module ExtensionGate
  extend ActiveSupport::Concern

  included do
    prepend_before_action :enforce_extension_readiness
  end

  private

  def enforce_extension_readiness
    head :service_unavailable unless Extensions::Runtime.traffic_allowed?
  end
end

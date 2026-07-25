class Current < ActiveSupport::CurrentAttributes
  attribute :session, :request_id, :correlation_id, :locale

  delegates :user, to: :session, allow_nil: true

  resets do
    Time.zone = "UTC"
  end
end

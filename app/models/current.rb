class Current < ActiveSupport::CurrentAttributes
  attribute :session, :request_id, :correlation_id, :locale, :organization, :membership

  delegate :user, to: :session, allow_nil: true

  def organization=(organization)
    super
    self.membership = user&.memberships&.find_by(organization: organization)
  end

  resets do
    Time.zone = "UTC"
  end
end

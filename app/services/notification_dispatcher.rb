class NotificationDispatcher
  def self.call(organization:, recipient:, kind:, payload: {})
    TenantBoundary.assert_membership!(organization: organization, user: recipient)

    notification = Notification.create!(
      organization: organization,
      recipient: recipient,
      kind: kind,
      payload: payload
    )
    NotificationDeliveryJob.perform_later(organization.id, notification.id)
    notification
  end
end

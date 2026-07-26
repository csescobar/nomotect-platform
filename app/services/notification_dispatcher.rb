class NotificationDispatcher
  def self.call(organization:, recipient:, kind:, payload: {})
    notification = Notification.create!(
      organization: organization,
      recipient: recipient,
      kind: kind,
      payload: payload
    )
    NotificationDeliveryJob.perform_later(notification.id)
    notification
  end
end

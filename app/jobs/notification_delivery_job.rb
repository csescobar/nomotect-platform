class NotificationDeliveryJob < ApplicationJob
  queue_as :default

  def perform(notification_id)
    notification = Notification.find(notification_id)
    return if notification.status == "delivered"

    ActiveSupport::Notifications.instrument("notification.deliver.enterprise_services", notification_id: notification.id) do
      notification.update!(status: "delivered", delivered_at: Time.current)
    end
  rescue StandardError
    notification&.update!(status: "failed")
    raise
  end
end

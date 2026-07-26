class WebhookEndpoint < ApplicationRecord
  belongs_to :organization

  encrypts :secret

  validates :url, :secret, presence: true
  validate :https_url

  def subscribes_to?(event_type)
    enabled? && events.include?(event_type)
  end

  private

  def https_url
    uri = URI.parse(url)
    errors.add(:url, :invalid) unless uri.is_a?(URI::HTTPS) && uri.host.present?
  rescue URI::InvalidURIError
    errors.add(:url, :invalid)
  end
end

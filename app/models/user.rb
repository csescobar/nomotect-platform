class User < ApplicationRecord
  has_secure_password
  has_many :sessions, dependent: :destroy

  normalizes :email_address, with: ->(email) { email.strip.downcase }

  validates :email_address, presence: true, uniqueness: { case_sensitive: false }
  validates :password, length: { minimum: 12 }, allow_nil: true

  generates_token_for :password_reset, expires_in: 20.minutes do
    password_salt&.last(10)
  end
end

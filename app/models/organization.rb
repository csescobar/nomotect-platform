class Organization < ApplicationRecord
  has_many :memberships, dependent: :destroy
  has_many :users, through: :memberships
  has_many :organization_invitations, dependent: :destroy
  has_many :customers, dependent: :destroy
  has_many :domain_events, dependent: :nullify
  has_many :notifications, dependent: :destroy
  has_many :stored_files, dependent: :destroy
  has_many :import_runs, dependent: :destroy
  has_many :webhook_endpoints, dependent: :destroy
  has_many :feature_flags, dependent: :destroy

  before_validation :assign_slug, on: :create

  validates :name, presence: true, length: { maximum: 120 }
  validates :slug, presence: true, uniqueness: true

  def membership_for(user)
    memberships.find_by(user: user)
  end

  private

  def assign_slug
    base = name.to_s.parameterize.presence || "organization"
    candidate = base
    suffix = 2

    while self.class.exists?(slug: candidate)
      candidate = "#{base}-#{suffix}"
      suffix += 1
    end

    self.slug = candidate
  end
end

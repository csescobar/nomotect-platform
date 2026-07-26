class Membership < ApplicationRecord
  ROLES = %w[owner admin member].freeze
  MANAGEABLE_ROLES = %w[admin member].freeze

  belongs_to :organization
  belongs_to :user

  validates :role, inclusion: { in: ROLES }
  validates :user_id, uniqueness: { scope: :organization_id }
  validate :organization_must_retain_an_owner, if: :removing_owner_role?

  before_destroy :organization_must_retain_an_owner_before_destroy

  def owner? = role == "owner"
  def admin? = role.in?(%w[owner admin])

  private

  def removing_owner_role?
    persisted? && role_changed? && role_was == "owner"
  end

  def organization_must_retain_an_owner
    return if organization.memberships.where(role: "owner").where.not(id: id).exists?

    errors.add(:role, :last_owner)
  end

  def organization_must_retain_an_owner_before_destroy
    return unless owner?
    return if organization.memberships.where(role: "owner").where.not(id: id).exists?

    errors.add(:base, :last_owner)
    throw :abort
  end
end

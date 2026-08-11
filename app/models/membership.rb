class Membership < ApplicationRecord
  ROLES = %w[owner admin member].freeze
  MANAGEABLE_ROLES = %w[admin member].freeze

  belongs_to :organization
  belongs_to :user
  belongs_to :role_record, class_name: "Role", foreign_key: "role_id", optional: true

  validates :role, inclusion: { in: ->(_) { ApplicationRoles.keys } }
  validates :user_id, uniqueness: { scope: :organization_id }
  validate :organization_must_retain_an_owner, if: :removing_owner_role?

  before_destroy :organization_must_retain_an_owner_before_destroy

  def self.roles = ApplicationRoles.keys
  def self.manageable_roles = ApplicationRoles.manageable_keys

  def owner? = role == "owner"
  def admin? = role.in?(%w[owner admin])
  def permitted?(permission)
    return role_record.permitted?(permission) if role_record.present?
    return false unless PermissionRegistry.registered?(permission)
    return true if owner?

    entry = PermissionRegistry.fetch(permission)
    if admin?
      entry.default_availability != "owner_only"
    else
      entry.default_availability == "all"
    end
  end

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

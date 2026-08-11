class Membership < ApplicationRecord
  ROLES = %w[owner admin member].freeze
  MANAGEABLE_ROLES = %w[admin member].freeze

  belongs_to :organization
  belongs_to :user
  belongs_to :role_record, class_name: "Role", foreign_key: "role_id", optional: true

  validates :role, inclusion: { in: ->(_) { ApplicationRoles.keys } }
  validates :user_id, uniqueness: { scope: :organization_id }
  validate :organization_must_retain_an_owner, if: :removing_owner_role?

  before_validation :assign_default_role_record
  before_destroy :organization_must_retain_an_owner_before_destroy

  def self.roles = ApplicationRoles.keys
  def self.manageable_roles = ApplicationRoles.manageable_keys

  def owner? = role == "owner"
  def admin? = role.in?(%w[owner admin])
  def permitted?(permission)
    return false if role_record.blank?

    role_record.permitted?(permission)
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

  def assign_default_role_record
    return if role.blank?

    if role_changed? || role_record.blank?
      system_role = Role.find_by(key: role, organization_id: nil)
      if system_role.blank? || system_role.role_permissions.count == 0
        PermissionRegistry.seed_system_roles!
        system_role = Role.find_by(key: role, organization_id: nil)
      end
      self.role_record = system_role if system_role.present?
    end
  end
end

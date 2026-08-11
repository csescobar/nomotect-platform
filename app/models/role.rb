# frozen_string_literal: true

class Role < ApplicationRecord
  belongs_to :organization, optional: true
  has_many :role_permissions, dependent: :destroy
  has_many :permissions, through: :role_permissions
  has_many :memberships, foreign_key: "role_id", dependent: :restrict_with_error

  validates :key, presence: true, uniqueness: { scope: :organization_id }
  validates :name, presence: true

  before_destroy :prevent_protected_role_destruction

  def permitted?(permission_key)
    return false unless PermissionRegistry.registered?(permission_key)

    permissions.exists?(key: permission_key.to_s)
  end

  private

  def prevent_protected_role_destruction
    return unless protected?

    errors.add(:base, "Protected system roles cannot be deleted")
    throw :abort
  end
end

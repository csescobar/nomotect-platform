# frozen_string_literal: true

class Permission < ApplicationRecord
  has_many :role_permissions, dependent: :destroy
  has_many :roles, through: :role_permissions

  validates :key, presence: true, uniqueness: true, format: { with: /\A[a-z][a-z0-9_]*\.[a-z][a-z0-9_]*\z/ }
  validates :name, presence: true
  validates :category, presence: true
  validates :owning_capability, presence: true
  validates :security_classification, inclusion: { in: ->(_) { PermissionRegistry::SECURITY_CLASSIFICATIONS } }
  validates :default_availability, inclusion: { in: ->(_) { PermissionRegistry::DEFAULT_AVAILABILITIES } }
  validates :version, presence: true
end

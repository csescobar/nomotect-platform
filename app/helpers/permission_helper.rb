# frozen_string_literal: true

module PermissionHelper
  def permitted_for_user?(permission_key, user:, organization:)
    return false if user.blank? || organization.blank?
    return false unless PermissionRegistry.registered?(permission_key)

    membership = organization.membership_for(user)
    return false if membership.blank?

    membership.permitted?(permission_key)
  end

  def contextually_permitted_for_user?(permission_key, user:, organization:, record:)
    return false if user.blank? || organization.blank? || record.blank?
    return false unless PermissionRegistry.registered?(permission_key)

    membership = organization.membership_for(user)
    return false if membership.blank?

    ContextualAuthorization.evaluate(
      user: user,
      membership: membership,
      record: record,
      permission_key: permission_key
    ).authorized?
  end
end

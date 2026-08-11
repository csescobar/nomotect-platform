# frozen_string_literal: true

class RolePolicy < ApplicationPolicy
  def show?
    membership.present? && (membership.permitted?("members.manage_roles") || membership.admin? || membership.owner?)
  end

  def create?
    membership.present? && (membership.permitted?("members.manage_roles") || membership.admin? || membership.owner?)
  end

  def update?
    membership.present? && (membership.permitted?("members.manage_roles") || membership.admin? || membership.owner?)
  end

  def destroy?
    membership.present? && (membership.permitted?("members.manage_roles") || membership.admin? || membership.owner?)
  end

  private

  def membership
    @membership ||= (record.respond_to?(:organization) && record.organization) ? record.organization.membership_for(user) : nil
  end
end

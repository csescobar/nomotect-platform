# frozen_string_literal: true

class MembershipPolicy < ApplicationPolicy
  def show?
    membership.present? && (membership.permitted?("members.read") || membership.permitted?("members.manage_roles") || membership.admin? || membership.owner?)
  end

  def create?
    membership.present? && (membership.permitted?("members.invite") || membership.permitted?("members.manage_roles") || membership.admin? || membership.owner?)
  end

  def update?
    membership.present? && (membership.permitted?("members.manage_roles") || membership.admin? || membership.owner?)
  end

  def destroy?
    membership.present? && (membership.permitted?("members.manage_roles") || membership.admin? || membership.owner?)
  end

  private

  def membership
    @membership ||= record.organization.membership_for(user)
  end
end

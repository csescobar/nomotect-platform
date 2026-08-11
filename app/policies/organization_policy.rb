# frozen_string_literal: true

class OrganizationPolicy < ApplicationPolicy
  def show?
    membership.present? && (membership.permitted?("settings.read") || membership.owner? || membership.admin?)
  end

  def create?
    user.present?
  end

  def update?
    membership.present? && (membership.permitted?("settings.manage") || membership.owner? || membership.admin?)
  end

  def destroy?
    membership&.owner?
  end

  def manage_members?
    membership.present? && (membership.permitted?("members.manage_roles") || membership.permitted?("members.invite") || membership.admin? || membership.owner?)
  end

  def manage_owners?
    membership&.owner?
  end

  private

  def membership
    @membership ||= record.membership_for(user)
  end
end

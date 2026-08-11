# frozen_string_literal: true

class ApplicationPolicy
  class NotAuthorizedError < StandardError; end

  attr_reader :user, :record

  def initialize(user, record)
    @user = user
    @record = record
  end

  def show?
    false
  end

  def create?
    false
  end

  def update?
    false
  end

  def destroy?
    false
  end

  def contextually_permitted?(permission_key)
    return false if user.blank?

    ContextualAuthorization.evaluate(
      user: user,
      membership: membership,
      record: record,
      permission_key: permission_key
    ).authorized?
  end

  private

  def membership
    return @membership if defined?(@membership)

    @membership = if record.respond_to?(:organization) && record.organization.present?
      record.organization.membership_for(user)
    elsif record.is_a?(Organization)
      record.membership_for(user)
    else
      nil
    end
  end
end

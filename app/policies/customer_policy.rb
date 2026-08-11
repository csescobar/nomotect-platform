# frozen_string_literal: true

class CustomerPolicy < ApplicationPolicy
  def show?
    membership&.permitted?("customers.read")
  end

  def create?
    membership&.permitted?("customers.create")
  end

  def update?
    membership&.permitted?("customers.update")
  end

  def destroy?
    membership&.permitted?("customers.destroy")
  end

  private

  def membership
    @membership ||= record.organization.membership_for(user)
  end
end

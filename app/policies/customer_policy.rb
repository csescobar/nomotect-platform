# frozen_string_literal: true

class CustomerPolicy < ApplicationPolicy
  def show?
    contextually_permitted?("customers.read")
  end

  def create?
    contextually_permitted?("customers.create")
  end

  def update?
    contextually_permitted?("customers.update")
  end

  def destroy?
    contextually_permitted?("customers.destroy")
  end
end

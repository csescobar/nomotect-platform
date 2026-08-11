# frozen_string_literal: true

module Roles
  class Assign
    Result = Data.define(:success?, :membership, :errors)

    attr_reader :organization, :actor, :membership, :role

    def initialize(organization:, actor:, membership:, role:)
      @organization = organization
      @actor = actor
      @membership = membership
      @role = role
    end

    def call
      if membership.organization_id != organization.id
        return Result.new(success?: false, membership: nil, errors: [ "Membership belongs to another organization" ])
      end

      if role.organization_id.present? && role.organization_id != organization.id
        return Result.new(success?: false, membership: nil, errors: [ "Role belongs to another organization" ])
      end

      membership.role_record = role
      if membership.save
        Result.new(success?: true, membership: membership, errors: [])
      else
        Result.new(success?: false, membership: nil, errors: membership.errors.full_messages)
      end
    end
  end
end

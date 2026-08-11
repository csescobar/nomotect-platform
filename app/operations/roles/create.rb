# frozen_string_literal: true

module Roles
  class Create
    Result = Data.define(:success?, :role, :errors)

    attr_reader :organization, :actor, :params

    def initialize(organization:, actor:, params:)
      @organization = organization
      @actor = actor
      @params = params
    end

    def call
      permission_keys = Array(params[:permission_keys]).map(&:to_s).uniq
      unknown_permissions = permission_keys.reject { |key| PermissionRegistry.registered?(key) }

      if unknown_permissions.any?
        return Result.new(
          success?: false,
          role: nil,
          errors: unknown_permissions.map { |key| "Unknown permission: #{key}" }
        )
      end

      role = organization.roles.build(
        key: params[:key],
        name: params[:name],
        description: params[:description],
        protected: false
      )

      if role.save
        permissions = permission_keys.map do |key|
          Permission.find_or_create_by!(key: key) do |p|
            entry = PermissionRegistry.fetch(key)
            p.name = entry.name
            p.category = entry.category
            p.description = entry.description
          end
        end
        role.permissions = permissions
        Result.new(success?: true, role: role, errors: [])
      else
        Result.new(success?: false, role: nil, errors: role.errors.full_messages)
      end
    end
  end
end

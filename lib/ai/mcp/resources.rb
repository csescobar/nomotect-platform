# frozen_string_literal: true

module Ai
  module Mcp
    class Resources
      ALLOWED_URIS = %w[
        nomotect://current-user
        nomotect://current-organization
        nomotect://current-context
        nomotect://permissions
      ].freeze

      def read(uri)
        uri_str = uri.to_s
        unless ALLOWED_URIS.include?(uri_str)
          raise ArgumentError, "Invalid or unauthorized nomotect URI '#{uri_str}'"
        end

        content = case uri_str
        when "nomotect://current-user"
          resolve_current_user
        when "nomotect://current-organization"
          resolve_current_organization
        when "nomotect://current-context"
          resolve_current_context
        when "nomotect://permissions"
          resolve_permissions
        end

        {
          uri: uri_str,
          mime_type: "application/json",
          content: content
        }
      end

      private

      def resolve_current_user
        user = Current.user
        {
          authenticated: user.present?,
          id: user&.id,
          email: user&.email,
          roles: user.respond_to?(:roles) ? user.roles.pluck(:name) : []
        }
      end

      def resolve_current_organization
        org = Current.organization
        {
          active: org.present?,
          id: org&.id,
          name: org.respond_to?(:name) ? org.name : nil,
          slug: org.respond_to?(:slug) ? org.slug : nil
        }
      end

      def resolve_current_context
        {
          locale: I18n.locale,
          environment: Rails.env,
          timestamp: Time.now.utc.iso8601
        }
      end

      def resolve_permissions
        # Exposes safe array of capabilities for current user context
        {
          permissions: %w[read:dashboard read:reports]
        }
      end
    end
  end
end

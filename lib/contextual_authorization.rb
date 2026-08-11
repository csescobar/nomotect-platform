# frozen_string_literal: true

class ContextualAuthorization
  Result = Data.define(:authorized?, :reason)

  class << self
    def evaluate(user:, membership:, record:, permission_key:)
      new(user: user, membership: membership, record: record, permission_key: permission_key).evaluate
    end
  end

  attr_reader :user, :membership, :record, :permission_key

  def initialize(user:, membership:, record:, permission_key:)
    @user = user
    @membership = membership
    @record = record
    @permission_key = permission_key
  end

  def evaluate
    return Result.new(authorized?: false, reason: "Unauthenticated") if user.blank? || membership.blank?
    return Result.new(authorized?: false, reason: "Unregistered permission") unless PermissionRegistry.registered?(permission_key)

    # 1. Baseline RBAC Evaluation
    unless membership.permitted?(permission_key)
      return Result.new(authorized?: false, reason: "RBAC permission missing: #{permission_key}")
    end

    # 2. Data Classification & Security Clearance Evaluation
    if record.respond_to?(:data_classification)
      classification = record.data_classification.to_s
      unless clearance_sufficient?(classification)
        record_denial_event("data_classification_clearance_insufficient")
        return Result.new(
          authorized?: false,
          reason: "Security clearance level insufficient for #{classification} classification"
        )
      end
    end

    # 3. Ownership Constraint Evaluation (if applicable)
    if record.respond_to?(:requires_ownership_match?) && record.requires_ownership_match?
      record_owner_id = record.respond_to?(:user_id) ? record.user_id : (record.respond_to?(:creator_id) ? record.creator_id : nil)
      if record_owner_id.present? && record_owner_id != user.id && !membership.admin? && !membership.owner?
        record_denial_event("resource_ownership_mismatch")
        return Result.new(authorized?: false, reason: "Resource ownership mismatch")
      end
    end

    Result.new(authorized?: true, reason: nil)
  end

  private

  def clearance_sufficient?(classification)
    return true if classification.blank? || classification == "standard"
    return true if membership.owner?

    role_permissions = membership.role_record&.permissions || []
    classifications = role_permissions.map(&:security_classification)

    case classification
    when "sensitive"
      classifications.include?("sensitive") || classifications.include?("critical")
    when "restricted"
      classifications.include?("critical")
    else
      true
    end
  end

  def record_denial_event(rule)
    return unless membership&.organization

    DomainEvent.create!(
      organization: membership.organization,
      actor: user,
      event_type: "security.contextual_denial",
      aggregate_type: record.class.name,
      aggregate_id: record.respond_to?(:id) && record.id.present? ? record.id : 0,
      occurred_at: Time.current,
      payload: {
        user_id: user.id,
        permission_key: permission_key,
        rule: rule,
        data_classification: record.respond_to?(:data_classification) ? record.data_classification.to_s : nil
      }
    )
  rescue ActiveRecord::RecordInvalid => error
    Rails.logger.error("Failed to record security.contextual_denial domain event: #{error.message}")
  end
end

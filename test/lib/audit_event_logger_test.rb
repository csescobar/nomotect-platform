# frozen_string_literal: true

require "test_helper"
require "audit/event_logger"

class AuditEventLoggerTest < ActiveSupport::TestCase
  test "logs structured audit event with standardized taxonomy family" do
    event = Audit::EventLogger.log(
      event_type: "identity.login.success",
      actor: "user_123",
      organization_id: "org_456",
      action: "login",
      target: "session",
      result: "success",
      channel: "web"
    )

    assert_equal "identity.login.success", event[:event_type]
    assert_equal "identity", event[:family]
    assert_equal "user_123", event[:actor]
    assert_equal "org_456", event[:organization_id]
    assert_equal "success", event[:result]
    assert_not_nil event[:timestamp]
    assert_not_nil event[:request_id]
  end

  test "validates standardized audit event families" do
    assert Audit::EventLogger.valid_family?("identity")
    assert Audit::EventLogger.valid_family?("authorization")
    assert Audit::EventLogger.valid_family?("tenant")
    assert Audit::EventLogger.valid_family?("data")
    assert Audit::EventLogger.valid_family?("configuration")
    assert Audit::EventLogger.valid_family?("security")
    assert Audit::EventLogger.valid_family?("integration")
    assert Audit::EventLogger.valid_family?("ai")
    assert Audit::EventLogger.valid_family?("system")

    assert_not Audit::EventLogger.valid_family?("unsupported_family")
  end

  test "raises ArgumentError for invalid event_type family" do
    assert_raises(ArgumentError) do
      Audit::EventLogger.log(
        event_type: "invalid_family.action",
        actor: "user_123",
        action: "test"
      )
    end
  end
end

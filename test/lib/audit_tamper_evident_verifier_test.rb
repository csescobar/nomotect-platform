# frozen_string_literal: true

require "test_helper"
require "audit/tamper_evident_verifier"

class AuditTamperEvidentVerifierTest < ActiveSupport::TestCase
  test "verifies valid chained audit event payload digest" do
    event1 = Audit::TamperEvidentVerifier.chain_event(
      event_type: "identity.login.success",
      actor: "user_1",
      action: "login",
      previous_digest: "0" * 64
    )

    event2 = Audit::TamperEvidentVerifier.chain_event(
      event_type: "data.record.created",
      actor: "user_1",
      action: "create",
      previous_digest: event1[:event_digest]
    )

    events = [ event1, event2 ]
    result = Audit::TamperEvidentVerifier.verify(events)

    assert result[:valid], "Expected chained audit events to be valid"
    assert_equal(-1, result[:tampered_index])
  end

  test "detects tampering when payload content is modified" do
    event1 = Audit::TamperEvidentVerifier.chain_event(
      event_type: "identity.login.success",
      actor: "user_1",
      action: "login",
      previous_digest: "0" * 64
    )

    # Maliciously modify actor payload
    event1[:actor] = "hacker_99"

    events = [ event1 ]
    result = Audit::TamperEvidentVerifier.verify(events)

    assert_not result[:valid]
    assert_equal 0, result[:tampered_index]
  end
end

require "test_helper"

class EnterpriseServicesTest < ActiveSupport::TestCase
  include ActiveJob::TestHelper

  setup do
    suffix = SecureRandom.hex(4)
    @organization = Organization.create!(name: "Enterprise #{suffix}")
    @user = User.create!(email_address: "enterprise-#{suffix}@example.com", password: "correct horse battery staple")
    Membership.create!(organization: @organization, user: @user, role: "owner")
  end

  test "idempotent execution returns the persisted result" do
    calls = 0
    first = IdempotentExecution.call(key: "invoice-1", scope: @organization.id.to_s) do
      calls += 1
      { "identifier" => 42 }
    end
    second = IdempotentExecution.call(key: "invoice-1", scope: @organization.id.to_s) do
      calls += 1
      { "identifier" => 99 }
    end

    assert_equal({ "identifier" => 42 }, first)
    assert_equal first, second
    assert_equal 1, calls
  end

  test "notification dispatcher persists and enqueues delivery" do
    assert_enqueued_with(job: NotificationDeliveryJob) do
      notification = NotificationDispatcher.call(
        organization: @organization,
        recipient: @user,
        kind: "customer.updated",
        payload: { customer_id: 1 }
      )

      assert_equal "pending", notification.status
    end
  end

  test "stored file registry calculates immutable metadata" do
    stored_file = StoredFileRegistry.call(
      organization: @organization,
      uploaded_by: @user,
      name: "customers.csv",
      content_type: "text/csv",
      bytes: "name\nAda\n"
    )

    assert_equal @organization, stored_file.organization
    assert_equal 9, stored_file.byte_size
    assert_equal Digest::SHA256.hexdigest("name\nAda\n"), stored_file.checksum
  end

  test "customer import tracks row failures and export remains tenant scoped" do
    csv = <<~CSV
      name,email_address,status,notes
      Ada,ada@example.com,active,Imported
      ,invalid@example.com,active,Invalid
    CSV

    run = Customers::CsvImporter.call(organization: @organization, requested_by: @user, csv: csv)
    exported = Customers::CsvExporter.call(user: @user, organization: @organization)

    assert_equal 1, run.processed_rows
    assert_equal 1, run.failed_rows
    assert_equal "failed", run.status
    assert_includes exported, "Ada"
    assert_not_includes exported, "invalid@example.com"
  end

  test "workflow transition validates the transition map and emits an event" do
    customer = @organization.customers.create!(name: "Ada", status: "active")

    WorkflowTransition.call(
      record: customer,
      attribute: :status,
      to: "inactive",
      allowed: { "active" => [ "inactive" ], "inactive" => [ "active" ] },
      actor: @user
    )

    assert_equal "inactive", customer.reload.status
    assert DomainEvent.exists?(aggregate_type: "Customer", aggregate_id: customer.id, event_type: "customer.transitioned")
  end

  test "feature flags prefer tenant overrides" do
    FeatureFlag.create!(key: "exports", enabled: true)
    FeatureFlag.create!(organization: @organization, key: "exports", enabled: false)

    assert_not FeatureFlag.active_for?("exports", organization: @organization)
  end

  test "webhook secrets are encrypted at rest" do
    endpoint = WebhookEndpoint.create!(
      organization: @organization,
      url: "https://example.com/hooks",
      secret: "top-secret",
      events: [ "customer.updated" ]
    )

    assert_equal "top-secret", endpoint.secret
    assert_not_equal "top-secret", endpoint[:secret]
    assert endpoint.subscribes_to?("customer.updated")
  end
end

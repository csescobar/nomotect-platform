require "test_helper"

class HealthControllerTest < ActionDispatch::IntegrationTest
  test "returns service health" do
    get health_path

    assert_response :success
    assert_equal "ok", response.parsed_body.fetch("status")
    assert_equal "0.8.0", response.parsed_body.fetch("version")
    assert response.parsed_body.dig("extensions", "ready")
  end

  test "returns unavailable without exposing extension error details" do
    readiness = {
      status: "blocked",
      ready: false,
      traffic_allowed: false,
      restart_required: true,
      loaded: [],
      skipped: [],
      blocker_codes: [ "extension_package_missing" ],
      warning_codes: []
    }

    Extensions::Runtime.stub(:readiness, readiness) do
      get health_path
    end

    assert_response :service_unavailable
    assert_equal [ "extension_package_missing" ], response.parsed_body.dig("extensions", "blocker_codes")
    assert_not_includes response.body, "exception"
  end

  test "blocks normal traffic when the extension runtime is unavailable" do
    Extensions::Runtime.stub(:traffic_allowed?, false) do
      get root_path
    end

    assert_response :service_unavailable
    assert_empty response.body
  end
end

require "test_helper"

class HealthControllerTest < ActionDispatch::IntegrationTest
  test "returns service health" do
    get health_path

    assert_response :success
    assert_equal "ok", response.parsed_body.fetch("status")
    assert_equal "0.8.0", response.parsed_body.fetch("version")
  end
end

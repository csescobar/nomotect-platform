require "test_helper"

class Installation::StepsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @previous = ENV["INSTALLATION_ENABLED"]
    ENV["INSTALLATION_ENABLED"] = "true"
    Rails.root.join("var/installation/state.test.json").delete if Rails.root.join("var/installation/state.test.json").exist?
  end

  teardown do
    ENV["INSTALLATION_ENABLED"] = @previous
    Rails.root.join("var/installation/state.test.json").delete if Rails.root.join("var/installation/state.test.json").exist?
  end

  test "redirects normal requests to the active installation step" do
    get root_path

    assert_redirected_to "/installation/appearance"
  end

  test "renders the installation step without authentication" do
    get installation_path

    assert_response :success
    assert_select "[data-installation-state='not_started']"
  end

  test "completed state bypasses the installation gate" do
    Installation::StateStore.new.write!(state: "completed")

    get root_path

    assert_response :redirect
    assert_not_equal "/installation/appearance", response.location
  end
end

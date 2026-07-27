require "test_helper"

class Installation::StepsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @previous = ENV["INSTALLATION_ENABLED"]
    ENV["INSTALLATION_ENABLED"] = "true"
    state_path.delete if state_path.exist?
    appearance_path.delete if appearance_path.exist?
  end

  teardown do
    ENV["INSTALLATION_ENABLED"] = @previous
    state_path.delete if state_path.exist?
    appearance_path.delete if appearance_path.exist?
  end

  test "redirects normal requests to the active installation step" do
    get root_path
    assert_redirected_to "/installation/appearance"
  end

  test "renders the appearance form without authentication" do
    get installation_path
    assert_response :success
    assert_select "[data-installation-state='not_started']"
    assert_select "form"
    assert_select "textarea[name='token_yaml']"
  end

  test "saves appearance and advances to database" do
    patch installation_step_path("appearance"), params: {
      appearance: {
        application_name: "Acme Platform",
        default_locale: "en",
        supported_locales: %w[en pt-BR]
      }
    }

    assert_response :redirect, response.body
    assert_redirected_to installation_step_path("database")
    assert_equal "database", Installation::StateStore.new.read.fetch("state")
    assert_equal "Acme Platform", Installation::AppearanceStore.new.read.fetch("application_name")
  end

  test "rejects an unsupported default locale" do
    patch installation_step_path("appearance"), params: {
      appearance: {
        application_name: "Acme Platform",
        default_locale: "pt-BR",
        supported_locales: [ "en" ]
      }
    }

    assert_response :unprocessable_entity
    assert_equal "not_started", Installation::StateStore.new.read.fetch("state")
  end

  test "preserves health endpoints while installation is incomplete" do
    get health_path
    assert_response :success
  end

  test "completed state bypasses the installation gate" do
    Installation::StateStore.new.write!(state: "completed")
    get root_path
    assert_response :redirect
    assert_not_equal "/installation/appearance", response.location
  end

  private

  def state_path
    Rails.root.join("var/installation/state.test.json")
  end

  def appearance_path
    Rails.root.join("var/installation/appearance.test.json")
  end
end

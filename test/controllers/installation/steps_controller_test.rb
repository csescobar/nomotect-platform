require "test_helper"

class Installation::StepsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @previous = ENV["INSTALLATION_ENABLED"]
    ENV["INSTALLATION_ENABLED"] = "true"
    installation_paths.each { |path| FileUtils.rm_f(path) }
  end

  teardown do
    ENV["INSTALLATION_ENABLED"] = @previous
    installation_paths.each { |path| FileUtils.rm_f(path) }
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
      authenticity_token: form_authenticity_token,
      appearance: {
        application_name: "Acme Platform",
        default_locale: "en",
        supported_locales: %w[en pt-BR]
      }
    }

    assert_redirected_to installation_step_path("database")
    assert_equal "database", Installation::StateStore.new.read.fetch("state")
    assert_equal "Acme Platform", Installation::AppearanceStore.new.read.fetch("application_name")
  end

  test "renders database fields without persisted administrative credentials" do
    Installation::StateStore.new.write!(
      state: "database",
      metadata: {
        "database" => {
          "host" => "db.internal",
          "port" => 5433,
          "maintenance_database" => "postgres",
          "application_database" => "acme_platform",
          "application_username" => "acme_runtime",
          "sslmode" => "require"
        }
      }
    )

    get installation_step_path("database")

    assert_response :success
    assert_select "input[name='database[host]'][value='db.internal']"
    password_input = css_select("input[name='database[admin_password]']").first
    assert password_input
    assert password_input["value"].blank?
    assert_select "input[name='database[application_database]'][value='acme_platform']"
  end

  test "rejects an unsupported default locale" do
    patch installation_step_path("appearance"), params: {
      authenticity_token: form_authenticity_token,
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

  def form_authenticity_token
    get installation_path
    css_select("input[name='authenticity_token']").first["value"]
  end

  def installation_paths
    [
      Rails.root.join("var/installation/state.test.json"),
      Rails.root.join("var/installation/appearance.test.json"),
      Rails.root.join("var/installation/progress.test.json"),
      Rails.root.join("var/installation/runtime.test.env")
    ]
  end
end

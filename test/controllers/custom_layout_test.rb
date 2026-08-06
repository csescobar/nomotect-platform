# frozen_string_literal: true

require "test_helper"

class CustomLayoutTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(email_address: "layout_user_#{SecureRandom.hex(4)}@example.com", password: "a-secure-password")
    @org = Organization.create!(name: "Layout Test Org #{SecureRandom.hex(4)}")
    Membership.create!(user: @user, organization: @org, role: "owner")
    sign_in_user(@user)
  end

  teardown do
    ApplicationLayout.reset!
  end

  test "renders all navigation items when showcases are enabled" do
    ApplicationLayout.configure do |config|
      config.mode = :platform_default
      config.showcases_enabled = true
    end

    get root_path
    assert_response :success
    assert_select "a", text: I18n.t("layout.component_showcase")
    assert_select "a", text: I18n.t("layout.ej2_showcase")
  end

  test "hides showcase navigation items when showcases_enabled is false" do
    ApplicationLayout.configure do |config|
      config.mode = :platform_default
      config.showcases_enabled = false
    end

    get root_path
    assert_response :success
    assert_select "a", text: I18n.t("layout.component_showcase"), count: 0
    assert_select "a", text: I18n.t("layout.ej2_showcase"), count: 0
  end

  test "renders custom application navigation items when registered" do
    ApplicationLayout.configure do |config|
      config.mode = :platform_default
      config.custom_navigation_items = [
        { label: "Custom Service Desk", href: "/organizations/1/service_requests" }
      ]
    end

    get root_path
    assert_response :success
    assert_select "a", text: "Custom Service Desk"
  end

  test "renders blank layout without header or sidebar when mode is blank" do
    ApplicationLayout.configure do |config|
      config.mode = :blank
    end

    get root_path
    assert_response :success
    assert_select "aside#application-sidebar", count: 0
    assert_select "header.application-shell__header", count: 0
  end

  test "supports custom mode configuration" do
    ApplicationLayout.configure do |config|
      config.mode = :application_custom
    end

    assert ApplicationLayout.config.custom?
  end

  private

  def sign_in_user(user)
    get new_session_path
    authenticity_token = Nokogiri::HTML(response.body).at_css("input[name='authenticity_token']")["value"]

    post session_path, params: {
      authenticity_token: authenticity_token,
      email_address: user.email_address,
      password: "a-secure-password"
    }
  end
end

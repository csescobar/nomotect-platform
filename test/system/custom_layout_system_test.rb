# frozen_string_literal: true

require "application_system_test_case"

class CustomLayoutSystemTest < ApplicationSystemTestCase
  setup do
    @user = User.create!(
      email_address: "layout_tester_#{SecureRandom.hex(4)}@example.com",
      password: "SecurePassword123!",
      password_confirmation: "SecurePassword123!"
    )
    @organization = Organization.create!(name: "Layout Test Org")
    Membership.create!(user: @user, organization: @organization, role: "owner")

    sign_in_user(@user)
  end

  teardown do
    ApplicationLayout.configure do |config|
      config.mode = :platform_default
      config.showcases_enabled = true
      config.custom_navigation_items = []
    end
  end

  test "visiting dashboard with showcases enabled renders showcase links in real browser" do
    ApplicationLayout.configure do |config|
      config.mode = :platform_default
      config.showcases_enabled = true
    end

    visit root_path
    assert_text I18n.t("layout.component_showcase")
    assert_text I18n.t("layout.ej2_showcase")
  end

  test "visiting dashboard with showcases disabled hides showcase links in real browser" do
    ApplicationLayout.configure do |config|
      config.mode = :platform_default
      config.showcases_enabled = false
    end

    visit root_path
    refute_text I18n.t("layout.component_showcase")
    refute_text I18n.t("layout.ej2_showcase")
  end

  test "visiting dashboard with custom navigation items renders custom links in real browser" do
    ApplicationLayout.configure do |config|
      config.mode = :platform_default
      config.custom_navigation_items = [
        { label: "Real Browser Service Desk", href: "/organizations/#{@organization.id}" }
      ]
    end

    visit root_path
    assert_text "Real Browser Service Desk"
  end

  test "visiting dashboard with blank layout mode hides shell header and sidebar in real browser" do
    ApplicationLayout.configure do |config|
      config.mode = :blank
    end

    visit root_path
    assert_no_selector "aside#application-sidebar"
    assert_no_selector "header.application-shell__header"
  end

  private

  def sign_in_user(user)
    visit new_session_path
    fill_in I18n.t("authentication.email"), with: user.email_address
    fill_in I18n.t("authentication.password"), with: "SecurePassword123!"
    click_button I18n.t("authentication.sign_in")
    assert_text I18n.t("layout.dashboard")
  end
end

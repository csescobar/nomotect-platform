require "test_helper"

class Ej2ShowcaseControllerTest < ActionDispatch::IntegrationTest
  setup do
    User.create!(email_address: "ej2showcase@example.com", password: "a-secure-password")

    get new_session_path
    authenticity_token = Nokogiri::HTML(response.body).at_css("input[name='authenticity_token']")["value"]

    post session_path, params: {
      authenticity_token: authenticity_token,
      email_address: "ej2showcase@example.com",
      password: "a-secure-password"
    }

    assert_redirected_to root_url
  end

  test "ej2 showcase renders the forms section by default" do
    get ej2_showcase_path

    assert_response :success
    assert_select "h1", text: I18n.t("ej2_showcase.title")
    assert_select ".ej2-showcase__sidebar"
    assert_select ".ej2-showcase__content"
    assert_select ".ej2-showcase-section"
    assert_select ".ej2-showcase__nav-link", minimum: 5
  end

  test "ej2 showcase renders forms section explicitly" do
    get ej2_showcase_path(section: "forms")

    assert_response :success
    assert_select "#ej2-forms-textbox"
    assert_select "#ej2-forms-numeric"
    assert_select "#ej2-forms-dropdown"
    assert_select "#ej2-forms-datepicker"
    assert_select "#ej2-forms-multiselect"
    assert_select "[data-controller='ej2-textbox']"
    assert_select "[data-controller='ej2-numeric']"
    assert_select "[data-controller='ej2-dropdown']"
    assert_select "[data-controller='ej2-datepicker']"
    assert_select "[data-controller='ej2-multiselect']"
  end

  test "ej2 showcase renders dialogs section explicitly" do
    get ej2_showcase_path(section: "dialogs")

    assert_response :success
    assert_select "#ej2-dialogs-confirmation"
    assert_select "#ej2-dialogs-destructive"
    assert_select "#ej2-dialogs-custom"
    assert_select "[data-controller='ej2-dialog']", minimum: 3

    audit = Accessibility::HtmlAudit.new(response.body)
    assert audit.valid?, audit.violations.map(&:message).join("\n")
  end

  test "ej2 showcase active nav link reflects current section" do
    get ej2_showcase_path(section: "forms")

    assert_response :success
    assert_select ".ej2-showcase__nav-link.is-active", text: /#{I18n.t("ej2_showcase.nav.forms")}/i
  end

  test "ej2 showcase renders with portuguese locale" do
    get ej2_showcase_path(locale: "pt-BR")

    assert_response :success
    assert_select "h1", text: I18n.t("ej2_showcase.title", locale: :"pt-BR")
  end

  test "ej2 showcase passes accessibility audit" do
    get ej2_showcase_path

    assert_response :success
    audit = Accessibility::HtmlAudit.new(response.body)
    assert audit.valid?, audit.violations.map(&:message).join("\n")
  end
end

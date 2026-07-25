require "test_helper"

class ComponentShowcaseControllerTest < ActionDispatch::IntegrationTest
  setup do
    User.create!(email_address: "showcase@example.com", password: "a-secure-password")

    post session_path, params: {
      email_address: "showcase@example.com",
      password: "a-secure-password"
    }

    assert_redirected_to root_url
  end

  test "showcase renders representative components without accessibility violations" do
    get component_showcase_path

    assert_response :success
    assert_select "h1", text: I18n.t("showcase.title")
    assert_select ".showcase__section", minimum: 4

    audit = Accessibility::HtmlAudit.new(response.body)
    assert audit.valid?, audit.violations.map(&:message).join("\n")
  end
end

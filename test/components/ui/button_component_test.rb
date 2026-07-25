require "test_helper"

class UI::ButtonComponentTest < ViewComponent::TestCase
  test "renders a link variant" do
    render_inline UI::ButtonComponent.new(label: "Health", href: "/health")

    assert_selector "a.button.button--primary[href='/health']", text: "Health"
  end
end

require "test_helper"

class Ui::ThemeSwitcherComponentTest < ViewComponent::TestCase
  test "renders system light and dark preferences" do
    render_inline Ui::ThemeSwitcherComponent.new

    assert_selector "[data-controller='theme']"
    assert_selector "select[data-action='theme#change'] option", count: 3
  end
end

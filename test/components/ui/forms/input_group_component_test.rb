# frozen_string_literal: true

require "test_helper"

class Ui::Forms::InputGroupComponentTest < ViewComponent::TestCase
  test "renders input group with prefix and suffix addons" do
    render_inline Ui::Forms::InputGroupComponent.new(name: "price", value: "99.90", prefix: "R$", suffix: ",00", placeholder: "0.00", label: "Price")

    assert_selector ".ui-input-group"
    assert_selector ".ui-input-group__prefix", text: "R$"
    assert_selector ".ui-input-group__suffix", text: ",00"
    assert_selector "input.ui-input-group__input[name='price'][value='99.90']"
  end

  test "raises ArgumentError when name is blank" do
    assert_raises(ArgumentError) do
      Ui::Forms::InputGroupComponent.new(name: "", value: "100")
    end
  end
end

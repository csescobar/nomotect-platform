# frozen_string_literal: true

require "test_helper"

class Ui::Forms::TagInputComponentTest < ViewComponent::TestCase
  test "renders tag input container and initial tags" do
    render_inline Ui::Forms::TagInputComponent.new(name: "tags", tags: %w[ruby rails ui])

    assert_selector ".ui-tag-input[data-controller='tag-input']"
    assert_selector ".ui-tag-input__tag", count: 3
    assert_selector ".ui-tag-input__tag", text: "ruby"
    assert_selector "input[type='hidden'][name='tags[]']", count: 3, visible: false
  end

  test "renders input field for adding new tags" do
    render_inline Ui::Forms::TagInputComponent.new(name: "tags", placeholder: "Add tag...")

    assert_selector "input[type='text'].ui-tag-input__field[placeholder='Add tag...']"
  end

  test "renders dismiss button on each tag" do
    render_inline Ui::Forms::TagInputComponent.new(name: "tags", tags: %w[test])

    assert_selector "button.ui-tag-input__remove[aria-label='Remove tag test']"
  end

  test "raises ArgumentError when name is missing" do
    assert_raises(ArgumentError) do
      Ui::Forms::TagInputComponent.new(name: "")
    end
  end
end

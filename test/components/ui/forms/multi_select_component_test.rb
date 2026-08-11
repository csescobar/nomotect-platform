# frozen_string_literal: true

require "test_helper"

class Ui::Forms::MultiSelectComponentTest < ViewComponent::TestCase
  def options
    [
      { value: "1", label: "Feature A" },
      { value: "2", label: "Feature B" },
      { value: "3", label: "Feature C" }
    ]
  end

  test "renders multi select container and selected chips" do
    render_inline Ui::Forms::MultiSelectComponent.new(name: "features", options: options, selected: %w[1 3])

    assert_selector ".ui-multi-select[data-controller='multi-select']"
    assert_selector ".ui-multi-select__chip", count: 2
    assert_selector "input[type='hidden'][name='features[]'][value='1']", visible: false
    assert_selector "input[type='hidden'][name='features[]'][value='3']", visible: false
  end

  test "renders dropdown list with options" do
    render_inline Ui::Forms::MultiSelectComponent.new(name: "features", options: options)

    assert_selector "[role='listbox']"
    assert_selector "[role='option']", count: 3
  end

  test "marks selected options with aria-selected" do
    render_inline Ui::Forms::MultiSelectComponent.new(name: "features", options: options, selected: [ "2" ])

    assert_selector "[role='option'][data-value='2'][aria-selected='true']"
    assert_selector "[role='option'][data-value='1'][aria-selected='false']"
  end

  test "raises ArgumentError when options are empty" do
    assert_raises(ArgumentError) do
      Ui::Forms::MultiSelectComponent.new(name: "features", options: [])
    end
  end
end

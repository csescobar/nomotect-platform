# frozen_string_literal: true

require "test_helper"

class Ui::Forms::ComboboxComponentTest < ViewComponent::TestCase
  def options
    [
      { value: "us", label: "United States" },
      { value: "br", label: "Brazil" },
      { value: "ca", label: "Canada" }
    ]
  end

  test "renders combobox input and hidden field" do
    render_inline Ui::Forms::ComboboxComponent.new(name: "country", options: options, selected: "br")

    assert_selector ".ui-combobox[data-controller='combobox']"
    assert_selector "input[type='hidden'][name='country'][value='br']", visible: false
    assert_selector "input[role='combobox'][aria-expanded='false']"
  end

  test "renders options listbox" do
    render_inline Ui::Forms::ComboboxComponent.new(name: "country", options: options)

    assert_selector "[role='listbox']"
    assert_selector "[role='option']", count: 3
    assert_selector "[role='option'][data-value='br']", text: "Brazil"
  end

  test "marks selected option with aria-selected" do
    render_inline Ui::Forms::ComboboxComponent.new(name: "country", options: options, selected: "br")

    assert_selector "[role='option'][data-value='br'][aria-selected='true']"
    assert_selector "[role='option'][data-value='us'][aria-selected='false']"
  end

  test "accepts placeholder" do
    render_inline Ui::Forms::ComboboxComponent.new(name: "country", options: options, placeholder: "Select a country...")

    assert_selector "input[role='combobox'][placeholder='Select a country...']"
  end

  test "raises ArgumentError when options are empty" do
    assert_raises(ArgumentError) do
      Ui::Forms::ComboboxComponent.new(name: "country", options: [])
    end
  end
end

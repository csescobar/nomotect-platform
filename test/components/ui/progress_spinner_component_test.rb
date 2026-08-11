# frozen_string_literal: true

require "test_helper"

class Ui::ProgressSpinnerComponentTest < ViewComponent::TestCase
  test "renders spinner svg with role progressbar" do
    render_inline Ui::ProgressSpinnerComponent.new

    assert_selector ".progress-spinner[role='progressbar'][aria-label='Loading']"
    assert_selector "svg.progress-spinner__circle"
  end

  test "supports size variants sm, md, lg" do
    %i[sm md lg].each do |size|
      render_inline Ui::ProgressSpinnerComponent.new(size: size)
      assert_selector ".progress-spinner.progress-spinner--#{size}"
    end
  end

  test "accepts custom label for screen readers" do
    render_inline Ui::ProgressSpinnerComponent.new(label: "Saving changes...")

    assert_selector "[aria-label='Saving changes...']"
  end

  test "raises ArgumentError for invalid size" do
    assert_raises(ArgumentError) do
      Ui::ProgressSpinnerComponent.new(size: :huge)
    end
  end
end

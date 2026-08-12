# frozen_string_literal: true

require "test_helper"

class Ui::ProgressBarComponentTest < ViewComponent::TestCase
  test "renders linear progress bar with role progressbar" do
    render_inline Ui::ProgressBarComponent.new(value: 45)

    assert_selector ".progress-bar[role='progressbar'][aria-valuenow='45'][aria-valuemin='0'][aria-valuemax='100']"
    assert_selector ".progress-bar__fill[data-progress-bar-value-value='45']"
  end

  test "renders percentage label when show_label is true" do
    render_inline Ui::ProgressBarComponent.new(value: 75, show_label: true)

    assert_selector ".progress-bar__label", text: "75%"
  end

  test "accepts custom label text" do
    render_inline Ui::ProgressBarComponent.new(value: 50, label: "Uploading file...")

    assert_selector ".progress-bar__label", text: "Uploading file..."
  end

  test "renders indeterminate progress bar" do
    render_inline Ui::ProgressBarComponent.new(indeterminate: true)

    assert_selector ".progress-bar.progress-bar--indeterminate[role='progressbar']"
    assert_no_selector "[aria-valuenow]"
  end

  test "clamps value between 0 and 100" do
    render_inline Ui::ProgressBarComponent.new(value: 150)

    assert_selector "[aria-valuenow='100']"
  end

  test "supports size variants sm, md, lg" do
    %i[sm md lg].each do |size|
      render_inline Ui::ProgressBarComponent.new(value: 30, size: size)
      assert_selector ".progress-bar.progress-bar--#{size}"
    end
  end
end

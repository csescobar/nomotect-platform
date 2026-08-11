# frozen_string_literal: true

require "test_helper"

class Ui::PopoverComponentTest < ViewComponent::TestCase
  test "renders popover trigger and content panel" do
    render_inline Ui::PopoverComponent.new(title: "Popover Title") do |popover|
      popover.with_trigger_slot { "Click me" }
      popover.with_body_slot { "Popover content inside" }
    end

    assert_selector ".popover[data-controller='popover']"
    assert_selector ".popover__trigger", text: "Click me"
    assert_selector ".popover__panel", text: "Popover content inside"
    assert_selector ".popover__title", text: "Popover Title"
  end

  test "supports placement positions top, bottom, left, right" do
    %i[top bottom left right].each do |placement|
      render_inline Ui::PopoverComponent.new(placement: placement) do |popover|
        popover.with_trigger_slot { "Open" }
        popover.with_body_slot { "Content" }
      end

      assert_selector ".popover__panel.popover__panel--#{placement}"
    end
  end

  test "has aria-expanded and aria-controls attributes" do
    render_inline Ui::PopoverComponent.new do |popover|
      popover.with_trigger_slot { "Open" }
      popover.with_body_slot { "Content" }
    end

    assert_selector ".popover__trigger[aria-expanded='false'][aria-haspopup='dialog']"
  end

  test "raises ArgumentError for invalid placement" do
    assert_raises(ArgumentError) do
      Ui::PopoverComponent.new(placement: :diagonal) do |popover|
        popover.with_trigger_slot { "Open" }
        popover.with_body_slot { "Content" }
      end
    end
  end
end

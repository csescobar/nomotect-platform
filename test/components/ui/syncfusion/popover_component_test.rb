# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class PopoverComponentTest < ViewComponent::TestCase
      test "renders popover wrapper with title and content block" do
        render_inline(PopoverComponent.new(
          title: "Quick Info",
          trigger_text: "Help"
        )) { "<p>Extra details here</p>".html_safe }

        assert_selector ".ej2-popover-wrapper"
        assert_selector "button.ej2-popover__trigger", text: "Help"
        assert_selector ".ej2-popover__title", text: "Quick Info"
        assert_selector "p", text: "Extra details here"
      end
    end
  end
end

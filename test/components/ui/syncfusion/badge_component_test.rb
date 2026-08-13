# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class BadgeComponentTest < ViewComponent::TestCase
      test "renders badge with text and variant class" do
        render_inline(BadgeComponent.new(
          text: "Active",
          variant: :success
        ))

        assert_selector ".ej2-badge.ej2-badge--success", text: "Active"
      end
    end
  end
end

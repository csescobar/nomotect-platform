# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class TimelineComponentTest < ViewComponent::TestCase
      test "renders timeline events with title, timestamp, and status" do
        render_inline(TimelineComponent.new(
          events: [
            { title: "Order Placed", timestamp: "10:00 AM", status: :success },
            { title: "Processing", timestamp: "10:30 AM", status: :info }
          ]
        ))

        assert_selector ".ej2-timeline"
        assert_selector ".ej2-timeline__item", count: 2
        assert_selector ".ej2-timeline__title", text: "Order Placed"
        assert_selector ".ej2-timeline__timestamp", text: "10:00 AM"
      end
    end
  end
end

# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class CardComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Card container with title and body slot" do
        render_inline Ui::Syncfusion::CardComponent.new(
          title: "System Metrics",
          description: "Live CPU and Memory performance"
        ) do
          "Card Content"
        end

        assert_selector "div.e-card[data-controller='ej2-card']"
        assert_selector "div.e-card-header-title", text: "System Metrics"
        assert_selector "div.e-card-sub-title", text: "Live CPU and Memory performance"
        assert_selector "div.e-card-content", text: "Card Content"
      end
    end
  end
end

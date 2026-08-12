# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class TabsComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Tab with ej2-tab controller" do
        items = [
          { title: "Tab 1", content: "Content 1" },
          { title: "Tab 2", content: "Content 2" }
        ]

        render_inline Ui::Syncfusion::TabsComponent.new(
          items: items
        )

        assert_selector "div.e-tab[data-controller='ej2-tab']"
        assert_selector "div.e-tab-header"
      end
    end
  end
end

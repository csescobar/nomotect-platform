# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class BreadcrumbComponentTest < ViewComponent::TestCase
      test "renders breadcrumb items with links and active state" do
        render_inline(BreadcrumbComponent.new(
          items: [
            { text: "Home", url: "/" },
            { text: "Settings", url: "/settings" },
            { text: "Profile", active: true }
          ]
        ))

        assert_selector "nav.ej2-breadcrumb"
        assert_selector "a.ej2-breadcrumb__link", text: "Home"
        assert_selector "a.ej2-breadcrumb__link", text: "Settings"
        assert_selector "span.ej2-breadcrumb__active", text: "Profile"
      end
    end
  end
end

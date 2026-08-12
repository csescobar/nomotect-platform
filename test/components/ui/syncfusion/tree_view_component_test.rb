# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class TreeViewComponentTest < ViewComponent::TestCase
      test "renders Syncfusion TreeView with ej2-treeview controller" do
        nodes = [
          { id: "1", text: "Root Node", expanded: true, children: [ { id: "11", text: "Child Node" } ] }
        ]

        render_inline Ui::Syncfusion::TreeViewComponent.new(
          nodes: nodes
        )

        assert_selector "div.e-treeview[data-controller='ej2-treeview']"
      end
    end
  end
end

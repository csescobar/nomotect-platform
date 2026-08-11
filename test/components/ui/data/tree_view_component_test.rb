# frozen_string_literal: true

require "test_helper"

class Ui::Data::TreeViewComponentTest < ViewComponent::TestCase
  def tree_nodes
    [
      {
        id: "root-1",
        label: "Documents",
        children: [
          { id: "child-1", label: "Architecture.pdf" },
          { id: "child-2", label: "Roadmap.md" }
        ]
      },
      {
        id: "root-2",
        label: "Images",
        children: [
          { id: "child-3", label: "Logo.png" }
        ]
      }
    ]
  end

  test "renders treeview container with role tree" do
    render_inline Ui::Data::TreeViewComponent.new(nodes: tree_nodes)

    assert_selector ".tree-view[role='tree']"
    assert_selector ".tree-view__item[role='treeitem']", count: 5
    assert_text "Documents"
    assert_text "Architecture.pdf"
  end

  test "expandable nodes have aria-expanded attribute" do
    render_inline Ui::Data::TreeViewComponent.new(nodes: tree_nodes)

    assert_selector ".tree-view__item[role='treeitem'][aria-expanded='false']", text: "Documents"
  end

  test "nested items use role group" do
    render_inline Ui::Data::TreeViewComponent.new(nodes: tree_nodes)

    assert_selector ".tree-view__group[role='group']", count: 2
  end

  test "attaches tree-view stimulus controller" do
    render_inline Ui::Data::TreeViewComponent.new(nodes: tree_nodes)

    assert_selector "[data-controller='tree-view']"
  end

  test "raises ArgumentError when nodes are empty" do
    assert_raises(ArgumentError) do
      Ui::Data::TreeViewComponent.new(nodes: [])
    end
  end
end

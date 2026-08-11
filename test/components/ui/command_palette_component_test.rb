# frozen_string_literal: true

require "test_helper"

class Ui::CommandPaletteComponentTest < ViewComponent::TestCase
  def default_items
    [
      { label: "Go to Customers", href: "/customers", group: "Navigation", keywords: "customers list" },
      { label: "Go to Members", href: "/members", group: "Navigation", keywords: "members team" },
      { label: "Create Customer", href: "/customers/new", group: "Actions", keywords: "new customer create" }
    ]
  end

  test "renders the command palette dialog element" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector "dialog.command-palette"
  end

  test "renders search input with correct ARIA attributes" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector "input[type='search'][role='combobox'][aria-autocomplete='list']"
    assert_selector "input[aria-label]"
  end

  test "renders all items in the results list" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector "[role='listbox']"
    assert_selector "[role='option']", count: 3
  end

  test "each item has href for navigation" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector "[role='option'] a[href='/customers']"
    assert_selector "[role='option'] a[href='/members']"
  end

  test "items include keywords as data attribute for client-side fuzzy search" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector "[data-keywords='customers list']"
    assert_selector "[data-keywords='members team']"
  end

  test "items are serialized as JSON in data attribute for Stimulus" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector "[data-controller='command-palette']"
    assert_selector "[data-command-palette-items-value]"
  end

  test "groups are visually rendered as group headings" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector ".command-palette__group-label", text: "Navigation"
    assert_selector ".command-palette__group-label", text: "Actions"
  end

  test "dialog has correct ARIA role and label" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector "dialog[aria-label]"
    assert_selector "dialog[aria-modal='true']"
  end

  test "trigger button is rendered with keyboard shortcut hint" do
    render_inline Ui::CommandPaletteComponent.new(items: default_items)

    assert_selector "[data-action='click->command-palette#open']"
    assert_selector "kbd", text: "K"
  end

  test "raises ArgumentError when items are empty" do
    assert_raises(ArgumentError) do
      Ui::CommandPaletteComponent.new(items: [])
    end
  end
end

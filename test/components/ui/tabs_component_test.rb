# frozen_string_literal: true

require "test_helper"

class Ui::TabsComponentTest < ViewComponent::TestCase
  test "renders tab list and panels with correct ARIA roles" do
    tabs = [
      { id: "overview", label: "Overview", content: "Overview content" },
      { id: "activity", label: "Activity", content: "Activity content" },
      { id: "settings", label: "Settings", content: "Settings content" }
    ]

    render_inline Ui::TabsComponent.new(tabs: tabs, active_tab: "overview")

    assert_selector "[role='tablist']"
    assert_selector "[role='tab']", count: 3
    assert_selector "[role='tabpanel']", count: 3
  end

  test "active tab has aria-selected=true and correct tabindex" do
    tabs = [
      { id: "overview", label: "Overview", content: "Overview content" },
      { id: "details", label: "Details", content: "Details content" }
    ]

    render_inline Ui::TabsComponent.new(tabs: tabs, active_tab: "overview")

    assert_selector "[role='tab'][aria-selected='true'][tabindex='0']", text: "Overview"
    assert_selector "[role='tab'][aria-selected='false'][tabindex='-1']", text: "Details"
  end

  test "inactive panels are hidden via aria-hidden" do
    tabs = [
      { id: "tab1", label: "Tab 1", content: "First" },
      { id: "tab2", label: "Tab 2", content: "Second" }
    ]

    render_inline Ui::TabsComponent.new(tabs: tabs, active_tab: "tab1")

    assert_selector "[role='tabpanel'][aria-hidden='false']", count: 1
    assert_selector "[role='tabpanel'][aria-hidden='true']", count: 1
  end

  test "tab controls its panel via aria-controls / aria-labelledby" do
    tabs = [ { id: "main", label: "Main", content: "Main content" } ]

    render_inline Ui::TabsComponent.new(tabs: tabs, active_tab: "main")

    assert_selector "[role='tab'][aria-controls='panel-main']"
    assert_selector "[role='tabpanel'][id='panel-main'][aria-labelledby='tab-main']"
  end

  test "attaches Stimulus data attributes for interactivity" do
    tabs = [ { id: "a", label: "A", content: "A content" } ]

    render_inline Ui::TabsComponent.new(tabs: tabs, active_tab: "a")

    assert_selector "[data-controller='tabs']"
    assert_selector "[data-tabs-target='tab']"
    assert_selector "[data-tabs-target='panel']"
  end

  test "raises ArgumentError when tabs are empty" do
    assert_raises(ArgumentError) do
      Ui::TabsComponent.new(tabs: [], active_tab: "none")
    end
  end
end

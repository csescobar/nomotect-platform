# frozen_string_literal: true

require "test_helper"

class Ui::Data::TimelineComponentTest < ViewComponent::TestCase
  def events
    [
      { title: "Project Initialized", timestamp: "2026-08-01", description: "Created baseline architecture." },
      { title: "Epic 11 Completed", timestamp: "2026-08-11", description: "Identity & Governance system implemented." },
      { title: "Design System 2.0 Launched", timestamp: "2026-08-12", description: "All 5 component families released." }
    ]
  end

  test "renders vertical timeline and event items" do
    render_inline Ui::Data::TimelineComponent.new(events: events)

    assert_selector ".timeline"
    assert_selector ".timeline__item", count: 3
    assert_text "Project Initialized"
    assert_text "Epic 11 Completed"
  end

  test "renders event timestamps and descriptions" do
    render_inline Ui::Data::TimelineComponent.new(events: events)

    assert_selector ".timeline__timestamp", text: "2026-08-01"
    assert_selector ".timeline__description", text: "Created baseline architecture."
  end

  test "renders node icons when provided" do
    custom_events = [
      { title: "Deployment", timestamp: "Today", icon: "🚀" }
    ]
    render_inline Ui::Data::TimelineComponent.new(events: custom_events)

    assert_selector ".timeline__node-icon", text: "🚀"
  end

  test "raises ArgumentError when events are empty" do
    assert_raises(ArgumentError) do
      Ui::Data::TimelineComponent.new(events: [])
    end
  end
end

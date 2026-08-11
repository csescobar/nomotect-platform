# frozen_string_literal: true

require "test_helper"

class Ui::Data::ActivityFeedComponentTest < ViewComponent::TestCase
  def activities
    [
      {
        actor: { name: "Alice Ferreira" },
        action: "created customer",
        target: "Acme Corp",
        timestamp: "10 minutes ago"
      },
      {
        actor: { name: "Bob Santos" },
        action: "updated role",
        target: "Billing Admin",
        timestamp: "1 hour ago"
      }
    ]
  end

  test "renders activity feed list and items" do
    render_inline Ui::Data::ActivityFeedComponent.new(activities: activities)

    assert_selector ".activity-feed"
    assert_selector ".activity-feed__item", count: 2
    assert_text "Alice Ferreira"
    assert_text "created customer"
    assert_text "Acme Corp"
  end

  test "renders avatar for each activity actor" do
    render_inline Ui::Data::ActivityFeedComponent.new(activities: activities)

    assert_selector ".activity-feed__avatar .avatar", count: 2
  end

  test "renders timestamp" do
    render_inline Ui::Data::ActivityFeedComponent.new(activities: activities)

    assert_selector ".activity-feed__timestamp", text: "10 minutes ago"
  end

  test "raises ArgumentError when activities are empty" do
    assert_raises(ArgumentError) do
      Ui::Data::ActivityFeedComponent.new(activities: [])
    end
  end
end

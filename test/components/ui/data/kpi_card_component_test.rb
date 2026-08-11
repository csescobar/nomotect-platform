# frozen_string_literal: true

require "test_helper"

class Ui::Data::KpiCardComponentTest < ViewComponent::TestCase
  test "renders title and value" do
    render_inline Ui::Data::KpiCardComponent.new(title: "Total Revenue", value: "$45,231")

    assert_selector ".kpi-card"
    assert_selector ".kpi-card__title", text: "Total Revenue"
    assert_selector ".kpi-card__value", text: "$45,231"
  end

  test "renders positive trend indicator" do
    render_inline Ui::Data::KpiCardComponent.new(
      title: "Active Users",
      value: "1,240",
      change: "+12%",
      trend: :up
    )

    assert_selector ".kpi-card__trend.kpi-card__trend--up", text: "+12%"
  end

  test "renders negative trend indicator" do
    render_inline Ui::Data::KpiCardComponent.new(
      title: "Churn Rate",
      value: "2.4%",
      change: "-0.5%",
      trend: :down
    )

    assert_selector ".kpi-card__trend.kpi-card__trend--down", text: "-0.5%"
  end

  test "renders neutral trend indicator" do
    render_inline Ui::Data::KpiCardComponent.new(
      title: "Server Uptime",
      value: "99.9%",
      change: "0%",
      trend: :neutral
    )

    assert_selector ".kpi-card__trend.kpi-card__trend--neutral", text: "0%"
  end

  test "accepts icon" do
    render_inline Ui::Data::KpiCardComponent.new(title: "Sales", value: "100", icon: "📊")

    assert_selector ".kpi-card__icon", text: "📊"
  end

  test "raises ArgumentError when title is blank" do
    assert_raises(ArgumentError) do
      Ui::Data::KpiCardComponent.new(title: "", value: "0")
    end
  end

  test "raises ArgumentError for invalid trend" do
    assert_raises(ArgumentError) do
      Ui::Data::KpiCardComponent.new(title: "Test", value: "0", trend: :skyrocketing)
    end
  end
end

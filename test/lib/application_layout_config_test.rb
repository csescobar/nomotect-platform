# frozen_string_literal: true

require "test_helper"

class ApplicationLayoutConfigTest < ActiveSupport::TestCase
  test "defaults to platform_default mode with showcases enabled" do
    config = ApplicationLayout::Config.new

    assert_equal :platform_default, config.mode
    assert config.showcases_enabled?
    assert_equal [], config.custom_navigation_items
  end

  test "supports declarative mode selection and custom navigation registration" do
    config = ApplicationLayout::Config.new(
      mode: :application_custom,
      showcases_enabled: false,
      custom_navigation_items: [
        { label: "Service Desk", href: "/organizations/1/service_requests" }
      ]
    )

    assert_equal :application_custom, config.mode
    assert_not config.showcases_enabled?
    assert_equal 1, config.custom_navigation_items.size
    assert_equal "Service Desk", config.custom_navigation_items.first[:label]
  end

  test "disables showcases when NOMOTECT_SHOWCASES_ENABLED environment variable is false" do
    config = ApplicationLayout::Config.new(showcases_enabled: true)

    with_env("NOMOTECT_SHOWCASES_ENABLED" => "false") do
      assert_not config.showcases_enabled?
    end
  end

  test "validates mode values" do
    assert_raises(ArgumentError) do
      ApplicationLayout::Config.new(mode: :invalid_mode)
    end
  end

  private

  def with_env(hash)
    old_values = hash.keys.index_with { |key| ENV[key] }
    hash.each { |key, value| ENV[key] = value }
    yield
  ensure
    old_values.each { |key, value| ENV[key] = value }
  end
end

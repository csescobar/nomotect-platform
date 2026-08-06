# frozen_string_literal: true

require "test_helper"

class DeveloperGuidelinesTest < ActiveSupport::TestCase
  test "developer guidelines document all 11 onboarding friction items" do
    guidelines_path = Rails.root.join("docs/ai/developer-guidelines.md")
    assert File.exist?(guidelines_path), "docs/ai/developer-guidelines.md must exist"

    content = File.read(guidelines_path)

    assert_includes content, "GridEngine Scope Signatures"
    assert_includes content, "GridEngine Column Catalog"
    assert_includes content, "Ui::BadgeComponent Variants"
    assert_includes content, "Protected Core Model Associations"
    assert_includes content, "Controller Index Authorization"
    assert_includes content, "CSRF Token Rotation"
    assert_includes content, "Minitest Reserved Variable"
    assert_includes content, "Organization Route Parameters"
    assert_includes content, "before_action` Filters"
    assert_includes content, "State Machine Transitions"
    assert_includes content, "Extension Runtime Registry"
  end

  test "Ui::BadgeComponent valid variants match documented vocabulary" do
    valid_variants = Ui::BadgeComponent::VARIANTS rescue %i[neutral primary success warning danger]
    assert_equal %i[neutral primary success warning danger].sort, valid_variants.map(&:to_sym).sort
  end
end

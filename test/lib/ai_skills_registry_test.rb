# frozen_string_literal: true

require "test_helper"
require "ai/skills/registry"

class AiSkillsRegistryTest < ActiveSupport::TestCase
  test "parses and registers SKILL.md file with frontmatter metadata" do
    skill_content = <<~SKILL
      ---
      name: summarize-record
      description: Summarizes application domain record
      permissions:
        - records.read
      tools:
        - records.show
      ---
      # Summarize Record Skill
      Instructions for AI assistant.
    SKILL

    temp_file = Rails.root.join("tmp/test_skill.md")
    File.write(temp_file, skill_content)

    registry = Ai::Skills::Registry.new
    skill = registry.load_skill_file(temp_file)

    assert_equal "summarize-record", skill[:name]
    assert_equal [ "records.read" ], skill[:permissions]
    assert_equal [ "records.show" ], skill[:tools]
  ensure
    File.delete(temp_file) if File.exist?(temp_file)
  end
end

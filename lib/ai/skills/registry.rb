# frozen_string_literal: true

require_relative "skill_parser"

module Ai
  module Skills
    class Registry
      def initialize(skills_dir: "config/skills")
        @skills_dir = Rails.root.join(skills_dir)
        @skills = {}
      end

      def load_skill_file(path)
        skill = SkillParser.parse(path)
        @skills[skill[:name]] = skill
        skill
      end

      def fetch(name)
        @skills[name.to_s]
      end

      def all_skills
        @skills.values
      end
    end
  end
end

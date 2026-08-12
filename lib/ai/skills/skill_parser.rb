# frozen_string_literal: true

require "yaml"

module Ai
  module Skills
    class SkillParser
      class << self
        def parse(file_path)
          content = File.read(file_path)

          if content =~ /\A(---\s*\n.*?\n?)^(---\s*$\n?)/m
            frontmatter_raw = ::Regexp.last_match(1)
            instructions = content[::Regexp.last_match(0).length..-1].strip
            frontmatter = YAML.safe_load(frontmatter_raw, symbolize_names: true) || {}

            {
              name: frontmatter[:name] || File.basename(file_path, ".md"),
              description: frontmatter[:description],
              permissions: frontmatter[:permissions] || [],
              tools: frontmatter[:tools] || [],
              instructions: instructions,
              file_path: file_path
            }
          else
            {
              name: File.basename(file_path, ".md"),
              description: nil,
              permissions: [],
              tools: [],
              instructions: content.strip,
              file_path: file_path
            }
          end
        end
      end
    end
  end
end

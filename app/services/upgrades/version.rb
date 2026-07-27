# frozen_string_literal: true

require "rubygems"

module Upgrades
  class Version
    PATTERN = /\A0|[1-9]\d*\.(?:0|[1-9]\d*)\.(?:0|[1-9]\d*)(?:-[0-9A-Za-z.-]+)?(?:\+[0-9A-Za-z.-]+)?\z/

    include Comparable

    attr_reader :value

    def initialize(value)
      @value = String(value)
      raise ArgumentError, "invalid semantic version: #{@value}" unless PATTERN.match?(@value)

      @gem_version = Gem::Version.new(@value.delete_prefix("v").split("+").first)
    end

    def <=>(other)
      gem_version <=> self.class.new(other.to_s).send(:gem_version)
    end

    def satisfies?(requirement)
      Gem::Requirement.new(String(requirement)).satisfied_by?(gem_version)
    rescue Gem::Requirement::BadRequirementError
      raise ArgumentError, "invalid version requirement: #{requirement}"
    end

    def to_s
      value
    end

    protected

    attr_reader :gem_version
  end
end

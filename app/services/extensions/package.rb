# frozen_string_literal: true

require "pathname"

module Extensions
  class Package
    attr_reader :declaration, :root, :manifest

    def initialize(declaration:, root:, manifest:)
      @declaration = declaration.freeze
      @root = Pathname(root).freeze
      @manifest = manifest
      freeze
    end

    def id = manifest.id
    def package_name = declaration.fetch("package")
    def required? = declaration.fetch("required")
    def version = manifest.version

    def to_h
      {
        id: id,
        package: package_name,
        version: version,
        required: required?,
        manifest_path: manifest.path&.to_s
      }
    end
  end
end

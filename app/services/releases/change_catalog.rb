# frozen_string_literal: true

module Releases
  class ChangeCatalog
    def initialize(path: Rails.root.join("changes"))
      @path = Pathname(path)
    end

    def fragments
      return [] unless path.directory?

      loaded = path.glob("*.yml").sort.map { |file| ChangeFragment.load(file) }
      duplicates = loaded.group_by(&:id).select { |_id, items| items.many? }.keys
      raise DuplicateFragment, "duplicate change fragment ids: #{duplicates.join(', ')}" if duplicates.any?

      loaded.freeze
    end

    private

    attr_reader :path

    class DuplicateFragment < StandardError; end
  end
end

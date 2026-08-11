# frozen_string_literal: true

require "digest"

module Assurance
  class FreshnessChecker
    attr_reader :file_path, :max_age_days

    def initialize(file_path:, max_age_days: 30)
      @file_path = file_path.is_a?(Pathname) ? file_path : Rails.root.join(file_path)
      @max_age_days = max_age_days.to_i
    end

    def fresh?
      return false unless File.exist?(@file_path)

      age_in_days = (Time.now - File.mtime(@file_path)) / 86_400.0
      age_in_days <= @max_age_days
    end

    def status
      fresh? ? "FRESH" : "STALE"
    end

    def sha256_digest
      return nil unless File.exist?(@file_path)

      Digest::SHA256.file(@file_path).hexdigest
    end

    def metadata
      return { status: "STALE", exist: false } unless File.exist?(@file_path)

      {
        status: status,
        exist: true,
        mtime: File.mtime(@file_path).iso8601,
        sha256: sha256_digest,
        age_days: ((Time.now - File.mtime(@file_path)) / 86_400.0).round(2)
      }
    end
  end
end

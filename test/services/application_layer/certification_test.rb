# frozen_string_literal: true

require "test_helper"
require "fileutils"
require "tmpdir"

module ApplicationLayer
  class CertificationTest < ActiveSupport::TestCase
    test "certifies every Phase 3 application boundary with deterministic evidence" do
      report = Certification.new(source_commit: "a" * 40).call

      assert_equal "passed", report.fetch("status")
      assert_equal 3, report.fetch("phase")
      assert_equal Certification::EVIDENCE, report.fetch("evidence")
      assert_not report.fetch("protected_core_modified")
      assert report.fetch("community_fallback")
      assert_not report.fetch("extension_enabled_by_default")
      assert report.fetch("credential_free")
      assert_not report.dig("publication", "allowed")
    end

    test "rejects invalid source identity and incomplete application evidence" do
      assert_raises(Certification::InvalidCertification) do
        Certification.new(source_commit: "main").call
      end

      Dir.mktmpdir do |directory|
        error = assert_raises(Certification::InvalidCertification) do
          Certification.new(source_commit: "b" * 40, root: directory).call
        end
        assert_includes error.message, "missing application-layer evidence"
      end
    end
  end
end

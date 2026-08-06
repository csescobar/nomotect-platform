# frozen_string_literal: true

require "test_helper"
require_relative "../../lib/repository_intelligence/documentation_governance"
require_relative "../../lib/repository_intelligence/platform"

class ApplicationSkeletonDocumentationSanitizationTest < ActiveSupport::TestCase
  test "all documents registered in config/ai/documentation.yml exist on disk and pass validation" do
    governance = RepositoryIntelligence::DocumentationGovernance.new(
      repository_path: Rails.root,
      contracts: RepositoryIntelligence::ContractRegistry.new(Rails.root.join("config/ai/contracts")).load,
      catalog_path: Rails.root.join("config/ai/documentation.yml"),
      today: Date.current
    )

    assert_empty governance.validate, "config/ai/documentation.yml must contain zero validation findings"
  end

  test "developer guidelines and layout examples are registered in documentation catalog" do
    catalog = YAML.load_file(Rails.root.join("config/ai/documentation.yml"))
    paths = catalog["documents"].map { |doc| doc["path"] }

    assert_includes paths, "docs/ai/developer-guidelines.md"
  end
end

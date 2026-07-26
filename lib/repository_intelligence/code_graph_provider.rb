# frozen_string_literal: true

module RepositoryIntelligence
  class CodeGraphProvider
    Result = Data.define(:provider, :repository_commit, :nodes, :edges, :metadata)

    def index(repository_path:, repository_commit:)
      raise NotImplementedError, "#{self.class} must implement #index"
    end

    def available?
      false
    end

    def status
      { available: available?, provider: self.class.name }
    end
  end
end

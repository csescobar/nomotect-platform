# frozen_string_literal: true

module Ai
  class BaseProvider
    attr_reader :name, :model

    def initialize(name: "base", model: "default")
      @name = name
      @model = model
    end

    def complete(prompt:, options: {})
      raise NotImplementedError, "#{self.class.name}#complete is not implemented"
    end

    def healthy?
      true
    end
  end
end

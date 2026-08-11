# frozen_string_literal: true

require "test_helper"

class Ui::Forms::AutocompleteComponentTest < ViewComponent::TestCase
  def static_suggestions
    %w[Ruby Rails React Redux Rust RSpec]
  end

  test "renders autocomplete input with static suggestions" do
    render_inline Ui::Forms::AutocompleteComponent.new(name: "skill", suggestions: static_suggestions)

    assert_selector ".ui-autocomplete[data-controller='autocomplete']"
    assert_selector "input[type='text'][name='skill'][aria-autocomplete='list']"
    assert_selector "[data-autocomplete-suggestions-value]"
  end

  test "supports remote endpoint URL" do
    render_inline Ui::Forms::AutocompleteComponent.new(name: "user_search", url: "/api/users/search")

    assert_selector "[data-autocomplete-url-value='/api/users/search']"
  end

  test "renders suggestions list container" do
    render_inline Ui::Forms::AutocompleteComponent.new(name: "skill", suggestions: static_suggestions)

    assert_selector ".ui-autocomplete__results[role='listbox']"
  end

  test "raises ArgumentError when neither suggestions nor url provided" do
    assert_raises(ArgumentError) do
      Ui::Forms::AutocompleteComponent.new(name: "skill")
    end
  end
end

# frozen_string_literal: true

require "test_helper"

class Ui::PaginationComponentTest < ViewComponent::TestCase
  test "renders pagination navigation container" do
    render_inline Ui::PaginationComponent.new(current_page: 2, total_pages: 5, url_pattern: "/customers?page=:page")

    assert_selector "nav.pagination[aria-label='Pagination']"
  end

  test "renders previous and next links with aria attributes" do
    render_inline Ui::PaginationComponent.new(current_page: 2, total_pages: 5, url_pattern: "/customers?page=:page")

    assert_selector "a.pagination__prev[href='/customers?page=1']", text: "Previous"
    assert_selector "a.pagination__next[href='/customers?page=3']", text: "Next"
  end

  test "disables previous link on first page" do
    render_inline Ui::PaginationComponent.new(current_page: 1, total_pages: 5, url_pattern: "/customers?page=:page")

    assert_selector ".pagination__prev.pagination__link--disabled[aria-disabled='true']"
    assert_no_selector "a.pagination__prev"
  end

  test "disables next link on last page" do
    render_inline Ui::PaginationComponent.new(current_page: 5, total_pages: 5, url_pattern: "/customers?page=:page")

    assert_selector ".pagination__next.pagination__link--disabled[aria-disabled='true']"
    assert_no_selector "a.pagination__next"
  end

  test "renders page number buttons and highlights current page" do
    render_inline Ui::PaginationComponent.new(current_page: 3, total_pages: 5, url_pattern: "/customers?page=:page")

    assert_selector "a.pagination__page[aria-current='page']", text: "3"
    assert_selector "a.pagination__page[href='/customers?page=1']", text: "1"
    assert_selector "a.pagination__page[href='/customers?page=5']", text: "5"
  end

  test "raises ArgumentError for invalid current_page or total_pages" do
    assert_raises(ArgumentError) do
      Ui::PaginationComponent.new(current_page: 0, total_pages: 5, url_pattern: "/test")
    end
  end
end

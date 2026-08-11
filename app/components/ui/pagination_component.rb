# frozen_string_literal: true

module Ui
  class PaginationComponent < BaseComponent
    def initialize(current_page:, total_pages:, url_pattern:, html_options: {})
      raise ArgumentError, "current_page must be >= 1" if current_page.to_i < 1
      raise ArgumentError, "total_pages must be >= 1" if total_pages.to_i < 1

      @current_page = current_page.to_i
      @total_pages = total_pages.to_i
      @url_pattern = url_pattern
      @html_options = html_options
    end

    def call
      tag.nav(
        **merged_html_options(
          class: "pagination",
          aria: { label: "Pagination" }
        )
      ) do
        safe_join([
          render_previous_link,
          render_page_numbers,
          render_next_link
        ])
      end
    end

    private

    def render_previous_link
      if @current_page > 1
        link_to("Previous", page_url(@current_page - 1), class: "pagination__prev")
      else
        tag.span("Previous", class: "pagination__prev pagination__link--disabled", aria: { disabled: true })
      end
    end

    def render_next_link
      if @current_page < @total_pages
        link_to("Next", page_url(@current_page + 1), class: "pagination__next")
      else
        tag.span("Next", class: "pagination__next pagination__link--disabled", aria: { disabled: true })
      end
    end

    def render_page_numbers
      tag.ul(class: "pagination__list") do
        safe_join((1..@total_pages).map { |page| render_page_number(page) })
      end
    end

    def render_page_number(page)
      is_current = page == @current_page
      tag.li(class: "pagination__item") do
        link_to(
          page.to_s,
          page_url(page),
          class: class_names("pagination__page", ("pagination__page--active" if is_current)),
          aria: { current: is_current ? "page" : nil }.compact
        )
      end
    end

    def page_url(page)
      @url_pattern.gsub(":page", page.to_s)
    end
  end
end

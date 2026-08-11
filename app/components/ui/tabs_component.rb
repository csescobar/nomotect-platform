# frozen_string_literal: true

module Ui
  class TabsComponent < BaseComponent
    def initialize(tabs:, active_tab:, html_options: {})
      raise ArgumentError, "tabs must not be empty" if tabs.blank?

      @tabs = tabs
      @active_tab = active_tab.to_s
      @html_options = html_options
    end

    def call
      tag.div(
        **merged_html_options(class: "tabs", data: { controller: "tabs" })
      ) do
        safe_join([ render_tab_list, render_panels ])
      end
    end

    private

    def render_tab_list
      tag.div(role: "tablist", class: "tabs__list") do
        safe_join(@tabs.map { |tab| render_tab(tab) })
      end
    end

    def render_tab(tab)
      active = tab[:id].to_s == @active_tab
      tag.button(
        tab[:label],
        id: "tab-#{tab[:id]}",
        role: "tab",
        class: class_names("tabs__tab", active ? "tabs__tab--active" : nil),
        aria: {
          selected: active,
          controls: "panel-#{tab[:id]}"
        },
        tabindex: active ? 0 : -1,
        data: {
          tabs_target: "tab",
          action: "click->tabs#select keydown->tabs#navigate"
        }
      )
    end

    def render_panels
      safe_join(@tabs.map { |tab| render_panel(tab) })
    end

    def render_panel(tab)
      active = tab[:id].to_s == @active_tab
      tag.div(
        tab[:content],
        id: "panel-#{tab[:id]}",
        role: "tabpanel",
        class: class_names("tabs__panel", active ? "tabs__panel--active" : "tabs__panel--hidden"),
        aria: {
          labelledby: "tab-#{tab[:id]}",
          hidden: !active
        },
        tabindex: 0,
        data: { tabs_target: "panel" }
      )
    end
  end
end

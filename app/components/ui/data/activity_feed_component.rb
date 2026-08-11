# frozen_string_literal: true

module Ui
  module Data
    class ActivityFeedComponent < Ui::BaseComponent
      def initialize(activities:, html_options: {})
        raise ArgumentError, "activities must not be empty" if activities.blank?

        @activities = activities
        @html_options = html_options
      end

      def call
        tag.ul(
          **merged_html_options(class: "activity-feed")
        ) do
          safe_join(@activities.map { |activity| render_activity(activity) })
        end
      end

      private

      def render_activity(activity)
        tag.li(class: "activity-feed__item") do
          safe_join([
            render_avatar(activity[:actor]),
            render_details(activity)
          ])
        end
      end

      def render_avatar(actor)
        tag.div(class: "activity-feed__avatar") do
          if actor.is_a?(Hash)
            render Ui::AvatarComponent.new(**actor.merge(size: :sm))
          else
            render Ui::AvatarComponent.new(name: actor.to_s, size: :sm)
          end
        end
      end

      def render_details(activity)
        actor_name = activity[:actor].is_a?(Hash) ? activity[:actor][:name] : activity[:actor].to_s

        tag.div(class: "activity-feed__details") do
          safe_join([
            tag.div(class: "activity-feed__text") do
              safe_join([
                tag.span(actor_name, class: "activity-feed__actor"),
                tag.span(activity[:action], class: "activity-feed__action"),
                (tag.span(activity[:target], class: "activity-feed__target") if activity[:target].present?)
              ].compact, " ")
            end,
            (tag.time(activity[:timestamp], class: "activity-feed__timestamp") if activity[:timestamp].present?)
          ].compact)
        end
      end
    end
  end
end

# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class SkeletonComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Skeleton with ej2-skeleton controller" do
        render_inline Ui::Syncfusion::SkeletonComponent.new(
          shape: :text,
          width: "100%",
          height: "1rem"
        )

        assert_selector "div.e-skeleton[data-controller='ej2-skeleton']"
      end
    end
  end
end

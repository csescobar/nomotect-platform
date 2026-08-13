# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class AvatarComponentTest < ViewComponent::TestCase
      test "renders avatar with initials and size" do
        render_inline(AvatarComponent.new(
          initials: "CE",
          size: :lg,
          shape: :circle
        ))

        assert_selector ".ej2-avatar.ej2-avatar--lg.ej2-avatar--circle", text: "CE"
      end
    end
  end
end

# frozen_string_literal: true

require "test_helper"

module Ui
  module Syncfusion
    class FileUploadComponentTest < ViewComponent::TestCase
      test "renders Syncfusion Uploader with ej2-uploader controller" do
        render_inline Ui::Syncfusion::FileUploadComponent.new(
          name: "documents[]",
          label: "Upload Evidence",
          multiple: true
        )

        assert_selector "div.ui-field[data-controller='ej2-uploader']"
        assert_selector "label", text: "Upload Evidence"
        assert_selector "input[type='file'][multiple]"
      end
    end
  end
end

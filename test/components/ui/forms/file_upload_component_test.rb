# frozen_string_literal: true

require "test_helper"

class Ui::Forms::FileUploadComponentTest < ViewComponent::TestCase
  test "renders file upload dropzone container and input" do
    render_inline Ui::Forms::FileUploadComponent.new(name: "documents[]", label: "Upload Documents")

    assert_selector ".ui-file-upload[data-controller='file-upload']"
    assert_selector "input[type='file'][name='documents[]']"
    assert_selector ".ui-file-upload__label", text: "Upload Documents"
  end

  test "accepts multiple files flag" do
    render_inline Ui::Forms::FileUploadComponent.new(name: "photos[]", multiple: true)

    assert_selector "input[type='file'][multiple]"
  end

  test "accepts mime type restrictions" do
    render_inline Ui::Forms::FileUploadComponent.new(name: "avatar", accept: "image/png, image/jpeg")

    assert_selector "input[type='file'][accept='image/png, image/jpeg']"
  end

  test "renders file preview list container" do
    render_inline Ui::Forms::FileUploadComponent.new(name: "file")

    assert_selector ".ui-file-upload__preview-list"
  end

  test "raises ArgumentError when name is blank" do
    assert_raises(ArgumentError) do
      Ui::Forms::FileUploadComponent.new(name: "")
    end
  end
end

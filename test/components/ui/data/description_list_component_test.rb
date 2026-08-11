# frozen_string_literal: true

require "test_helper"

class Ui::Data::DescriptionListComponentTest < ViewComponent::TestCase
  def items
    [
      { term: "Company Name", details: "Acme Corporation" },
      { term: "Security Clearance", details: "Restricted" },
      { term: "Status", details: "Active" }
    ]
  end

  test "renders dl element with dt and dd tags" do
    render_inline Ui::Data::DescriptionListComponent.new(items: items)

    assert_selector "dl.description-list"
    assert_selector "dt.description-list__term", count: 3
    assert_selector "dd.description-list__details", count: 3
    assert_selector "dt", text: "Company Name"
    assert_selector "dd", text: "Acme Corporation"
  end

  test "supports column layout variants 1, 2, 3" do
    (1..3).each do |cols|
      render_inline Ui::Data::DescriptionListComponent.new(items: items, columns: cols)
      assert_selector "dl.description-list.description-list--cols-#{cols}"
    end
  end

  test "raises ArgumentError when items are empty" do
    assert_raises(ArgumentError) do
      Ui::Data::DescriptionListComponent.new(items: [])
    end
  end

  test "raises ArgumentError for invalid column count" do
    assert_raises(ArgumentError) do
      Ui::Data::DescriptionListComponent.new(items: items, columns: 5)
    end
  end
end

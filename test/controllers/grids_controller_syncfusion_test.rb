require "test_helper"

class GridsControllerSyncfusionTest < ActionDispatch::IntegrationTest
  setup do
    @user = User.create!(email_address: "syncfusion_grid@example.com", password: "a-secure-password")
    @org  = Organization.create!(name: "Syncfusion Org")
    @org.memberships.create!(user: @user, role: "member")
    sign_in(@user)
  end

  # ---------------------------------------------------------------------------
  # JSON response — Syncfusion adapter
  # ---------------------------------------------------------------------------

  test "GET /grids/:id.json with adapter=syncfusion returns 200" do
    get grid_path("organizations", format: :json), params: { adapter: "syncfusion" }

    assert_response :success
  end

  test "Syncfusion JSON response has top-level result key" do
    get grid_path("organizations", format: :json), params: { adapter: "syncfusion" }

    body = response.parsed_body
    assert body.key?("result"), "Response body missing 'result' key. Got: #{body.keys.inspect}"
  end

  test "Syncfusion JSON response has top-level count key" do
    get grid_path("organizations", format: :json), params: { adapter: "syncfusion" }

    body = response.parsed_body
    assert body.key?("count"), "Response body missing 'count' key. Got: #{body.keys.inspect}"
  end

  test "Syncfusion JSON result is an array" do
    get grid_path("organizations", format: :json), params: { adapter: "syncfusion" }

    body = response.parsed_body
    assert_kind_of Array, body["result"]
  end

  test "Syncfusion JSON count is an integer" do
    get grid_path("organizations", format: :json), params: { adapter: "syncfusion" }

    body = response.parsed_body
    assert_kind_of Integer, body["count"]
  end

  test "Syncfusion JSON count reflects visible records only" do
    # @org is in scope; create another org outside the user's scope
    hidden = Organization.create!(name: "Hidden Org")

    get grid_path("organizations", format: :json), params: { adapter: "syncfusion" }

    body = response.parsed_body
    names = body["result"].map { |r| r["name"] }
    assert_includes names, @org.name
    assert_not_includes names, hidden.name
  end

  test "Syncfusion JSON records contain the column fields defined by the grid" do
    get grid_path("organizations", format: :json), params: { adapter: "syncfusion" }

    body = response.parsed_body
    first_record = body["result"].first
    return if first_record.nil?

    definition = GridEngine::Catalog.fetch("organizations")
    definition.columns.each_key do |key|
      assert first_record.key?(key), "Record is missing expected column key '#{key}'"
    end
  end

  test "POST /grids/:id.json with Syncfusion UrlAdaptor payload returns 200 and formatted result" do
    post grid_path("organizations", format: :json, adapter: "syncfusion"),
         params: { skip: 0, take: 25, requiresCounts: true },
         as: :json

    assert_response :success
    body = response.parsed_body
    assert body.key?("result")
    assert body.key?("count")
  end

  test "POST /grids/:id.json with Syncfusion sorting and filtering payload" do
    post grid_path("organizations", format: :json, adapter: "syncfusion"),
         params: {
           skip: 0,
           take: 25,
           sorted: [ { name: "name", direction: "ascending" } ],
           where: [ { field: "name", operator: "contains", value: "Syncfusion" } ]
         },
         as: :json

    assert_response :success
    body = response.parsed_body
    assert_equal 1, body["count"]
    assert_equal @org.name, body["result"].first["name"]
  end

  # ---------------------------------------------------------------------------
  # Default (Tabulator) adapter is not broken
  # ---------------------------------------------------------------------------

  test "GET /grids/:id.json without adapter param still returns Tabulator format" do
    get grid_path("organizations", format: :json)

    body = response.parsed_body
    assert body.key?("data"),      "Tabulator response missing 'data'"
    assert body.key?("last_page"), "Tabulator response missing 'last_page'"
  end

  # ---------------------------------------------------------------------------
  # Error handling
  # ---------------------------------------------------------------------------

  test "unknown grid id with syncfusion adapter returns 422" do
    get grid_path("does_not_exist", format: :json), params: { adapter: "syncfusion" }

    assert_response :unprocessable_content
  end

  # ---------------------------------------------------------------------------
  # Auth helpers
  # ---------------------------------------------------------------------------

  private

  def sign_in(user)
    get new_session_path
    token = Nokogiri::HTML(response.body).at_css("input[name='authenticity_token']")["value"]
    post session_path, params: {
      authenticity_token: token,
      email_address: user.email_address,
      password: "a-secure-password"
    }
    follow_redirect!
  end
end

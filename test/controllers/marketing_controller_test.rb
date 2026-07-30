require "test_helper"

class MarketingControllerTest < ActionDispatch::IntegrationTest
  test "anonymous user can view public landing page in English" do
    get marketing_path

    assert_response :success
    assert_select "html[lang='en']"
    assert_select "h1", text: /Build with structure/
    assert_select "a[aria-label='NomoTect Home']"
    assert_select "img[alt='NomoTect']"
  end

  test "anonymous user can view public landing page in Brazilian Portuguese" do
    get marketing_path(locale: "pt-BR")

    assert_response :success
    assert_select "html[lang='pt-BR']"
    assert_select "h1", text: /Construa com estrutura/
    assert_select "a", text: "Explorar a plataforma"
  end

  test "does not render legacy public branding on landing page" do
    get marketing_path

    assert_response :success
    refute_includes response.body, "Rails Hotwire Platform"
  end
end

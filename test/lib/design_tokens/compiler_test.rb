require "test_helper"
require "tmpdir"

class DesignTokens::CompilerTest < ActiveSupport::TestCase
  test "compiles validated YAML and keeps every generated output current" do
    compiler = DesignTokens::Compiler.new

    assert_includes compiler.compile, "[data-theme=\"dark\"]"
    assert compiler.current?
  end

  test "rejects divergent theme keys" do
    with_token_source(
      light: { "color.text" => "#000000" },
      dark: { "color.background" => "#000000" }
    ) do |compiler|
      assert_raises(ArgumentError) { compiler.compile }
    end
  end

  test "rejects YAML aliases" do
    Dir.mktmpdir do |directory|
      root = Pathname(directory)
      root.join("tokens.yml").write("version: 1\nbase: &base\n  space.sm: 0.5rem\nthemes:\n  light: *base\n  dark: *base\n")
      root.join("tokens.schema.json").write(schema.to_json)

      compiler = build_compiler(root)

      error = assert_raises(ArgumentError) { compiler.compile }
      assert_includes error.message, "Invalid design token YAML"
    end
  end

  test "rejects unknown properties through the strict schema" do
    with_token_source(extra: { "unexpected" => true }) do |compiler|
      error = assert_raises(ArgumentError) { compiler.compile }
      assert_includes error.message, "$.unexpected is not allowed"
    end
  end

  private

  def with_token_source(light: default_theme, dark: default_theme, extra: {})
    Dir.mktmpdir do |directory|
      root = Pathname(directory)
      document = {
        "version" => 1,
        "base" => { "space.sm" => "0.5rem" },
        "themes" => { "light" => light, "dark" => dark }
      }.merge(extra)
      root.join("tokens.yml").write(document.to_yaml)
      root.join("tokens.schema.json").write(schema.to_json)

      yield build_compiler(root)
    end
  end

  def build_compiler(root)
    DesignTokens::Compiler.new(
      root: root,
      css_output: root.join("tokens.css"),
      ruby_output: root.join("generated.rb")
    )
  end

  def default_theme
    { "color.text" => "#000000" }
  end

  def schema
    JSON.parse(Rails.root.join("config/design_tokens/tokens.schema.json").read)
  end
end

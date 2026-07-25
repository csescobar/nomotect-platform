require "test_helper"
require "tmpdir"

class DesignTokens::CompilerTest < ActiveSupport::TestCase
  test "compiles matching light and dark themes" do
    compiler = DesignTokens::Compiler.new

    assert_includes compiler.compile, "[data-theme=\"dark\"]"
    assert compiler.current?
  end

  test "rejects divergent theme keys" do
    Dir.mktmpdir do |directory|
      root = Pathname(directory)
      root.join("base.json").write("{}")
      root.join("light.json").write('{"color.text":"#000000"}')
      root.join("dark.json").write('{"color.background":"#000000"}')

      compiler = DesignTokens::Compiler.new(root: root, output: root.join("tokens.css"))

      assert_raises(ArgumentError) { compiler.compile }
    end
  end
end

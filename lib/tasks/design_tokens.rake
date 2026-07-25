namespace :design_tokens do
  desc "Generate CSS from design token sources"
  task generate: :environment do
    DesignTokens::Compiler.new.write!
  end

  desc "Fail when design token sources and generated CSS diverge"
  task check: :environment do
    abort "Generated design token CSS is stale. Run design_tokens:generate." unless DesignTokens::Compiler.new.current?
  end
end

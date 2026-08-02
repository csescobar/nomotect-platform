Rails.application.config.to_prepare do
  ApplicationRoles.reset!
  GridEngine::Catalog.reset!

  %w[roles grids].each do |name|
    path = Rails.root.join("application/config/#{name}.rb")
    load path if path.file?
  end

  ApplicationRoles.seal!
  GridEngine::Catalog.seal!
end

Rails.application.routes.draw do
  get "installation", to: "installation/steps#show", defaults: { step: "appearance" }, as: :installation
  get "installation/appearance/export", to: "installation/steps#export", as: :export_installation_appearance
  get "installation/:step", to: "installation/steps#show", as: :installation_step
  patch "installation/:step", to: "installation/steps#update"

  resource :session, only: %i[new create destroy]
  resource :locale_preference, only: :update
  resource :tenant_selection, only: :update
  resources :privacy_requests, only: %i[index create]
  resources :passwords, param: :token, only: %i[new create edit update]
  resources :organizations do
    resources :memberships, only: %i[update destroy]
    resources :organization_invitations, only: %i[create destroy]
    resources :customers
    resources :stored_files, only: :show
  end
  patch "organization_invitations/:token/accept", to: "organization_invitations#accept", as: :accept_organization_invitation

  resources :grids, only: :show do
    resources :grid_saved_views, only: %i[create update destroy]
  end

  get "marketing", to: "marketing#show", as: :marketing
  resource :dashboard, only: :show

  get "component_showcase", to: "component_showcase#show", as: :component_showcase
  get "health", to: "health#show", as: :health
  get "up", to: "rails/health#show", as: :rails_health_check

  root "home#index"
end

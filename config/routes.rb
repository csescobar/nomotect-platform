Rails.application.routes.draw do
  resource :session, only: %i[new create destroy]
  resources :passwords, param: :token, only: %i[new create edit update]

  get "health", to: "health#show", as: :health
  get "up", to: "rails/health#show", as: :rails_health_check

  root "home#index"
end

Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'pages#index'
  resources :restaurants, param: :slug
  resources :reviews

  get '*path', to: 'pages#index', via: :all
end

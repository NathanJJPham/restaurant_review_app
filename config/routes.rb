Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  root 'restaurants#index'
  resources :restaurants, only: [:index, :show], param: :slug
  resources :reviews, only: [:index, :show]

end

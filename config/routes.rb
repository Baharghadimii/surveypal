Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api do # /api/data

    get '/about' => 'about#show'

    get '/login' => 'sessions#new'
    post '/login' => 'sessions#create'
    get '/logout' => 'sessions#destroy'

    get '/surveys' => 'surveys#index'

    resources :surveys, except: [:destroy]
    resources :teams, only: [:index, :show]
    resources :questions
  end

  namespace :admin do
    root to: '/admin/dashboard#index'

    resources :surveys
    resources :teams
    resources :users
  end

  get '*path', to: "static_pages#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end


end

Rails.application.routes.draw do
  devise_for :users

  root 'static_pages#index'

  scope 'api' do
    scope 'v1' do
      resources :boards
      resources :lists
      resources :cards do
        resources :activities, only: [:index, :create]
      end
      resources :users, only: [:index]
      resource :assignments, only: [:create, :destroy]
    end
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

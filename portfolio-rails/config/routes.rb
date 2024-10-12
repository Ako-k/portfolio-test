Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :skills, only: [:index] do
        get 'hello', on: :collection
      end

      resources :works, only: [:index]
    end
  end
end

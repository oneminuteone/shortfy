Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      get 'shorturls/index'
      post 'shorturls/create'
      get 'shorturls/top', to: 'shorturls#top'      
      get 'shorturls/:shortName', to: 'shorturls#show'
      get 'shorturls/update/:shortName', to: 'shorturls#update'

    end
  end

  root 'homepage#index'
  get '/*path' => 'homepage#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

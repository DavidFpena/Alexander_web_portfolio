Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: 'landing#home'
  get 'home', to: 'pages#home'
  get 'contact', to: 'pages#contact'
  get 'portraits', to: 'pages#portraits'
  get 'film', to: 'pages#film'
  get 'behindthescenes', to: 'pages#behindthescenes'
end

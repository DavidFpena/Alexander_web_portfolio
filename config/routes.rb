Rails.application.routes.draw do
  get 'pages/home'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root to: 'pages#home'
  get 'contact', to: 'pages#contact'
  get 'portraits', to: 'pages#portraits'
  get 'film', to: 'pages#film'
  get 'portfolio3', to: 'pages#portfolio3'
end

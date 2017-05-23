Rails.application.routes.draw do
  get "home/welcome"
  get "/staff" => 'home#staff', as: :staff
  get "/insurance" => 'home#insurance', as: :insurance
  get "/payment" => 'home#payment', as: :payment
  get "/contact" => 'home#contact', as: :contact
  get "/about" => 'home#about', as: :about

  resources :contacts, only: [:new, :create]
  root 'home#welcome'
end

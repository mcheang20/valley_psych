Rails.application.routes.draw do
  get "home/welcome"
  get "/staff" => 'home#staff', as: :staff
  get "/insurance" => 'home#insurance', as: :insurance
  get "/payment" => 'home#payment', as: :payment
  get "/contact" => 'home#contact', as: :contact
  get "/about" => 'home#about', as: :about

  get "/behavioral" => 'services#behavioral', as: :behavioral
  get "/group" => 'services#group', as: :group
  get "/anxiety" => 'services#anxiety', as: :anxiety
  get "/family" => 'services#family', as: :family
  get "/stress" => 'services#stress', as: :stress
  get "/couples" => 'services#couples', as: :couples

  resources :contacts, only: [:new, :create]
  resources :appointments, only: [:new, :create]
  root 'home#welcome'
end

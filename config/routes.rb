Rails.application.routes.draw do
  get 'home/index'
  resources :points
  
end

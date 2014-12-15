Rails.application.routes.draw do
  get 'home/index'
  get 'points/coordinates'
  resources :points
  resources :itineraries
end

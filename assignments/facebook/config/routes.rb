Rails.application.routes.draw do
  get 'welcomes/index'
  get('/', { to: 'welcomes#index', as: :home })
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

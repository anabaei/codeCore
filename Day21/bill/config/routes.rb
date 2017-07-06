Rails.application.routes.draw do
  get 'spliter/index'
  get('/', {to: 'spliter#index'})

  post('/calculate', {to: 'spliter#index'})
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  get 'questions/destroy'

  get 'questions/edit'

  get 'questions/show'

  get 'comments/create'
  

  resources :questions
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

get('/', {to: 'spliter#index'})
end

Rails.application.routes.draw do
  get 'questions/new'

  get 'questions/create'

  root 'questions#new'


  post('questions/', to: '/questions#new', as: :questions)

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

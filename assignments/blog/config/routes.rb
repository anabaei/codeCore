Rails.application.routes.draw do
  # get 'sessions/new'

  # get 'users/index'
  #
  # get 'users/create'
  #
  # get 'users/show'
  #
  # get 'comments/create'

  # get 'posts/index'
  #



 get('/', { to: 'posts#index', as: :home })

  #  get('/new', to: 'posts#new')
  #  post('/posts', to: 'posts#create')
  #  post('/index', to: 'posts#new')
 resources :sessions, only: [:new, :create]
 resources :users, only: [:new, :show, :create]
 resources :posts , only: [:index, :new, :show ,:create] do
   resources :comments, only: [:index, :new, :create]
 end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

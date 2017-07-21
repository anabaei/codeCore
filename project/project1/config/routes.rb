Rails.application.routes.draw do
  
  get 'posts/index'

  get 'posts/new'

  get 'posts/create'

  get 'posts/edit'

  get 'welcome/index'

  #get 'posts/show'
  get "/posts/:id" => "posts#show" 
  resources :posts do
       resources :comments, only: [:create, :destroy]
  end
  
  resources :posts

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get('/', { to: 'welcome#index', as: :home })
  post('/posts/new', { to: 'posts#create' })  
end

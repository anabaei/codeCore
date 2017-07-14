Rails.application.routes.draw do
  get 'posts/index'

  get 'posts/show'


   get('/', { to: 'posts#index', as: :home })

   get('/new', to: 'posts#new')
   post('/posts', to: 'posts#create') 
   post('/index', to: 'posts#new')  

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

Rails.application.routes.draw do
  get 'products/index'

  get 'contact/new'

   get 'welcome/index'

   get('/', { to: 'welcome#index', as: :home })
   get('/about', {to: 'welcome#about'})
   get('/contact', {to: 'contact#new'})
   post('/contact', {to: 'contact#create'})


   resources :products

   # post('questions/', to: 'questions#create', as: :questions)
  # get('questions/new', to: 'questions#new', as: :new_question)
  # get('questions/:id', to: 'questions#show', as: :question)
  # get('questions/:id/edit', to: 'questions#edit', as: :edit_question)
  # patch('questions/:id', to: 'questions#update')
  # get('questions/', to: 'questions#index')
  # delete('questions/:id', to: 'questions#destroy')


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

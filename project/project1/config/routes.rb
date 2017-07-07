Rails.application.routes.draw do
  get 'posts/index'

  get 'posts/new'

  get 'posts/create'

  get 'posts/edit'

  get 'welcome/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get('/', { to: 'welcome#index', as: :home }) 
end

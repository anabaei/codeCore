Rails.application.routes.draw do
  # get 'answers/create'

  # get 'answers/index'

  # get 'welcome/index'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # resources :questions, except: [:delete]
  # resources :questions, only: [:index, :show
  #resources :questions
  resource :questions do
       resource :answers  , only: [:create, :destroy]
  end 


  # resources :questions will generate all CRUD routes just like
  # we wrote below for a given resource name. Make sure that you write
  # plural `resources` and also pluralize the resource name (i.e. :questions)

  # post('questions/', to: 'questions#create', as: :questions)
  # get('questions/new', to: 'questions#new', as: :new_question)
  # get('questions/:id', to: 'questions#show', as: :question)
  # get('questions/:id/edit', to: 'questions#edit', as: :edit_question)
  # patch('questions/:id', to: 'questions#update')
  # get('questions/', to: 'questions#index')
  # delete('questions/:id', to: 'questions#destroy')

  # The order of routes matter. The first route matches is the one that
  # is taken. Make sure that more specific appear before more broad routes
  # (e.g. `questions/new` should always appear before `questions/:id`)

  # this rules defines the following: when we recieve a `GET` request to `/`
  # which is the home page, send the request to the `Welcome` controller and
  # `index` action within that controller. An action is a public instance method
  # that is defined within the controller.
  # as: :home will generate a URL helper that will gives a view helper method
  # to auto-generate the URL
  get('/', { to: 'welcome#index', as: :home })

  get('/contact', { to: 'contact#new' })
  # get '/contact', { to: 'contact#new' }
  # get '/contact', to: 'contact#new'

  post('/contact_submit', { to: 'contact#create' })
end

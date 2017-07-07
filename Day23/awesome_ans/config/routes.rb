Rails.application.routes.draw do
  # get 'contact/new'

  # get 'contact/create'

  # get 'welcome/index'

  # get 'questions/new'

  # get 'questions/create'

    # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get('questions/new', to: 'questions#new', as: :new_question)
  post('questions/', to: 'questions#new', as: :questions)
  get('questions/:id', to: 'questions#show', as: :question)

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


end

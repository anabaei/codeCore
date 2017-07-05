Rails.application.routes.draw do
  get 'contact/new'

  # get 'welcome/index'
  # root 'welcome#index'
get('/', {to: 'welcome#index'})
get('/contact', {to: 'contact#new'})
post('/contact_submite', {to: 'contact#create'})
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end

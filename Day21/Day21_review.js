Reactjs:
npm install webpack --save



Node:
inside node :
process.env
to see the environment vars

Rails :


rvm rubies,  use rvm to manage rubies 
rvm use 2.4.1 

ruby gems always install on a system not like node modules which is with the application 
gems only install for specific ruby version, 

in irb type:   require ‘ruby gem’  
then all that gem is loaded in memory 

to test it we can have 
require ‘cowsay’
puts Cowsay.say(‘hello’, :cow)


cowsay : can be either class or module,   
colorize gem install and use it!

:cow this one is a symbol 
puts "string".to_sym.class # Symbol  
puts :symbol.to_s.class    # String  

Symbols are unique address of a string which all point to one reference 

 Configuration Rails 
-T is going to stop install testing framework
-d postgresql  make it as default database for our application
—skip it a framework make your application faster 

atom .  // then it would open up whole current program 

we used PG promise in nodejs to connect to database, 
yml files are for Configuration

Craetes a database
rails db:create 

// to make sure pgr is running 
brew start postgresql service 


Bundler:
is like a package .json, 
yarn add is same as node modules, so all gems are in your system, 
bundler is a gem to manage gems, 

inside gemfile which is bundler job:
source: telling us we gonna looking at by default
puma: is like a server same as nodemon in nodejs so you dont need to run server everytime,
versioning: semantic versioning : major. minor. patch
patch: for discovering bugs or errors 

Bulndler:
look in your file system for matching gems, if yes use it, if not download. 

to force update a gem inside gemfile lock , then use "bundle update gemname"




different modes:
group :development do

end
development, test, 

when do rails s: it is always in development environment (database, gems etc..)

Controller meaning: 
rails g controller welcome index

"<" it means inheritance, actioncontroller::base is a module name "actioncontroller"  with base class name 
when we see get request send this to "" 

this rules degine when we recerve a get to /, send the request to welcome controller and index action
action is public instance method that is define inside that controller. 

get('/', {to: 'welcome#index'})

inside controler welcome and inside index function we have:
this send HTTP response which is text:Hello workld
render plain: 'Hello World!'

 
render 'welcome/index'
the line above is implied, by convention rails automatically  renders a template that is in folder same name and 
file name match with action name. so above renders implied inside welcome controller and index action


if the last argument of a function is a hash so we can omit brackets, also we can call a function without bracket in ruby 

get '/', to: 'welcome#index'

link_to is a rails view helper that generate  <a> tag for us. Rails comes with many built in view helpers
that makes it easy to generate different HTML. the first argunemtn is anchor text, the second is URL or 
URL helper. 
URL helper: in config/routes.rb rails generate helpers or if Rails didnt do that we can do it ourselves


we could have '/contact'
but we use contact_path 


<%=  link_to('concatc us', contact_path) %>

// as home is url helper method to generate the URL 
get('/', {to: 'welcome#index'}, as: :home)  

if you linking internally in your app use path, but outside your application should use URL 
path generate that we call it relative path. 
contact_path --> gives /contact
contact_url --> gives http://local2000/contact


<% Form_tag URL_TO_submit to  do  %>

<% end  %>


seperate action we need to,

/// we could use contact but to avoid confusion we use contact_submit
post('/contact_submite', {to: 'contact#creat'})

<%= Form_tag contact_submit_path do %>
 <% submit_tag 'submite contact' %>
<% end %> 


send paramseters between views and params 


// name and id are same in textfild 

<%= Form_tag contact_submit_path do %>
   <div>
     <%= label_tag :name %>
     <%= text_field_tag :name %>
   </div>
    <div>
     <%= label_tag :message %>
     <%= text_area_tag :message %>
   </div>
 <% submit_tag 'submite contact' %>
<% end %> 


reading logs:
for ip address local host 


we get all paramstes in rails to 'params' hash which can by access by string or symbol 
Rails came with built in security features like authencitiy, for cross site hacking,

if other websites try to connect to database while you are loging, then authenticity token keeps it safe
from other inputs.  










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


form_for is when you associtat the form with the model, but form_tag is when you dont want to associate it 
with any model. 


Day22.. continiure on codecoreapp...

controller names should be plural
model are singular, and the tables  are plural. 

rails g model name 
string: are 256 charactors, and text is big 

migration file: To generate table
migration is used to change structure of database

the code that gets executed when run rails db:migrate and run oppoisite when
run rails db:rollback


Code inside migration writen with DSL domain specific language which is ruby 
each table automatically have id that increment.
also created_at and updated_at are created by timestamps which automatically 
are in every table.

to execute migration : rails db:migrate 
rake db:migrate

1- do roll back 
2- fix migration 
3- do migration

rails g migration add_view_count_to_questions
then you need to input code inside of migration to tell it what to do 

Rails c 
Q = question.new
q.title = "my first question"
q.body = "my doby" 



// mass assignment to 
q1 = Qusetion.new({title: 'another one', body: 'hello', view_count: 10})

q1.persisted? it says is it save into database or not? 

q1.save  --> save into dabatase

// it creates it right aways without needing to save command 
question.create( )

// Question is model name, and this one returns only all feilds that you select 
Question.select([:title, :body, :id]).all
q3 = Question.find(2) # this find question with id 2 
// to find questions by title 
Question.first
Question.last 

// it finds it by title and returns only one 
Quesiton.find_by_title('abc')

// it finds it by title and returns only one 
Quesiton.find_by({title:'abc', body: 'xyz'})

// it returns all of the collections 
Quesiton.where({title:'abc', body: 'xyz'})

/// then exactly it put is inside the where of query 
Quesiton.where("title:'abc' OR body: 'xyz'")


Quesiton.where("title Ilike '%age%' ").count;


search_term = 'are'

Quesiton.where("title ilike '%#{search_term}' ")

// this question protect you from sequal injection becoause after ? it care about 
Quesiton.where(["title ilike ?", "%#{search_term}"])


 bundle exec rake -T // helps to find right 
// below is posted by Tam
Question.where(["title ILIKE ? OR body ILIKE ?", "%#{search_term}%", "%#{search_term}%"]).count

/// to add an index  
inside the migration 
by below code created indexes 
add_index :question, :title


Order:

Question.limit(20)

Question.order(:view_count).limit(20)


// if the key is a symbole then we put ':' afte the key and also value of our hash :desc is also a symple they are Ruby rules
Question.where(['body Ilike ?','%hacking%'].order({view_count: :desc}).limit(20)


OFF SET 
it skipp the first 10 results 
offset are usefull for paginations 
Question.order(:view_count).limit(20).offset(10)


// fetch the record first then set neew value and save one which uses update query 
q = Question.find 100
q.view_count = 80
q.save

also you can do after fetching 

q.update({title: 'new', body: 'newwer'})


// it will delete the question 
q = Question.find 3
q.destroy 

// notice delete skip some certain validations 
// Aggregate functions like group by count can be used 
Question.count 


Validations
// it works without checking
Question.create 



inside models:

//every quesiton has to have titile and body, validations call before saving and creating 
// prevent any saving
// when we call save we get back true if it completes successfully otherwise save turns false
validates(:title, {presence: true})

// realod! it reloads the webserver 

// returns the errors object
q.errors 

// it returns a hash with one key and values as array  
q.errors.message 

validates(:title, {presence: true, message: 'error message the title must be provide!'})


validates(:body, {presence: true, length: { minimum: 5, maximum: 2000}})


validates(:viewcount, numeraiclay: { greater_or_equal_to: 0})

After above validations, even error messages are affected and change 

q.save! // it would save unconditionally 




// Four main states 
1- initilize 
2- valication
3- saving
4- commit


after_initialize :set_defualtes

before_validation :titelize_title

// Create a validation for yourself 
// we pass one function for it 
// it is refering to a method name by symbol. 
validate :no_monkey
// then we have another key name title with this value inside errors.messages 


/// lambda is anonymous function in javascript, same 
scope :recent, lambda {|count| order(created_at)}
/// class method, the ones are differnet than instance methods and you can access them directly 
/// withoud having instact, they use by self key word
def self.recent(count)
   order({|count| order(created_at)})
end


private 
  def no_monkey
    if title.presence? && title.downcase.include?('moneky')
    	errors.sdd(:title, 'No Monkey please')
  end 

def set_defualtes
   self.set_defualtes ||= 0
end 

def titelize_title
   self.tile =  title.titelize if title.present?
end 

------------

/// methods inside rails 
'hello world'.titelize 
'category'.pluralize 

 
Question.order({created_at: :desc})





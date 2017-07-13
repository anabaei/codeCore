Reactjs:
npm install webpack --save

RVM issues:
rvm list 
rvm use --default 2.4.1


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

/// TODO: when creating migration then run migrate, why do we need to rollback? if so we lost data?
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



///New migration 
rails generate migration add_email_to_users email:string


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
    if title.presence? && pinclude?('moneky')
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


//// Day 23
// helper means the ruby commands that create html for us. 

Helper method expects you to give it an activerecord object (instane of a model)
as its first argument.  if the object is not persisted (question.new) then the form will
use 

form for check below if it is not persistance goes to modelename_path, therefore
we have to define that path in routes first. 


/// always form_for first checks if persiste or not, if it is then it knows have to 
// retrieve same url requests that it has came from so, in that url there are 
// id's 

// Form_for checking persisted, if yes it uses the url is and make it edit able ,ready or not!
// q.persisted? .. but we only need to add path action because Rails convention 
// 
 

Question.new.persiste?


inside the routes file, 
 questions_path
 posts_path 

give it to persisted? 




//byebug // you can add it to anywhere inside controller 
// whatever instance of a model we pass to form_for with the name of the model, then it just uses it 

def creat

  q = Question.new params.require(:question).permit(:title, :body)
  q.save 
  params.resquire(:question).permit(:title, :body)

end 


q = Question.new 

q.class.to_s 
q.class.to_s.downcase.pluralize

// on every single input field inside the form 
// name of form , .new and pass the params 
name=question[title]


// the params object is available in all controllers and it gives you access to all data 
// comming 

/// In case the data users input inisde the code and we 




inside irb 
app.questions_path
app.new_question_path 
q.class // rails can check what is the object is pass in, so if it is application
// record then it finds it ID!
// it becuase of colon id 
app.question_path(2)

// Create a Show action. 
// routes is a wild card that mathes anything as :id and we gonna get it as a params 
// // we wrote show pages after actions 

when we say as in routing , then we define a new name to which we have it in name_path 

/// to find it 
question.find params[:id]
/// Edit and Delete 

/// we send to user so it is get, 
get('questions/:id/edit', to: 'question#edit', as: edit_question)

so to link to it we have 

// because we need to pass a specific id then we use parameters to pass it
// we have it in show page 
<%= @question.title %>

<%= link_to 'Edit', edit_question_path(@question) %>




in conntroller

def edit 
  @question = question.find params[:id]
end




create view edit.html.erb
// when you persisteed active record object, then form is used the url to the update 
// action which is the same url for the show action except that it will be use patch verb
// instead of get.  it will acheive this by adding an hidden input field with the name 
//  _method with the value path 

in edit form would be same as show only different 

// when rails see a name of field with _method, then override the file using patch 

def update 
           @question = Question.find params[:id]
           Question_params = params.require(:question).permit(:title, :body)

           if @question.update Question_params
           	else 
           		render :edit
           	end

            
  end


/// javascript 
// rails uses javascript to mimic a delete request to the server 
// rails checks all anchor tags in the case of delete is created by javascript 
// define the method for that 



TDD 

Test validation of controller 
Test the controller whether renders correct view_count

if those automatic test were pass, then the modification didnt break anything,

you have to write the test before you write program,  
// it means you write the requirements at first, then address them. 

TDD 

we use minitest gem in rails,



Authentication 

/// Day 28 ...

rails g model user first_name last_name email password_digest 

they all are string so there is no need to type for them 

then we add uniue and index to email in migration
t.string :email, index: { unique: true }


//inside user model:
has_secure_password
VALID_EMAIL_REGEX = /\A[\w+\-.]+@[a-z\d\-]+(\.[a-z\d\-]+)*\.[a-z]+\z/i
// exacyly below class User <...
validates :email, presence: true, uniqueness: true
//format:  

end 
// explanations 
 A                      +        \ .  +   @                                      d           - 
all word charachtors incluinging \ . up to @ sighn there shoud be a-z letters numbers and dashes and can be more dots 
// has secure password when it give a password it generate a salt and it will hash the salt and password combo  store the 
// result in database password_digest column using bcrypt

u.errors.full_messages


///user and customers are same!

the user instance gets authenticate mehtod which will allow the password  incorrect or not. 


//create Custoemr controller, 
 //have two methods new and create 

 def new
  @customer = new Customer  
 end 




//inside new.html.erb 
  <h1>Sign Up</h1>

<%= errors_for @user %>
<%= form_for @user do |f| %>
  <div>
    <%= f.label :first_name %>
    <%= f.text_field :first_name %>
  </div>
  <div>
    <%= f.label :last_name %>
    <%= f.text_field :last_name %>
  </div>
  <div>
    <%= f.label :email %>
    <%= f.email_field :email %>
  </div>
  <div>
    <%= f.label :password %>
    <%= f.password_field :password %>
  </div>
  <div>
    <%= f.label :password_confirmation %>
    <%= f.password_field :password_confirmation %>
  </div>
  <%= f.submit %>
<% end %>



//make routes
resources :users, only: [:new, :create]


//inside layout application
<%= link_to 'sign up' , new_user_path %> 

// inside creates 

 we get all params related to user to 


   def create 
     @user = User.new user_params

     if @user.save
        redirect_to home_path
     else 
     	render :new 
     end 

   end 


private 

	def user_params 
	  params.require(:user).permit(
	   :first_name,
	   :last_name,
	   :email,
	   :password,
	   :password_confirmation
	  	)
	 end 


active record is a type of data that rails provides and is a description of an Object Relational Mapping system.


sign in 


create flash: 

inside the controler:

def new
    @user = User.new
  end

  def create
    @user =  User.new user_params

    if @user.save
      // # The flash is temporary that will last until the next
      // # request ends. We typically use it to store information
      // # to display to the user about what just happened.

      // # flash[:notice] = 'Thank you for signing up!'
      // # When using `redirect_to`, we can include the flash as an argument
      // # instead of writing in a single as above ð
      redirect_to home_path, notice: 'Thank you for signing up!'
    else
      // # Sometimes we want the flash message to appear in the current request and
      // # not the next one. User `flash.now[...]` in that situation.
      flash.now[:alert] = @user.errors.full_messages.join(', ')
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation
    )
  end


// it saves the sessison and hsow it 
// flash[:notice] = 'thank you '
 redirect_to home_page, notice: 'thank you for sign up!'
// flash is temporary cookie 
// then we add it to a session and pass it as params 
//# flash[:notice] = 'thank you '
// flash is usefull for redirecting, because rails keep it and inside another page shows it. 
 // we want to appear right now and not 
 flash.now[:alert] = @user.errors.full_messages.join(' ')
 render :new 


// inside the layout 
<div class='flash'>
<div class = 'alert alert-success'>
 <% if flsh[:notice] %> 
    <%= flash[:notice] %>
  </div>
<div class = 'alert alert-danger'>
  <% elsif flash[:alert] %>
    <%= flash[:alert] %>

  <% end %>
   </div>

</div>


// scsss 

.alert {
	border-radius: 5px;
}

.alert.alert-danger {
	border-radius: 5px;
}


.filed_with_erros input, .clasname textarea {
	border-radius: 4px;
}


//// create sessions controller 
rails g controller sessions new 

// create routs for it
// sessions not related to database, they only manipulating with users to keep them sign in, and dont save
// always should be only one session for a user, so always should be only one
// so we use resource, so the routes never provide id  then becuase they should be only one.
// resource profile should be only one.
// still it expects the controller be names plural  
resource :session, only: [:new, :create, :destroy]


/// new html  in session 
<h1> sign in </h1>

<%= form_tag session_path do %>
  <div>
    <%= label_tag :email %>
    <%= email_field_tag :email %>
  </div>
  <div>
    <%= label_tag :password %>
    <%= password_field_tag :password %>
  </div>

  <%= submit_tag 'Sign In' %>
<% end %>
/

# controller session to work with sign in form 

def new
  end

  def create
    # We have the user's email & password from the params'
    # 1. Find the user by their email

    user = User.find_by(email: params[:email])
      
    if user.authenticate(params[:password])
    	session[:user_id] = user_id
        redirect_to home_path, notice: 'thank you'
    else
      flash.now[:alert] = 'Wrong email or password!'
      render :new
    end
  end

  def destroy
  end

/// safe navigation operator avoid if 

 //if user is nill return nill and if not goes to continue to else and dont go throw 
// # user && user.authenticate(params[:password])
if user&.authenticate(params[:passord]) 

// if we say require it gets into nested hashes 


/// inside application controller add few 
def user_sign_in?

  // this stop app to crash when we dont have current_user but still session has its own value
  // it happen when we destroy the current user 
  if session[:user_id].present && current_user.nil?
       session[:user_id] = nil
  end 
  session[:user_id.present?
end
helper_method :user_sign_in?

def current_user 
// it means if already exist then dont use it again 
  @current_user ||= User.find_by(id: session[:user_id])
end 
// it means not only this function exists but also it accessible all views 
helper_method :current_user


  def authenticate_user!
    if !user_sign_in?
     redirect_to new_session_path, notice: 'please sign in'
    end 

  end


// then if we wan to limit users actions we add it in controer question 
// it modi
before_action :authenticate_user!, only: [:new, :creat, :edit]

// works same as above 
before_action :authenticate_user!, except: [:index, :show]




//// now inside the layout application
<% if user_sign_in?  %> 
//
<% else %>
//
<% end %>
 
 // inside the controller session 
 def destroy
  session[:user_id] = nil
 end 

// we usually pass id for deleting but since here is only one session user_id then we just delete it. 
 <%= link_to 'sign out', session_path, method: :delete %>



// to create the relation between user and questions, 
// add refrence to question table as user 
/// rails g migration add_user_to_question  user:references

// add refrence to answer table as user
// rails g migration add_user_to_answer user:references

// then add index true 

//migration file for quesio would be like this 

  def change
    add_reference :questions, :user, foreign_key: true, index: true
  end

// 
Then after that add belongs to   
in question and 
belongs_to :user 


and inside user 
has_many :questions, dependent: :nullify
has_many :anwers, dependent: :nullify 

//in rails c
//q.user = User.firt 
// 

// inside question controller 
@question.user = current_user;


/// inside answer controller
@answer.user = current_user




https://github.com/CodeCoreYVR/awesome_answers_jun_2017













//// inside seeds.db
PASSWORD = 'supersecret'

Answer.destroy_all
Question.destroy_all
User.destroy_all

User.create first_name: 'Jon', last_name: 'Snow', email: 'js@winterfell.gov', password: PASSWORD

10.times do
  first_name = Faker::Name.first_name
  last_name = Faker::Name.last_name
  User.create(
    first_name: first_name,
    last_name: last_name,
    email: "#{first_name.downcase}-#{last_name.downcase}@example.com",
    password: PASSWORD
  )
end

users = User.all

100.times do
  Question.create title: Faker::ChuckNorris.fact,
                  body: Faker::Hacker.say_something_smart,
                  view_count: rand(1000),
                  user: users.sample

end

questions = Question.all

questions.each do |question|
  rand(1..5).times do
    Answer.create(
      body: Faker::RickAndMorty.quote,
      question: question,
      user: users.sample
    )
  end
end

answers = Answer.all

puts Cowsay.say('Created 100 questions', :cow)
puts Cowsay.say("Created #{answers.count} answers", :ghostbusters)


class SessionsController < ApplicationController
  def new
  end

  def create
    # We have the user's email & password from the params
    # 1. Find the user by their email
    # 2. If found, we authenticate the user with the given password
    # 3. If authentication not successful, we alert the user with wrong credentials
    user = User.find_by(email: params[:email])

    # user && user.authenticate(params[:password])
    # &. can be used in place of the dot operator when calling methods on
    # objects. It gives us a way to against NoMethod for nil:Class errors.
    # It will immeditely return `nil` instead of calling the method after
    # it unless the object before is not `nil`.
    if user&.authenticate(params[:password])
      session[:user_id] = user.id
      # flash[:notice] = 'Thank you for signing in! â¤ï¸'
      redirect_to home_path, notice: 'Thank you for signing in! â¤ï¸'
    else
      flash.now[:alert] = 'Wrong email or password!'
      render :new
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to home_path, notice: 'Signed out!'
  end
end


class UsersController < ApplicationController
  def new
    @user = User.new
  end

  def create
    @user =  User.new user_params

    if @user.save
      # If the user is successfuly created, immediately store their id in the
      # session hash effectively signing them in.
      session[:user_id] = @user.id
      # The flash is temporary that will last until the next
      # request ends. We typically use it to store information
      # to display to the user about what just happened.

      # flash[:notice] = 'Thank you for signing up!'
      # When using `redirect_to`, we can include the flash as an argument
      # instead of writing in a single as above ð
      redirect_to home_path, notice: 'Thank you for signing up!'
    else
      # Sometimes we want the flash message to appear in the current request and
      # not the next one. User `flash.now[...]` in that situation.
      flash.now[:alert] = @user.errors.full_messages.join(', ')
      render :new
    end
  end

  private
  def user_params
    params.require(:user).permit(
      :first_name,
      :last_name,
      :email,
      :password,
      :password_confirmation
    )
  end
end


class QuestionsController < ApplicationController
  before_action :authenticate_user!, except: [:index, :show]
  # `before_action` can be used to run before any action in a controller.
  # The second argument is a symbol named after the method we would to run.
  # In this example, the before_action calls the find_question before say
  # the index, or new, etc.
  before_action :find_question, only: [:edit, :destroy, :show, :update]
  # We can filter which methods the `before_action` will be called
  # by proving an `only:` argument giving an array symbols named after the actions.
  # There is also `except:`.

  def index
    @questions = Question.order(created_at: :desc)
  end

  # The New action is usually used to show a form of
  # the resource we'll create on submission
  # URL: /questions/new
  # VERB: GET
  def new
    # Instance variables declared in controllers are accessible
    # views rendered by that action.
    # This means that we can use `@question` inside of `views/questions/new.html.erb`.
    @question = Question.new
  end

  def edit
  end

  def update
    if @question.update question_params
      redirect_to question_path(@question)
    else
      render :edit
    end
  end

  def destroy
    @question.destroy
    redirect_to questions_path
  end

  def show
    @answer = Answer.new
    # Using association methods just builds queries, meaning that
    # we can continue chaining more and more query methods such order, limit, offset, where
    # , etc
    @answers = @question.answers.order(created_at: :desc)
  end

  # The Create action is used to handle form submissions from the New
  # action to create a record (of a question in this case) in the database.
  # URL: /questions
  # VERB: POST
  def create
    # Byebug is a gem that is installed by default rails. You can use
    # to pause execution of any ruby program. In this case, we use pause
    # the server when the `create` action is called. This will pause server
    # itself. Go to your terminal tab when `rails s` was run to access
    # the debugger REPL. Type `exit` to leave byebug.
    # byebug

    @question = Question.new question_params
    @question.user = current_user

    if @question.save
      # redirect_to question_path(id: @question.id)
      # redirect_to question_path(@question.id)
      redirect_to question_path(@question)
    else
      # this will render the `views/questions/new.html.erb` to
      # show the form again (with errors). The default behaviour is to
      # render `create.html.erb`
      render :new
    end
  end

  private
  def question_params
    params.require(:question).permit(:title, :body)
    # The params object is avaible in all controllers and it gives you
    # access to all the data coming from a form or url params

    # Require is used to get a nested hashed with the given symbol
    # inside of the params object (in this case :question)

    # Every input field of a form must be permitted individiually
    # otherwise rails will throw an error. This is to prevent users
    # from creating their fields
  end

  def find_question
    @question = Question.find params[:id]
  end
end

class AnswersController < ApplicationController
  before_action :authenticate_user!
  def create
    @question = Question.find params[:question_id]
    @answer = @question.answers.build(answer_params)
    @answer.user = current_user
    # ð shortcut for doing ð
    # answer = Answer.new(answer_params)
    # answer.question = question

    if @answer.save
      redirect_to question_path(@question)
    else
      # We can use render to display any template by providing their
      # beginning from the `views/` folder.
      @answers = @question.answers.order(created_at: :desc)
      render 'questions/show'
    end
  end

  def destroy
    answer = Answer.find params[:id]
    answer.destroy

    redirect_to question_path(answer.question)
  end

  private
  def answer_params
    params.require(:answer).permit(:body)
  end
end


<!DOCTYPE html>
<html>
  <head>
    <title>AwesomeAnswers</title>
    <%= csrf_meta_tags %>

    <%= stylesheet_link_tag    'application', media: 'all' %>
    <%= javascript_include_tag 'application' %>
  </head>

  <body>
    <a href="/">Home</a>
    |
    <!-- <a href="/contact">Contact Us</a> -->

    <%# in ERB I can embed Ruby code by using `<%= .. `
        link_to is a Rails View helper that generate <a> tag for us. Rails comes
        with many built-in view helpers that makes it easy to generate different
        HTML elements. The `link_to` first argument is the anchor text, the
        second argument is the URL or URL helper.
        When generating URLs in your `config/routes.rb` Rails will sometimes
        auto-generate URL helpers for you and if not, you can always specify
        a helper yourself using `as` option.
    %>
    <%= link_to('Contact Us', contact_path) %>
    <!-- <%= link_to('Contact Us', contact_url) %> -->
    |
    <%= link_to('New Question', new_question_path) %>
    |
    <%= link_to('All Questions', questions_path) %>
    <% if user_signed_in? %>
      |
      <span>Hello, <%= current_user.full_name %>!</span>
      |
      <%= link_to 'Sign Out', session_path, method: :delete %>
    <% else %>
      |
      <%= link_to 'Sign In', new_session_path %>
      |
      <%= link_to 'Sign Up', new_user_path %>
    <% end %>
    <hr>



    <% if flash[:notice] %>
      <div class='alert alert-success'>
        <%= flash[:notice] %>
      </div>
    <% elsif flash[:alert] %>
      <div class='alert alert-danger'>
        <%= flash[:alert] %>
      </div>
    <% end %>

    <%= yield %>
  </body>
</html>










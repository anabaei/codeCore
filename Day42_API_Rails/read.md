
https://github.com/CodeCoreYVR/awesome_answers_jun_2017
## Railsl API 

what is `API`? Application program interface a set of routines, protocols, and tools for building software applications. An API specifies how software components should interact. 
* Types of APIs? 

DOM the API to manipulating pages, openGL: api for 3d images 

Today we talk about webAPI. All different url do REST most of the time.

Documentation Strips:  
`end points` are just url that we can access with APIs.

```ruby
fetch('/api/people/1').then(rs=> rs.json()).then(console.info)
```
`Twitter has API, facebook and etc` 

usually it is RESTfull but facebook has another one which uses graphsql and send back sql.

* Inside question controller we try to send data from controller as json. 

* In index controller 
```ruby
def index
@questions = Question.order(created_at: :desc)
 respond_to do |format|
   #this is default 
   format.html {render}
   # argument with activerecord object, it uses to convert it to json format
   # it says render with json format @questions 
   format.json {render json: @questions}
   format.xml {render xml: @questions}
 end 
end 
```
* Then we have different format in our url, with adding .json or .xml at the end of url
* ActiveRecord has to jason method that converts everything to json 
* With 'postman' we can make a request, add content-type as application/json and in body if we have a post and have form data there. Inside postman we call our app and set content-type to applicaion/json then we should see the results.
* Format can be csv, there is gem for that. 
## Serializer 
An object oriented way to approch json API
* When a controller `render json: @anyobject` then we have all objects when parse the url, to costomize it we use serializer. 
```ruby
gem 'active_model_serializers'
```
* Then generate brlow
```ruby
rails g serializer question
```
* Then inside the serialize folder it creates one file with rendering only id
* Now if we recal that url then we only see the ids!
#### Add more attributes in json 
* Inside serializerio question sriailize we add title and also can assign associateion to it and be specific about what parts of association we want to be displayed. as here we want only names of users 
```ruby
class 
 attributes :id, :title 
 belongs_to :user, key: :author 
 has_many :answers 
 
 class UserSrialize < ActiveModel::Serializer
   attributes :id, :first_name, :last_name
 end 
 
 class AnswerSrialize < ActiveModel::Serializer
   attributes :id, :body
   belongs_to :user, key: :author
 end
 
``` 
 change the name of user to auther,  key: :author 
 
 `&` this means if full_name is nill then dont returns nill or give an error and skip it.  
 user&.full_name
 
 // nested eager loading.
 @question = Question.includes(anwer: [:user]).find(params[:id])
 
 #### Create

```ruby
 def create
   question = Question.new(question_params)
   
   if question.save
     render json: {id: question.id }\
     else 
     render json: {error: question.error.full_messages}
     end 
     
 end
 
 def destroy
  if @question.destroy
    head :ok
  else 
    head :bad_request
  end
 end 
 
 def  question_params
  params.require(:question).permit(:title, :body)
 end 
 
 end 
 
 ```
 `head :ok` means the we just render a header and saying the status is okay 
 
 In rails when you create a form it added a hidden key inside it. 
 
 ```ruby
 rails g controller api::application --no-assets --no-helper
 ```
 to avoind that we create an application controller inheritet from application controller insdie the api 
 
 and add below to 
 This will allow to submiting forms by rails 
 ```ruby
 skip_before_action :verify_authenticity_token 
 ```
  Add Api::ApplicationController in controller 
 
 ### Create userkey 
 
 ```ruby
 rails g migration add_api_key_to_users api_key
 ```
 no inside migration
  
  ```ruby
 add_index :users, :api_key
 ```
 because eveytiem we find users by api keys.
 
 ```ruby
 rails db:migrate
 ```
 
 #### create a bunch of random charactors 
 
 it generetes whenever 
 SecureRandom.hex
 
 inside the user model
 
 refers to instance of the class, it means grabing api attribute 
 
 ```ruby
 private generate_api_key
  loop do  
    def generate_api_key
     self.api_key = SecureRandom.hex(32)
     break unless User.exists?(api_key: api_key)
    end
  end
 ```
 * To avoid having duplicate api_key we say break after creating unless that key already exists. 
 
 ```ruby
 before_create :generate_api_key
 ```
 if we run 
 ```ruby
 rails db:seed 
 ```
 rails c  then we have api keys 
 ```ruby
 u.send(:generate_api_key)
 u.save 
 ```
 then create a new api key
 
 * if you want to use application api keys you may need it to make it public. 
 
 inside applcaiton controller 
 we want to create something like this 
 
 ```ruby
 =begin
fetch(
  'http://localhost:3000/api/v1/questions',
  {
    headers: {
      'Authorization' : 'd5c234ff7b9b6bb96e7a125b8f6755ae539eb7e6b0ebabfc4dffe26f021059e8'
    }
  }
)
=end
 ```
 so inside api/applicaiton controller we add 
```ruby
  
def current_user
    @user ||= User.find_by(api_key: api_key) unless api_key.nil?
  end

private
  def api_key
   if request.headers['AUTHORIZATION'].length ==32 
   headers['AUTHORIZATION'] 
  end
   ```
   
   inside contoler just cahgne
   ```ruby
   render json :user 
   ```
   
   
   under header add authorization and value shoudl be your key
    ```ruby
   and last thing is inside create function add this 
   question = question.current_user 
    ```
   inside api::conontroler 
    ```ruby
   private 
   def authenticate_user!
     head :unauthorized unless current_user.present?
   end 
   
   and in very top add 
   before_aciton :authenticate_user!
    ```
   
   
 now if we check or uncheck the authorization field then we should get 200 or 401 respond.
## jbuilder 
#### Set a /api/v1/ namespace for json
*  you can put your controller inside moduls by collon, so it creates controllers inside the modules 
without helper and without assets 
```ruby
rails g controller api::v1::questions --no-aasets --no-helper
```
* Now inside routes, we need to have /api/v1/... so we have to make the routes for it 
```ruby
 namespace :api, defaults: { format: :json} do 
   namespace :v1 do 
      resources :questions, only: [:index, :show, :create]
   end 
 end 
```
All these controller should not respond to html, so we go to routes and change the default by adding `defaults: { format: :json}`. Then inside the url if we type below we would see the json api `local3000/api/v1/questions`
* postman is a tool, download desktop application `fetch('/api/v1/question').then(res => res.json).console.info`
* jbuilder is a template that cosumize the respond we get from json API request. 
#### Set a views and controller 
* inside views `app/views/api/v1/quesions` create  `index.json.jbuilder`
* Inside the controller we create an action to pass @qestion to the view as 
```ruby
def index
    @questions = Question.all.includes(:user)
  end
```
* Although the default is render index, we can add render template then it renders other templates `render :index` and no `render json: @questions`
* It converts a list of json array with bang sign. it creats json on json like id etc..
```ruby
json.array! @question do |question|
  json.id question.id
  json.anyname question.title
end
```
To convert to a readable time we can use this method `to_formatted_s(:short)`
* This cal below in loop reduce the performance to n^2 user includes to eager load all the asscoations 
inside the controller 
#### Avoid n^2 in reading one to many relation
Since for every question it does the query so we pass the users associated with each question at first. so it would be 2n like this. We tell Rails to include association with each question. So it would select the question and it do one mor selection to get all users association with that question. 
```ruby
@questions = Question.all.includes(:user)
```


 
 
 
 #### Faraday
* Easy parse a json web api and revenive the response using `Faraday` in .rb file and run it with ruby command.
* If you want to consume any API you should use this gem, unless a specific API has its own gem.
install it in your machine. 
```ruby
require 'faraday'
require 'json'

# response will be an instance of Faraday::Response. An object that represents
# the response from our server.
response = Faraday.get 'http://localhost:3000/api/v1/questions/348'

# To access the contents of the response, use `body`.
# If we get json in return, we can use Ruby's JSON module to parse it.
# it is loke javascript command  and returns object as a hash
res_json = JSON.parse(response.body)
puts res_json

// this is out of the folder 
------
```

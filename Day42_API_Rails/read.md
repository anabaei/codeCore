
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
* ActiveRecord has to jason method that converts everything to json 
* With 'postman' we can make a request, add content-type as application/json and in body if we have a post and have form data there. Inside postman we call our app and set content-type to applicaion/json then we should see the results.
 
* Also the format can be csv, there is gem for that. 

### Set a /api/v1/ namespace for json
* we need to create a json version for API, sometimes you want to chenges and it is better to have versions, 
you can put your controller inside moduls by collon, so it creates controllers inside the modules 
without helper and without assets 
```ruby
rails g controller api::v1::questions --no-aasets --no-helper
```
Now inside routes, we need to have /api/v1/... so we have to make the routes for it 
```ruby
 namespace :api, defaults: { format: :json} do 
   namespace :v1 do 
      resources :questions, only: [:index, :show, :create]
   end 
 end 
```
All these controller should not respond to html, so we go to routes and change the default by adding `defaults: { format: :json}`. 

then inside the url if we type below we would see the json api
```ruby
local3000/api/v1/questions 
```

### 
* inside the api::v1::controller add show action
```ruby
before_action :find_question, only: [:show]

def show 
  render json: @question
end 

def find_question
  @question = Question.find(params[:id])
end 
```
* postman is a tool, download desktop application 

fetch('/api/v1/question').then(res => res.json).console.info


### jbuilder 

respond back in api, customize the responds. jbuilder is template engine, we gonna use some methods out there to format json.

inside app/views/api/vi/quesions create index.json.jbuilder 
inside of jbuilder we get access to this object. if someone reply with array then we have to answer it by array

```ruby
json.array! @question do |question|
  json.id question.id 
end
```
render `json: @question` means serialize the question and send back and we not tell them to use templadte, 
now if we take it out, then it knows it is an array which is has an id.
when using `jbuilder` make sure do not render .json anymore in controller. 

instead of json.id we can have any key for that and we would have it. 
```ruby
json.array! @questions do |question|
  # Inside of this block, the method used with json will determine
  # the name of the key in the json response.
  json.id question.id
  json.title question.title
  json.author_name question.user.full_name
  json.created_at question.created_at.to_formatted_s(:long)
  json.updated_at question.updated_at.to_formatted_s(:long)
end
```
to convert a readable time 
```ruby
to_formatted_s(:short)
```
*this cal below in loop reducint the performance to n^2 user includes to eager load all the asscoations 
inside the controller 
```ruby
@questions = Question.all.includes(:user)
```

#### Serializer 
it is uses to show which part of the model we show, 
add
```ruby
gem 'active_model_serializers'
```
* Then generate brlow
```ruby
rails g serializer question
```
* Inside serializerio question sriailize add
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
 
 then we only get id. 
 has_mny automatically includes all answrs in request. 
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
 
 
 
 #### Faraday
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

res_json = JSON.parse(response.body)
puts res_json

// this is out of the folder 
------
```

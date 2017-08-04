
## Railsl API 

what is API? The controls and knobs of a library, 

DOM the API to manipulating pages, openGL: api for 3d images 

Today we talk about webAPI. All different url do REST most of the time.

Documentation Strips:  
end points are just url that can be access.
other API are swapi. hwich is start wars 



fetch('/api/people/1').then(rs=> rs.json()).then(console.info)

### Twitter has API, facebook and etc 

usually it is RESTfull but facebook has another one which uses sql.

* inside question controller we try to send data from controller as json. 

in question controller
respond_to enable us to send different blocks, default is html, 
```ruby
def index
@questions = Question.order(created_at: :desc)

 respond_to do |format|
    #this is default 
   format.html {render}
   # argument with activerecord object, it uses to convert it to json format
   format.json {render json: @questions}
   format.xml {render xml: @questions}
 end 
end 
```
now inside the index page, add json or xml appendix to see json or xml
all models have a json format, it automatically send to 
also the format can be csv, there is gem for that 

### We are going to create 
* we need to create a version for API, soometimes you want to chenges and it is better to have versions, then it avoids breaking the other API related to this 
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

Now inside API questinon controller
```ruby  
   def index
          @questions = Question.all 
          render json: @questions
    end  
end 
```
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


#### Faraday
* this is how you consume webapi on your computer, 


require 'faraday'
require 'json'

response = Faraday.get 'http://localhost:3000/api/v1/questions'
puts response.body

// inside the console we have :

res_json = JSON.parse(response.body) // returns as a hash 
puts res_json

// this is out of the folder 
------  

### jbuilder 

respond back in api, customize the responds. jbuilder is template engine, we gonna use some methods out there to format json.

inside api/vi/quesions create index.json.jbuilder 
inside of jbuilder we get access to this object. if someone reply with array then we have to answer it by rray

```ruby
json.array! @question do |question|
  json.id question.id 
end
```
render json: @question means serialize the question and send back and we not tell them to use templadte, 
now if we take it out, then it knows it is an array which is has an id.
when using jbuilder make sure do not render .json this 

instead of json.id we can have any key for that and we would have it. 
```ruby
json.array! @question do |question|
  json.id question.id 
  jsont.itle question.title 
  json.author question.user.first_name
  json.created_at question.created_at.to_formatted_s(:short)
end
```
to convert a readable time 
```ruby
to_formatted_s(:short)
```
*this cal blow in loop reducint the performance to n^2 user includes to eager load all the asscoations 
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
rails g serializer user

* Inside serializerio  question)sricielie add
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
 in rails db:seed 
 rails c  then we have api keys 
 
 u.send(:generate_api_key)
 u.save 
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
 

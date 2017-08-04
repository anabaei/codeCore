
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


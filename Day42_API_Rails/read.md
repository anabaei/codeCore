
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



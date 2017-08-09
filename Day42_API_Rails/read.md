
https://github.com/CodeCoreYVR/awesome_answers_jun_2017

https://github.com/anabaei/codeCore/tree/master/Day42_API_Rails/AwesomeAnswerSPA
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

#### Set a /api/v1/  for json
* We can render json in any controller but to avoid contradiction with some current works we define new controller inside the folder to manage json format only (optional)
* you can put your controller inside moduls by collon, so it creates controllers inside the modules 
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

* now we see the output json in /api/v1/quesions 
* In order to manage the json output we use serialize 
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
* Inside add title and also can assign associateion to it and be specific about what parts of association we want to be displayed. as here we want only names of users 
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
 * `&` this means if full_name is nill then dont returns nill or give an error and skip it.  
 user&.full_name
 
 // nested eager loading for associated anwers and users. 
 `@question = Question.includes(anwer: [:user]).find(params[:id])`
 
 ### REST in Json

```ruby
 def create
   question = Question.new(question_params)
   
   if question.save
     render json: {id: question.id }
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
 
 In rails when you create a form it added a hidden key inside it. Therefore first for each Json API we need to remove it first
 so we create an application controller inside api folder to just for APIs as below.
 ```ruby
 rails g controller api::application --no-assets --no-helper
 ```
 Add below to 
 This will allow to submiting forms by rails 
 ```ruby
  skip_before_action :verify_authenticity_token 
 ```
  Add Api::ApplicationController in controller 
 
 
 ### Create userkey 
 
 ```ruby
 rails g migration add_api_key_to_users api_key
 ```
  Inside migration
 
  ```ruby
 add_index :users, :api_key
 ```
 Because eveytiem we find users by api keys.
 
 ```ruby
 rails db:migrate
 ```
 
 #### create a userkey 

 * inside the user model add below conde
 ```ruby
before_create :generate_api_key

  def full_name
    "#{first_name} #{last_name}"
  end

  private
  # We can use the `.send` method to dynamically call a method. We can also
  # use this to get around the fact that a method is `private`.
  # Use `u.send(:generate_api_key)` to call it even though its private.
  def generate_api_key
    # SecureRandom.hex(32) will generate a string of length 32 containing
    # random hex characters.
    loop do
      self.api_key = SecureRandom.hex(32)
      # In the eventuality that we accidently create an API key
      # that already exists in our db, we're going to loop and regenerate it
      # until that is no longer the case.
      break unless User.exists?(api_key: api_key)
    end
  end
 ```
 * Check in rails c  then we have api keys using send to address one method only. 
 ```ruby
 u = User.last
 u.send(:generate_api_key)
 u.save 
 ```
 * if you want to use application api keys you may need it to make this method public. 
## Check Authorization by APIKEY 

* Inside applcaiton controller we want to create something like this 
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
* Under header add authorization and value shoudl be your key

   inside api::conontroler 
    ```ruby
   private 
   def authenticate_user!
     head :unauthorized unless current_user.present?
   end 
    ```   
   and in very top add 
   before_aciton :authenticate_user!

   
 now if we check or uncheck the authorization field then we should get 200 or 401 respond.


* jbuilder is a template that cosumize the respond we get from json API request. 
#### Set a views and controller 
* inside views `app/views/api/v1/quesions` create  `index.json.jbuilder`
* Inside the controller we create an action to pass @qestion to the view as 
```ruby
def index
    @questions = Question.all.includes(:user)
  end
```
## jbuilder 
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
## SPA 

Create a folder in app and create index html, js and css

inside index.html load script and css with scr ="index" and rel="stylesheet" href="index"
// build post and create functions 

We try to create a question model from json then we able to use question.all or question.get to find our request

then do the request from backend in chrome console as 
check with images!!
```javascript
fetch('/api/v1/questions', {header: {'Authorization':'APIKey'}}).then(res=> res.json()).then(console.table)
```
then inside http inside the header we put the api key 

then after this we can use it inside the application
it is a cross origin request. When it happenning browser send option mehod to serer, by default it is not allowed. 

so we gonna enable cross origin request. inside gem file and setup the config file on last line and instead of
origin '*' then we can say which origin we gonna use. 
then add this inside config/applicaiton
```ruby
config.middleware.insert_before 0, Rack::Cors do
      allow do
        origins '*'
        resource '*', headers: :any, methods: [
          :delete, :put, :patch, :get, :post, :options
        ]
      end
```
right now it allows doing cross origin request.
now encapsulate everything inside a function.

now we can assume we have a question inside index.js
 inside index.js
*1. Build functions to fetch our data and test our backend in the process.
 ```javascript
const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1';
const API_KEY = 'cabaa75fd95929ca025b89dd59751dc7fe0b28bed841fd83cd8c87af49fc8682';

const Question = {
 // getAll: function () { ... }
 // Property Method Shorthand. Syntax sugar 
 getAll() {
   return fetch(
     `${DOMAIN}${API_PATH}/questions`,
     {
       headers: {'Authorization':API_KEY}
     }
   )
     .then(res => res.json());
 
}
// usage:
//Question.getAll()
```
then inside the browser we would have :
```javascript
Question.getAll()
Question.getAll().then(console.table)
```
2- In order to define `post` function like `getAll` we coninute with `,`
```javascript
}, // from above 
  post (attributes) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': API_KEY
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
}
```
Then inside the browser we would have :
```javascript
Question.post({title: 'tmmi', body: 'body'})
```
--------
* Also we can complete Question property with more functions like below 

```javascript
...
     .then(res => res.json());
},
  get (id) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/${id}`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  }

```
* It returns the quesiton, we can test it even in console. 

```javascript
Question.get(400)
```
* 'Content-Type': we say to sever hery it is json and in body take javascript object and pass it as json and also define the mthod 
* Inside console chrome now we can have:
`Question.post({title:'fdd', body: 'what'}).then(console.info)`

* Save some git ignore to ignore >>
```javascript
gi macos, linux >> .gitignore
```

### Command to run when page loaded: 
```javascript
document.addEventListener('DOMContentLoaded', event => {

});
```

#### Node selector helper 
```javascript 
function q (query) { return document.querySelector(query); }
function qs (query) { return document.querySelectorAll(query); }
```

## View 
#### continue to display all questions  
```javascript
function renderQuestions (questions = []) {
  return questions
    .map(question => `
      <div class='question-summary'>
        <a href>${question.title}</a>
      </div>
    `)
    .join('');
}

document.addEventListener('DOMContentLoaded', event => {
  // Write code that needs to run after the DOM is fully loaded in here
  const questionList = q('#question-list');

  Question
    .getAll()
    .then(renderQuestions)
    .then(html => {
      questionList.innerHTML = html;
    });
});
```
* there is join to concad all the strings togather

### Also we can setup some css
```css
.hidden{
display: none;
}
#answer-list > *:not(:last-child) {
  margin-bottom: 10px;
}
```
### Add question show 

* we use hide strategy we could have a container as well 
* generate all show inside the add a dive question-details 
* a function to take a question object as default 
* this is for just in case if there is no question `author = {}} = question;`
```javascript
....
 .join('');
}

function renderQuestion (question = {}) {
  const {author = {}} = question;
  return `
    <h1>${question.title}</h1>
    <p>${question.body}</p>
    <p><strong>Author:</strong>${author.first_name} ${author.last_name}</p>
    <p><strong>Created At:</strong>${question.created_at}</p>
  `
}
```
* To call the javascript above we have to do as below to test 
```javascript
  const questionDetails = q('#question-details');

  Question
    .get(470)
    .then(renderQuestion)
    .then(html => {
      questionDetails.innerHTML = html;
    })
```


current target always been the quesion list 
add event delegation to check the taerget and if the target is mathces with a class and anchor as below  
```javascript
questionList.addEventListener('click', event => {
    const {target} = event;

    if (target.matches('.question-summary > a')) {
      event.preventDefault();
      console.log('I was clicked!');
    }
  });
```
now it would be as below to get attribute, to get what is the id of the target, after checking on 
conosle and find if we click on each question we get id then we follwo as after 
```javascript
  questionList.addEventListener('click', event => {
    const {target} = event;

    if (target.matches('.question-summary > a')) {
      event.preventDefault();
      console.log(target.getAttribute('data-id'));
```
Then it would be as below a complete version:
```javascript
  questionList.addEventListener('click', event => {
    const {target} = event;

    if (target.matches('.question-summary > a')) {
      event.preventDefault();
      const id = target.getAttribute('data-id');

      Question
        .get(id)
        .then(renderQuestion)
        .then(html => { questionDetails.innerHTML = html });
    }
  });
```
To display everything not showing we can have 
```javascript
questionDetails.classList.remove('hidden');
questionList.classList.add('hidden');
```

#### Adding  a navbar

```html
  <a href data-href="question-list">Questions</a>
      |
      <a href data-href="question-new">New Question</a>
```
now we should say which one is click 
inside index.js
* The way is hide everything and show only the one we want 
```javascript
const nav = q('nav');

  Question
    .getAll()
    .then(renderQuestions)
    .then(html => { questionList.innerHTML = html });

  nav.addEventListener('click', event => {
    const {target} = event;
    event.preventDefault();

    const href = target.getAttribute('data-href');

     switch (href) {
      case 'question-list':
        questionDetails.classList.add('hidden');
        questionList.classList.remove('hidden');
        break;
    }
  })
```
* In order to see answers related to each question in renderQuestion we add, so create renderAnswers function
then inseid the question we render renderAnswer(question.answer) as 

```javascript
    <div class="answer-list">
      ${renderAnswers(question.answers)}
    </div>
```
* This is renderAnswers almost same as render questoin
```javascript
function renderAnswers (answers = []) {
  return answers
    .map(answer => `
      <div class="answer-summary">
        <p>${answer.body}</p>
        <p><strong>Author:</strong> ${answer.author_full_name}</p>
        <p><strong>Created At:</strong> ${answer.created_at}</p>
      </div>
    `).join('');
}
```
### Form to Create Question
To creare new answer we need to add new controller answer 
Add div form wiht hidden class inside index.html

the only thing we need to listen to submit event and prevent it. 
```html
 <div id="question-new" class="">
      <form id=""question-form>
        <div>
          <label for="title">Title</label>
          <input name="title" id="title" />
        </div>
        <div>
          <label for="body">Body</label>
          <textarea name="body" id="body"> </textarea>
        </div>
        <input type="submit" value="Submit" />
      </form>
    </div>
```
inside event listetoenr add 
```javascript
 const questionNew = q('#question-new');
 ```
 we add below to nav 
 ```javascript
 case 'question-new':
        questionDetails.classList.add('hidden');
        questionList.classList.add('hidden');
        questionNew.classList.remove('hidden');
        break;
```
* now we gonna add a request to when a form is submmited so we add a new event listenr 
* we gonna get form data from target because our targe is actually a form, also we perenvet deualt aciton
* show the question is already created and get the id back, so when it is created we want to render show page 
so we just create a showQuestion  that take id and render it and put it inside html 
```javascript
function showQuestion (id) {
   return Question
      .get(id)
      .then(renderQuestion)
      .then(html => {
        questionDetails.innerHTML = html;
        questionDetails.classList.remove('hidden');
        questionList.classList.add('hidden');
        questionNew.classList.add('hidden');
      });
  }
```
* Then show the question 
```javascript
 questionForm.addEventListener('submit', event => {
    const {currentTarget} = event;
    event.preventDefault();

    const fData = new FormData(currentTarget);

    Question
      .post({
        title: fData.get('title'),
        body: fData.get('body')
      })
    //  .then(showQuestion)
     .then(({id}) => showQuestion(id))
  });
});
```

* Also we can show all questions 
it destructure the id from the promise returns and pass it to showQuestion.
```javascript
 .then(({id}) => showQuestion(id))
```

#### to clear the form 
since we care about reseting we dont care about promises 
* add after showQuestion
```javascript
...
        Question
          .getAll()
          .then(renderQuestions)
          .then(html => { questionList.innerHTML = html });
      });
  });
```

* In rails c we can have 
```javascript
fetch('http://localhost:3000/api/v1/questions',{method: 'POST', header: {'Content-Type': 'application/json'}, body: JSON.stringify({title: 'amir', body: 'tehran'}) }).then(console.info())
```


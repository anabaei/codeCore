
https://github.com/CodeCoreYVR/react-demo-june-2017

# React 

* It is  just a view that takes data and displays it. 
* Just start : now we use bare minimum and then we create a framework
```javascript
mkdir react-hello-world
touch index.js
touch index.html
```
add react cdn 
```javascript
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0-beta.5/cjs/react.development.js"></script>
```
#### Functions 
* All functions have prop and return value.
* Retun have four elements. First argument is name of element you want to create, seocnd arg is props for that element, then we have to use className: and last argument is the content of argument, 
```javascript
function Hello (props) {
 return React.createElement('h1', {className: 'hello'}, 'Hello, world!');
}
```
#### Virtual Dom
Everytime there is a change in react then we render the entire DOM. from virtual dom to real dom. 
ReactDom take things put into DOM. React does manipulation Dom for us, it means he calculated what has changed in virtual Dom with real Dom and it does the rest jobs. 
### Start JSX
* Allow to write html tags into javascript, so instead of `react.createElement` we can return `h1 tags` and other tags. 
* Bibble is plugin in JSX that takes all of codes and converted to old javascript. 
* Codes inside `{}` executed as pure javascript 
```javascript
npm install -g create-react-app
create-react-app react-demo
```
* Code inside `{}` run as js like `<%` tags
#### Components 
* Name of the function is name of components always and all functions based components have props as argument and return single react element and we cant return multiple and has to be one. Also we can use classes for this. 
* We take one react element.
* `Components` are cosmpose able thing to make or form combining parts
* Name of function is name of component with `capital` and has to return `single react element` which can be html
* Each component can have childerens components 
#### Hello world! function
* Create a component folder inside src folder and address it in app.js as 
```javascript
import Hello from './components/Hello';
<Hello name='Jon' />
```
* Then inside src folder create Hello.js file and import react and export the function. If we want to export one thing then we need [] around it. 
* We need to import React modules becuase JSX converts tags at first to `React.createElements` functions and these require React to be handle.
```javascript
import React from 'react';
export default Hello;
```
* Define function 
```javascript
function Hello (props) {
      return (
       <h1 className='Hello' >
         Amir, {props.name}!
       </h1>
     );}
```
* Result would be 
```javascript 
Amir jon!
```
-------------
* Create a new folder inside src and there .
```
function Hello (props) {
  return (
    <h1>Hello, {props.name}!</h1>
  );
}
```
#### Bootstrap 
* Check React bootstrap components to have them easily in your code 
https://react-bootstrap.github.io/components.html
```javascript
 npm install --save bootstrap
```
inside index.js import so you have Bootstrap working in the whole app
```javascript
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
```
inside app.js to see it works! 
```javascript
<button type="button" className="btn btn-primary">Primary</button>
```
Also you can have simplest way in index.html in public folder
```javascript
 <Button bsStyle="primary">Primary</Button>
```
---------------


## Dynamically generate components.
isBye is same as isBye={true}

if we have an array of components then it would send all to screen


we define default as empty array to avoid if dont crash as below
```javascript
function Greetings (props) {
  const {names = []} = props;
}
```


Javascript consider zero as false and 1 as true 


## React II Class base component

* props is property of this
```javascript
import React, {Component} from 'react';
export default Greetings;
```
* All class based components must extends from Component or React.Component
```javascript
class Hello extends Component {
```
* `props` unlike functions we dont get as argument. `props` are property of `this`. So we use constructor 
* All class based components must have a render method that returns a React element. 


#### State is the primary goal we want
* State is used to keep track of what has changed. State is a property of props. 
* super(props) to access props inside constructor. super should be before this. so never use this.props
* this.state 
* never muted stated directly,  there is a method setState.
* reading from this.sate 
```javascript
this.setState({color:'blue'});
```
* Only it gets update when React know is good time for rendering. 
* the only way we should pass a call back after changing 
```javascript
, function() {console.log(this.state.color) });
```
### Events
* React access all events. we just use them as a props.
```javascript
return <input
onChange = {function(){}}
onClick = {function()}
</input>
```

dont use $() on react. 


constructor(props){
  super(props);
  this.state = {
   hovered: false
   
  };
}

** The event prop work on 
```javascript
 <h1
        onMouseLeave={() => {console.log('Mouse Left!')}}
        onMouseEnter={() => {console.log('Mouse Entered!')}}
        className='Hello' style={style}>
        {greeting}, {this.props.name}!
      </h1>
```
change the sate in correct way below is wrong 
```javascript
return (
      <h1
        onMouseLeave={() => {this.state.hovered = false}}
        onMouseEnter={() => {this.state.hovered = true}}
        className='Hello' style={style}>
        {greeting}, {this.props.name}!
      </h1>
    );    
 ```
 this is right usign setState and needs React to rerender 
 ```javascript
return (
      <h1
        onMouseLeave={() => {this.setState({hovered: false}}
        onMouseEnter={() => {this.setState({hovered: true}}
        className='Hello' style={style}>
        {greeting}, {this.props.name}!
      </h1>
    ); 
 ```
 to change the stule of hovered we can have 
 ```javascript
  if (this.state.hovered) {
      style.border = 'solid thick Salmon';
    }
 ```

class has construnce and render 
this.

```javascript
import React, {Component} from 'react';

const COLORS = ['Magenta', 'Yellow', 'Cyan'];

class Shape extends Component {
  constructor (props) {
    super(props);

    this.state = {
      colorIndex: 0
    };
  }

  colorCycle () {
    console.log('Cycle!');
  }

  render () {
    const {bgColor = 'Blue', type = 'square'} = this.props;

    const style = {
      borderRadius: type === 'circle' ? '99999999px' : '0px',
      width: '150px',
      height: '150px',
      backgroundColor: COLORS[this.state.colorIndex]
    }

    return (
      <div
        onClick={this.colorCycle}
        className='Shape'
        style={style} />
    );
  }
}

/*
function Shape (props) {
  const {bgColor = 'Blue', type = 'square'} = props;

  const style = {
    borderRadius: type === 'circle' ? '99999999px' : '0px',
    width: '150px',
    height: '150px',
    backgroundColor: bgColor
  }

  return (
    <div className='Shape' style={style} />
  );
}
*/

export default Shape;
```
 above is when you click triged the color cycle,  

```javascript
colorCycle = () => {
 const {colorIndex} = this.state;
 this.setState({cololrIndex: (colorIndex +1) % COLORS.length });
}
```
Or we can go to prototype method just property of instance inside the constructor 
```javascript
this.colorCycle = this.colorCycle.bind(this)
```

## Forms and Events

get the current target after defining a class and before render 

```javascript
  addEntry (event) {
    event.preventDefault();
    const {currentTarget} = event;
    const fData = new FormData(currentTarget);
    console.log(Array.from(fData.entries()));
  }
 ```
 inside the form all inputs have the name 
 
* Now all login working and we go to check them out 
.
define a <div className='GuestBookEntries'>
Every entry is an component. 
  
  To map through the enrirs and render a html result we go through it 
  ```javascript
  renderEntries () {
    this.state.entries.map
  }
  ```
  so we have it `this.addEntry = this.addEntry.bind(this)`
  
   ```javascript
  addEntry (event) {
    event.preventDefault();

    const {entries} = this.state;
    const {currentTarget} = event;
    const fData = new FormData(currentTarget);

    this.setState({
      entries: entries.concat([{
        message: fData.get('message'),
        name: fData.get('name'),
        date: new Date().toString()
      }])
    });
  }
 ```
 to call the bunch of html and call it again. 

we define a funciton as 
 ```
  renderEntries () {
    return this.state.entries.map(
      (entry, index) => (
        <div key={index}>
          <p>{entry.message}</p>
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Date:</strong> {entry.date}</p>
        </div>
      )
    )
  }
   ```
   
   to call it inside render we hve
     ``` 
    <div className='GuestBookEntries'>
          {this.renderEntries()}
        </div>
   ```
   also we can add some style to it as below 
   ```javascript
   renderEntries () {
    return this.state.entries.map(
      (entry, index) => (
        <div
          key={index}
          style={{backgroundColor: index % 2 ? 'White' : 'WhiteSmoke'}}>
          <p>{entry.message}</p>
          <p><strong>Name:</strong> {entry.name}</p>
          <p><strong>Date:</strong> {entry.date}</p>
        </div>
      )
    )
  }
   ```
   
   To clear a form we add a call back when 
  ```javascript   
   this.setState({
      entries: entries.concat([{
        message: fData.get('message'),
        name: fData.get('name'),
        date: new Date().toString()
      }])
    },() => { currentTarget.reset() }
    // this.setState can take an optional second argument which is a callback
    // that is called once the state has successfully updated.
  );
  }
   ``` 
   ### LifeCycle Call-back 
   
   before_save or before_validation
   componentWillUpdate 
   There are few lifecyclemethods as 
   https://facebook.github.io/react/docs/react-component.html
   
   we should set the interval method only when the component is on the page and only way is componentdidmonunt and is called when the component is on the page
   
   ```javascript
   import React, {Component} from 'react';

class Timer extends Component {
  constructor (props) {
    super(props);
    this.state = {
      time: new Date().toString()
    };
  }

  componentDidMount () {
    setInterval(() => {
      this.setState({time: new Date().toString() });
    })
  }

  render () {
    return (
      <div className='Timer'>
        <strong>Time:</strong> { this.state.time }
      </div>
    )
  }
}

export default Timer;
```
* Now it is runing the page live time,
* We want to clear the interval, when the component is removed then we can remove it

???
first we have to modify the intervalId this, so we add this here and after that we call clear intervall with this.intervall
```javascript
  componentDidMount () {
   this.intervalId = setInterval(() => {
      this.setState({time: new Date().toString() });
    })
  }
```


```javascript
componentWillUnmount(){
 clearInterval(this.intervalId)
}
```
   
 * Timer is done now!
 
Create a stop watch timer 
   
   
   
 ## Stop Watch code
 
 the basic is here 
 ```javascript
 import React, {Component} from 'react';

class StopWatch extends Component {
  render () {
    return (
      <div className='StopWatch'>
        <strong>Count:</strong> 23121
        <button>Start</button>
        <button>Stop</button>
        <button>Reset</button>
      </div>
    );
  }
}

export default StopWatch;
 ```
 * Then if you run it you would have it as here:
 * We need to keep track of initial values 

```javascript
import React, {Component} from 'react';

class StopWatch extends Component {
  constructor (props) {
    super(props);

    this.state = {
      count: 0
    };
  }
  render () {
    return (
      <div className='StopWatch'>
        <strong>Count:</strong> {this.state.count}
        <button onClick={this.start}>Start</button>
        <button onClick={this.stop}>Stop</button>
        <button onClick={this.reset}>Reset</button>
      </div>
    );
  }
}

export default StopWatch;

```
so first we bind all these because we dont want to get lost track of them 
method is an object of a property of a function
if I take a method and assign it to a variable and this 
call back is like,


## React III

* Just create a new app
```javascript
create-react-app awesomereact
```
* To use another port inside tha pachage we can add below 
```javascript
"scripts": {"start": "PORT=3001 react-scripts start",
 ```
 then inside the src create new folder name utilites  and create request 
```javascript
const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1';
const API_KEY = 'cd2583a2eb688452be031bfdb79857c7133dad4c3d5c50bf7ec4d61635a9866a';

// To keep all methods that do requests to Questions together, we'll put
// them inside an object named `Question`.
const Question = {
  // getAll: function () { ... }
  // 👇 Property Method Shorthand. Syntax sugar for 👆
  getAll() {
    return fetch(
      `${DOMAIN}${API_PATH}/questions`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  get (id) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/${id}`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
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
when we export it we want to export only Question object and is not default export, which we call it Ajax request utilities 

```
export {Question};
```
* remove app.css, app.test., logo.svg and move app.js into components folder 
insite 

so inside the app.js then modify import to ./components/app

All components are decending from app. and there would be something between app and page, app is going to choose which component to use, 

in pages we have a class name page, so we create a page folder inside component

so inside the pages we create wuestionindexpage, so then inside that page we  import it from 

inside questionsindexanswers

```javascript 
import React, {Component} from 'react';
import {Question} from '../../utilities/requests';

class QuestionsIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  //  Lifecycle callback that will run once the
  // component is first rendered in the browser.
  componentDidMount () {
    Question
      .getAll()
      .then(questions => this.setState({questions}));
  }

  render () {
    return (
      <div className='QuestionsIndexPage'>
        { this.state.questions.toString() }
      </div>
    );
  }
}

export default QuestionsIndexPage;
```

* Notice 
it takes all the properties from each and pass it as prop of QuestionSummary 
```
question => <QuestionSummary key={question.id} {...question}
```
same as belwo 
```
          // ... <QuestionSummary key={question.id} id={question.id} title={question.title} created_at={question.created_at} ... />
```
choose all childeren except for the last one 
```css
.QuestionList > *:not(:last-child)
```


## React Routes 
https://reacttraining.com/react-router/

* Now we can import the react 
```javascript
yarn add react-router-dom
```

* inside App.js on tope we add 
```javascript 
import {
  BrowserRouter as Router, // when importing we use as to alias an imported name 
}
```
Inside App.js Then wtite the path, it means takes everything and route it as component
```javascript
 <Router>
   <div className="App">
     <Route path='/' component={QuestionsIndexPage} />
     <Route path='/questions' component={QuestionsIndexPage} />
   </div>
 </Router>
```
* Adding exact word in Routes fix the url to a specific page 

To get the id component 
```javascript
<Route path='/questions/:id'
```

in chrome react QestionsShowPage, 

check the history location and math and see the params is exactly what is in url 

use switch to be able to have most specific one comes in first. 


```html
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='title'>Title</label>
        <input id='title' name='title' />
      </div>

      <div>
        <label htmlFor='body'>Body</label>
        <input id='body' name='body' />
      </div>

      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
```

handlesubmit is a call back for the form, 

if we submit how we can send back data.

gather all data from form first

so we define handlesubm 
// this prob effectivel an event for when submited
const {onSubmit} = () => {}} = props;

const handlesubmit = event => {
 event.preventDefault();
 const {currentTarget} = event;
 
 const formData = new FormData(currentTarget);
 onSubmit({
   title: formData.get('title');
   body:  formData.get('body');
 });
}

//// no inside the questionew we can pass the params into the form

to check it firs inside console we hav e
```javascript
class QuestionsNewPage extends Component {
  render () {
    return (
      <div className='QuestionsNewPage'>
        <h2>New Question</h2>
        <QuestionForm onSubmit={question => console.log(question)} />
      </div>
    );
  }
}
```
* Now create a method instead of console.log to post it as a call back where we name it createQuestion. 

so in request file we already have post so we use it as Question.post 
still inside 
```javascript
 createQuestion (question) {
    Question
      .post(question)
      // .then()
  }
```
now it should work, then adding a redirect we can, so remember there is history prob which we have a push method. 

add .then
```javascript
.then(({id})) => this.props.history.push('/questions/${id}`))
```
now it should work but it  doesnt because we need to bind it in constructor props 


```javascript
class QuestionsNewPage extends Component {
  constructor (props) {
    super(props);

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion (question) {
    Question
      .post(question)
      .then(({id}) => this.props.history.push(`/questions/${id}`));
  }

```
now it works. 
now back and forward working as well. 

# React IV Authentication

*JWT token uses is like userkey.
has 3 parts: first part holding data, middle one contain user info, and third part is signiture verification.
* So first we add a json rails controller to responsible to get email and passwords and produce jwt or api key for react.
```ruby
rails g controller api::v1::tokens --no-assets --no-helper
```
* Above create just a controller without assets and views
* So first chnage which controller we inherit from, so change it to 
va::api

*inside api Routes
```ruby
resources :tokens, only: [:create]
```
* So we expect email and passwords in create 
```ruby
def create
  user = User.find_by(email: params[:email])
  if user&.authenticate(params[:password])
    rejder json:user 
  else
   //  head :unauthorized if we write unauthorized it tells hacker to try agaun
     head :not_found
  end 
end 
```
In postman, write the url and use post in postman 
```ruby
{
  "email": "pass@gmail.com",
  "password": "password"
}
```
Then we should see the users in postman. 
------------
* Now add gem jwt. After that encode method gives us authority to produce jwt. and decode a reverse one.
```ruby
gem 'jwt'
```
* now inside token controller
```ruby
 private 
 
 def encode_token(payload = {}, exp= 24.hours.from_now)
  payload[:exp] = exp.to_i
  JWT.encode(payload, Rails.application.secrets.secrect_key_base)
 end 
```
* `exp` is expiration date, also we need to add expiration date for safety, 
* you can always check what is Rails application secret key is inside rails c `Rails.application.secrets.secrect_key_base`
comes from secrets.yml. This key is used for to encrypt anything by rails. 
* now inside tje create action we create a variable name jwt 
```ruby
render json: {
jwt: encode_token({id: user.id, firstName: user.first_name, lastName: user.last_name})
}
```
to test in rails c:
```ruby
JWT.encode({id: 2332}, Rails.application.secrets.secrect_key_base)
```
* Now if we test on postman the reply would be jwt token only. 
---------------
* Now we have to let them to authorize 
inside application controller, so we say whether there is apikey or jwt key. So first we define 
GROUP OF ONE SPACE OR ONE 
```ruby
def current_user
    byebug 
    @current_user ||= User.find_by(id: session[:user_id])
  end

def authorization_header 
request.headers['AUTHORIZATION']
end 

def token 
 authorization_header&.split(/\s+/).last
end 

def token_type
  authorization_header&.split(/\s+/).first&.downcase
end

def decode_token(token)
 JWT.decode(token, Rails.application.secrets.secret_key_base)
end 


```
APiKey, APIKEY, ... all same 
& for just in case if is not found or nil doesnt allow to crash and not continue 
* Now if we test in post man it should work here . 
in post man we add authorization token and add below  
```ruby
Authorization         JWT t9u4titn45th594ntthn54tn54ht54iuht
```
Now if we use postman and inside byebug we can check it.

In rails c while byebug running. 
```ruby
token
token_type
decode_token(token)
```
* Now we should see decoded params 
* now we gonna call a method payload to get the hash result which is decoded
`&` this is safe navigation.
```ruby
def payload
  decode_token(token)&.first
end 
```
it creates a special hash that the keys of current hash are accessible 
not neccessary at all!
```
HashWithInDifferentAccess.new

```
inside def current_user we say if token type exist 
if token type is jwt then use payload. so if the api_key  then go with user if jwt then use 
payload

case token_type
 when 
```ruby
 def current_user
    if token.present?
      case token_type
      when 'api_key', 'apikey'
        @user ||= User.find_by(api_key: token)
      when 'jwt'
        @user ||= User.find_by(id: payload[:id])
      end
    end
  end
```    
* In ruby instead of `try catch` we say `begin rescue`
* to check validate epiration date 

```ruby
def payload
    begin
      payload = HashWithIndifferentAccess.new decode_token(token)&.first
      return nil if Time.at(payload[:exp]) < Time.now
      payload
    rescue JWT::DecodeError => error
      {}
    end
  end
```

* End of server side 
https://github.com/CodeCoreYVR/awesome_answers_jun_2017
---------------
# Now move on React 
* in awsome answr revust.js 
```ruby
change the to conts API_Key = 'APIKEy hgoerhfrehferf9438r34'
```
* we create a form to sent
* then copy the questionnew.js and rename it to sign in page, change signinpage name only from questionnewpage to it.
* also we need sign in form.
so it would be like this 
```ruby
import React, {Component} from 'react';
import {Question} from '../../utilities/requests';
import SignInForm from '../SignInForm';

class SignInPage extends Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (
      <div className='SignInPage'>
        <h2>Sign In</h2>
        <SignInForm onSubmit={() => {}} />
      </div>
    );
  }
}

export default SignInPage;
```
now we create signin form 
```ruby
import React from 'react';

function SignInForm (props) {
  // By taking a `onSubmit` prop, I'm effectively going
  // to implement a "event" for when QuestionForm is submitted
  const {onSubmit = () => {}} = props;

  const handleSubmit = event => {
    event.preventDefault();
    const {currentTarget} = event;

    const formData = new FormData(currentTarget);
    onSubmit({
      email: formData.get('email'),
      password: formData.get('password')
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>Email</label> <br />
        <input type='email' id='email' name='email' />
      </div>

      <div>
        <label htmlFor='password'>Password</label> <br />
        <input type='password' id='password' name='password' />
      </div>

      <div>
        <input type='submit' value='Sign In'/>
      </div>
    </form>
  );
}

export default SignInForm;
```
* then inside app.js import singinpage from '.pages/
* then route it in app.js and add nav bar
```ruby
<link to='/sign_in'>Sing in </link>
<Route exact path='/sing_in' componet={Singinpage} />
```
* Now inside the front end we should have sign in page. 
-------------
now we define request to token inside utilities/request
```javascript
const Token = {
  post (params) {
    return fetch(
      `${DOMAIN}${API_PATH}/tokens/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => res.json());
  }
}

export { Question, Token };
```
we are going to get a json response as `jwt` from above.  

-----------
* now inside signinpage.js we modify the sign in page by adding createToke as below
```javascript
class SignInPage extends Component {
  constructor (props) {
    super(props);

    this.createToken = this.createToken.bind(this);
  }

  createToken (params) {
    Token
      .post(params)
      .then(res => {
        console.log(res)
      });
  }

  render () {
    return (
      <div className='SignInPage'>
        <h2>Sign In</h2>
        <SignInForm onSubmit={this.createToken} />
      </div>
    );
  }
}

export default SignInPage;

```
* When sign in form  submited the create token is call back.  
* Now if we sign in then we should get token back in chrom console. 
-----------
## Find a way to store it
you can put anything there 
is like a big hash to sto re
in chrome console
```javascript
window.localStorage.setITem('thing', 'rainbow')
window.localStorage
```
* Click on arrow in console and go to application you can see local storage keys and values

now inside sign in page when we get it back extracted from response 
then we can access to histoy and send them to home page. 
* here it saves jwt as jwt key inside local storage 
```javascript
 .then({jwt} => { window.localStorage.setItem('jwt', jwt);
  // console.log();
  this.props.history.push(`/`);
```
* Now it should return to home page
----------------------
* Create homepage.js to have a home page and send the user after login to it
```javascript
import React from 'react';
function HomePage (props) {
  return (
    <div className='HomePage'>
      <h2>Welcome!</h2>
    </div>
  )
}

export default HomePage;
```
Then in `app.js` import homepage from './pages/home'
Then route it
```javascript
import HomePage from './pages/HomePage';
<Route exact path='/' component={HomePage} />
```
--------- 
## Authentication

in app.js check if the user login  to do that we just check jwt is in localStorage 
check console first 
!! it means return true or false 
```javascript
isSignedIn(){
return !!window.localStorage.getItem('jwt')
}
```

To have user name and emails in react we need jwt-decode 
```javascript
yarn add jwt-decode 
```
* Now after install we go to sign in page and imported 
```javascript
import jwtDecode from 'jwt-decode';
```
to use it we just need to call methods
```javascript
 // a getter, use it as if its a property
  // (i.e. this.currentTarget)
  get currentTarget () {
    return jwtDecode(window.localStorage.getItem('jwt'));
```
* Now we have everything to do user authentication
remember const {currentUser} = this; deconstructor this to current user then we add in app.js 
```javascript
 {
              this.isSignedIn()
              ? (
                <span>Hello, {currentUser.firstName} {currentUser.lastName}!</span>
              ) : (
                <Link to='/sign_in'>Sign In</Link
              )
            }
```

------------ 
if it complains about returning one more element in return then put them inside an array! 


## Sign out 
--------- maybe skipp this part 
in app.js
```javascript
  <a href onClick={this.signOut}>Sign out</a>
```
now implement the call back sign out
```javascript
 signOut (event) {
   event.preventDefault();
    window.localStorage.removeItem('jwt');
  }
```
modify current to just check if the token is there bfere trying to decode it
```javascript
 get currentUser () {
    const jwt = window.localStorage.getItem('jwt');
    return jwt && jwtDecode(jwt);
  }
```
now it works but problem is the state is not update 
we can use this.forceUpdate insside sign out function 
becuase we use `this` so we have to have construcotr and bind this as 
```javascript
constructor (props) {
    super(props);

    this.signOut = this.signOut.bind(this);
  }
  signOut (event) {
    event.preventDefault();
    window.localStorage.removeItem('jwt');
    this.forceUpdate();
  }
```
so it force react to change the state. Good solution is listion to localstorage and whenever the local storage 
changes then it works and is better than manualy doing we have done so far. 

----------------this is easier way 
because we have to wait to component mount so
first make userifsignin as false, and then add mountdidload
modigy constructor as this 
```javascript
constructor (props) {
    super(props);

    this.state = {
      isSignedIn: false
    };

    this.signOut = this.signOut.bind(this);
  }

  componentDidMount () {
    this.setState({isSignedIn: !!window.localStorage.getItem('jwt')});
    });
  }
```
so in componentdidmount we setState is signin and then 
and in render part change this.signin to this.state.signin 

now modify signout to change the state 

```javascript
signOut (event) {
    event.preventDefault();
    window.localStorage.removeItem('jwt');
    this.setState({isSignedIn: false});
  }
```
-----------
### Authenticating Routing 
if the user not authenticate then dont go to those routes we call them authroute
create AuthRout.js
it is a higher order component to take a component and return a component 
```javascript
import React from 'react';

export default AuthRoute;

```
we gonna return two things. from props we retturn structor of component and we expect to be authenticated props and all the rest properties and after the we check if authentication is true then render a component and false render another componrt among `? () : () `. If we need to first to rename them to capital letters. '<Component' returns that exact component among ifs.  We gonna all of the rest props we pass. . we need to use `render= ` to pass a function that we want to pass. this function is the one we want to pass this is what we really want and should be inside. We gonna render two things  these are the props that pass to components and if is not authenticate we gonna redirect to sign in page. 
```javascript
import React from 'react';
import {Route, Redirect} from 'react-router-dom';

function AuthRoute (props) {
  const {component: Component, isAuthenticated = false, ...restProps} = props;
  return (
    <Route {...restProps}
      render={props => {
        if (isAuthenticated) {
          <Component {...props} />
        } else {
         return <Redirect to={{pathname: '/sign_in'}} />
        }
      }} />
  );
}
export default AuthRoute;
```
`props` above are all props that Rout pass them. 
also import rout redirect from react-route 

Now we go to app.js and import authroute form ./authroute change <Route to <AuthRoute 
```javascript
<AuthRoute
              exact
              isAuthenticated={isSignedIn}
              path='/questions'
              component={QuestionsIndexPage} />
```











----------
The full copy of api SERVER SIDE  controller for Rails server side ***
```ruby
class Api::ApplicationController < ApplicationController
  # This will stop rails from raising an error if
  # a post does not have an authenticity token.
  # Authenticity tokens are generated by rails to
  # let it identify post requests as being submitted
  # from its own forms.
  skip_before_action :verify_authenticity_token

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

  def current_user
    if token.present?
      case token_type
      when 'api_key', 'apikey'
        @user ||= User.find_by(api_key: token)
      when 'jwt'
        @user ||= User.find_by(id: payload[:id])
      end
    end
  end

  private
  # 'Authorization' : 'ApiKey AHJdJHDA898231jhlkAJDSLKa'
  # 'Authorization' : 'JWT    AHJdJHDA898231jhlkAJDSLKa.KAJLSDal9e9q.dJALJDAiIoqiuo_'
  def authorization_header
    request.headers['AUTHORIZATION']
  end

  def token
    authorization_header&.split(/\s+/)&.last
  end

  def token_type
    #APIKEY, apikey, ApiKey
    authorization_header&.split(/\s+/)&.first&.downcase
  end

  def decode_token(token)
    JWT.decode(token, Rails.application.secrets.secret_key_base)
  end

  def payload
    # We don't want our application to crash if the JWT is invalid. We'll have
    # to rescue the error (this is Ruby's try .. catch) and just return a empty hash.
    begin
      # HashWithIndifferentAccess creates a special hash where its keys
      # can be accessed as symbols or strings.
      # (e.g. hsh[:id], hsh["id"])
      payload = HashWithIndifferentAccess.new decode_token(token)&.first

      # Validate the expiration in the payload
      return nil if Time.at(payload[:exp]) < Time.now
      payload
    rescue JWT::DecodeError => error
      {}
    end
  end

  def authenticate_user!
    head :unauthorized unless current_user.present?
  end
end
```
    
 





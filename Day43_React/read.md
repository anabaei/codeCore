
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
React dom takes all components and convert to html. 

```javascript
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>React Hello World</title>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react.js"
      charset="utf-8"></script>
    <script
      src="https://cdnjs.cloudflare.com/ajax/libs/react/15.6.1/react-dom.js"
      charset="utf-8"></script>
  </head>
  <body>
    <div id="root"></div>

    <script>
      function Hello (props) {
        // Use the method `React.createElement` to create a React element.
        // It takes three arguments:
        // - A string or name of a component. If it is a string, it must refer
        //   to an HTML5 tag (e.g. 'h1', 'p', 'div', 'input', etc)
        // - An object that represents the props (properties) of the component.
        //   These are similar to the arguments of a function.
        // - Another React element.
        return React.createElement('h1', {className: 'hello'}, 'Hello, World!');
      }

      ReactDOM.render(
        React.createElement(Hello),
        document.querySelector('body')
      );
    </script>
  </body>
</html>
```
This is basic react component.
Type: p , props: , childeren:
Everytime there is a change in react then we render the entire DOM. from virtual dom to real dom. 

`Components` are basic building like functions and classes. composeable define thing. To make or form combining things or elements. 

Name of function is name of component with capital and has to return single react element which can be html.

ReactDom take things put into DOM. 

Composing with react can be smaller. 
### JSX
{} everything here should be 
user define components should be capital.
code inside `{}` run as js like `<%` tags. 

### Start JSX
```javascript
npm install -g create-react-app
create-react-app react-demo
```

`import from ..`import without default it imports to any app
export default 
if we want to export as one thing then we need [] around it 


create a new folder inside src and there put all react components inside it.

we can nest components, components children

```
function Hello (props) {
  return (
    <h1>Hello, {props.name}!</h1>
  );
}
```
Props objects recieve all html attirbutes as properties. Meaning that 'Hello' React element props has the property 'name'
```
  <Hello name='mamad'/>
```


### Styling components

react native you have to write inline style. we can just pass it in object. 




## Dynamically generate components.

if any code inside {} it is react element. 
at first it is just defualts for const 
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
* user reaction needs advacance 
* props is property of this.
convert hello world to class base component


// import React from 'react';
//when exporting default values imported as bove
// other values without deualt should be surronded by braces
// export default React
// export Component
// or 
// export class Component extends ..
import React, {Component} from 'react';

instead of // function Hello (props)  we write it
// All class based components must extends from Component or React.Component
class Hello extends Component {
// props is neign set as contruction and is inside 'this'
// All ckass based components must have a render method that returns a React element. 


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


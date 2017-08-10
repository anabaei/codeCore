# React 

is a library for compseable front end

it is a framework that gives you a pattern. 

* It is  just a view that takes data and displays it. 
* Just start : now we use bare minimum and then we create a framework

mkdir react-hello-world
touch index.js
touch index.html 
add react cdn 
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/16.0.0-beta.5/cjs/react.development.js"></script>

first argument is name of element you want to create, seocnd arg is props for that element, then we have to use className: and last argument is the content of argument, 

function Hello (props) {
 return React.createElement('h1', {className: 'hello'}, 'Hello, world!');
}

should be at least one div to insert into. React dom taking all components and convert to html. 

```react
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
This is vert basic react component.

Type: p , props: , childeren:
Everytime there is a change in react then we render the entire DOM. from virtual dom to real dom. 

React is default to DOM
React renders to mobile name Native

Components are basic building like functions and classes. composeable define thing. To make or form combining things or elements. 

like creating shapes. 

naem of function is name of component with capital and has to return single react element which can be html.

ReactDom take things put into DOM. 

Composing with react can be smaller. 
### JSX
{} everything here should be 
user define components should be capital.
code inside {} run as js like <% tags. 

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
colorCycle = () => {
 const {colorIndex} = this.state;
 this.setState({cololrIndex: (colorIndex +1) % COLORS.length });
}


Or we can go to prototype method just property of instance inside the constructor 

```javascript
this.colorCycle = this.colorCycle.bind(this)
```






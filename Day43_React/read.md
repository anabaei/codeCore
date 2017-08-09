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




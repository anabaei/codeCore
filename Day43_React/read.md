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

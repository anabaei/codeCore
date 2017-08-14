import React from 'react';


function Hello (props) {
      // Use the method `React.createElement` to create a React element.
      // It takes three arguments:
      // - A string or name of a component. If it is a string, it must refer
      //   to an HTML5 tag (e.g. 'h1', 'p', 'div', 'input', etc)
      // - An object that represents the props (properties) of the component.
      //   These are similar to the arguments of a function.
      // - Another React element.
      return (
       <h1 className='Hello' >
         Amir, {props.name}!

       </h1>
     );}

export default Hello;

import React from 'react';


function Hello (props) {
      // Use the method `React.createElement` to create a React element.
      // It takes three arguments:
      // - A string or name of a component. If it is a string, it must refer
      //   to an HTML5 tag (e.g. 'h1', 'p', 'div', 'input', etc)
      // - An object that represents the props (properties) of the component.
      //   These are similar to the arguments of a function.
      // - Another React element.
    //  props.names == ['Jo', 'Dave', 'Lana', 'Dana', 'Tom']
     const {names = []} = props;
     const helloElements = names.map(

    (name, index) => <h4> Hi
     key={index} name={name}  isBye={index % 2} />
 </h4>
     );
     return (
       <p>
       yeaeeeh
        

       </p>
     );
   }

export default Hello;

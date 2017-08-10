import React from 'react';
// When using JSX, you must always import React event though
// you might not use the `React` object anywhere in your file, because
// JSX tags are converted to `React.createElement` method calls.

function Ur (props) {

  // const {bdColor = 'Lavender', fontFamily = 'Helvetica'} = props;
  const style = {
  	
  	backgroundColor: props.bgColor || 'Lavender',
  	fontWeight: '200',
  	borderRadius: '3',
  	padding: '4px 0px',
    
  }

  return (
    <h1 style={style} >Hello, {props.name}!</h1>
  );
}

export default Ur
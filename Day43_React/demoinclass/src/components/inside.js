import React from 'react';


function Inside (props) {
  // make defaults to a color 
  // const {bdColor = 'Lavender', fontFamily = 'Helvetica'} = props;
  const {bgColor = 'Lavender', type = 'square'} = props;

  const style = {
  	// if condition 
  	borderRadius: type === 'circle' ? '99999999px' : '0px',
  	width: '100px',
  	height: '100px',
  	
  	Color: 'Lavender',
  	
  	backgroundColor: bgColor

  	// borderRadius: '3',
  	// padding: '4px 0px',
    
  }

  return (
    <div className="Shape" style={style} ></div>
   
  );
}


export default Inside;
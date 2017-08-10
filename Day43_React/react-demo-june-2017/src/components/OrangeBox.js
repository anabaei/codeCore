import React from 'react';
import Shape from './Shape';

function OrangeBox (props) {
  const style = {
    display: 'flex',
    backgroundColor: 'Orange',
    padding: '50px 50px',
    width: `${3 * 150 + 4 * 50}px`,
    justifyContent: 'space-around'
  };

  return (
    <div className='OrangeBox' style={style}>
      <Shape />
      <Shape />
      <Shape />
    </div>
  )
}

export default OrangeBox;

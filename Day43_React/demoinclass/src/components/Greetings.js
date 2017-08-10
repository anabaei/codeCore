import React from 'react';
import Hello from './Hello';

// props.names == ['Jo', 'Dave', 'Lana', 'Dana', 'Tom']
// ðððð
// [<Hello name='Jo' />, <Hello name='Dave' />, <Hello name='Lana' /> ...]
function Greetings (props) {
  const {names = []} = props;

  const helloElements = names.map(
    // name => <Hello name={name} />
     (name, index) => <Hello key={index} name={name}  isBye={index % 2} />
  );

  return (
    <div className='Greetings'>
      { helloElements }
    </div>
  );
}

export default Greetings;
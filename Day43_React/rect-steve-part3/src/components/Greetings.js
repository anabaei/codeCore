import React from 'react';
import Hello from './Hello';

// props.names == ['Jo', 'Dave', 'Lana', 'Dana', 'Tom']
// 👇👇👇👇
// [<Hello name='Jo' />, <Hello name='Dave' />, <Hello name='Lana' /> ...]
function Greetings (props) {
  const {names = []} = props;

  // To optimize rendering array of components, give each component
  // in the list the `key` prop which should be given a unique identifier.
  // This can be the `index` of the array or much better yet the `id` of
  // a row in database if working with real data.
  const helloElements = names.map(
    (name, index) => <Hello
       isBye={Math.floor(Math.random() * 2)}
       key={index}
       name={name}
     />
  );

  return (
    <div className='Greetings'>
      { helloElements }
    </div>
  );
}

export default Greetings;

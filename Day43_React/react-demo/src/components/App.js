// import React from 'react';


// function App (props){

// 	retrun (
//        <div className='App'>
//        </div> 
// 		)
// }

// export default App;

import React from 'react';
import Hello from './Hello';
import Shape from './Shape';
import Inside from './inside';
import Greetings from './Greetings';

function App (props) {
  return (
    <div className='App'>

      <div className='Shape'>
      <Shape  bgColor='orange' type='rec'/>
      <Shape  bgColor='blue' type='rec'/>
      </div>

      <Hello name='job' />
      <Hello name='ali' bgColor='blue'/>
      <Hello name='mamad' type='circle'/>

     <Shape name='ds' />
     <Shape name='ds' bgColor='green' type='circle'/>
     <Shape name='ds' bgColor='green' type='rec'/>

     <Greetings names={['Jo', 'Dave', 'Lana', 'Dana', 'Tom']} />

    </div>
  );
}

export default App;



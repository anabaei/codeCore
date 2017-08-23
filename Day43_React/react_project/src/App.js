import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
import Hello2 from './components/Hello2';
import Greetings from './components/Greetings';
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">


          //  Hello names={['Jo', 'Dave', 'Lana', 'Dana', 'Tom']} />
        <Greetings />
        <Hello2 />

        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
         <button type="button" className="btn btn-primary">Primary</button>


      </div>
    );
  }
}

export default App;

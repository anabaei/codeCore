import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route, Switch} from 'react-router-dom';
import Hello2 from './Hello2'
import Hello from './Hello'
import Test from './Test'

class Greetings extends Component {

  constructor (props) {
      super(props);

       this.state = {
         entries: [],
          time: new Date().toString(),
          count: 0
       };

      this.addEntry = this.addEntry.bind(this);
        this.start = this.start.bind(this);
    }

componentDidMount () {
 setInterval(() => {
   this.setState({time: new Date().toString() });
 })
}

start() {
      this.intervalId = setInterval(() => {
        const {count} = this.state;
        this.setState({count: count + 1});
      }, 10);
  }


addEntry(event){
  event.preventDefault();
  const {entries} = this.state;
  const {currentTarget} = event;
  const fData = new FormData(currentTarget);
 console.log(this.state);

  this.setState({
      entries: entries.concat([{
        message: fData.get('message')
      }])
    },() => { currentTarget.reset() });

}

 renderEntries() {
  return(
    <Router>

  <div>  {this.state.entries.map((entry, index) =>
     (<p key={index}> <Link to="/test"> {entry.message}
   </Link>
      </p>

     )
   )}

     <strong>Count:</strong> {this.state.count}
     <button onClick={this.start}>Start</button>

      <Route exact path='/test' component={Test} />
  

  </div>
 </Router>
 )
 }

  render(){

   return(

     <div className='GuestBook'>
       <div className='GuestBookEntries'>
         {this.renderEntries()}
       </div>
       <form onSubmit={this.addEntry}>
         <div>
           <label htmlFor='message'>Message</label> <br />
           <textarea id='message' name='message' />
         </div>
         <div>
           <label htmlFor='name'>Name</label> <br />
           <input id='name' name='name' />
         </div>
         <div>
           <input type='submit' value='submit' />
         </div>
       </form>
     </div>

 );

  }
}

export default Greetings;

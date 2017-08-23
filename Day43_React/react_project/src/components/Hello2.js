import React, { Component } from 'react';


class Hello2 extends Component {
  constructor (props) {
   super(props);
   this.state = {
      cnt: 0
    };
  this.colorCycle = this.colorCycle.bind(this);
}
  colorCycle() {
    console.log(this);
    this.setState((state , props) =>
    ({amir: "Dx", ali: "DFD", cnt: state.cnt + 1}));
  }



render(){

   return(
  <p onClick={this.colorCycle}
      className='Hello2'
      onMouseOver={() => {console.log("Hover!"); this.setState({cnt: 1})}}
  > dd
</p>
);
}
}
export default Hello2;

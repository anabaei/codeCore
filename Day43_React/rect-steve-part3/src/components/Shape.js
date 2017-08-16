import React, {Component} from 'react';

const COLORS = ['Magenta', 'Yellow', 'Cyan'];

class Shape extends Component {
  constructor (props) {
    super(props);

    this.state = {
      colorIndex: 0
    };

    this.colorCycle = this.colorCycle.bind(this);
  }

  colorCycle () {
    const {colors = COLORS} = this.props;
    const {colorIndex} = this.state;
    this.setState({colorIndex: (colorIndex + 1) % colors.length});
  }

  render () {
    const {colors = COLORS, bgColor = 'Blue', type = 'square'} = this.props;

    const style = {
      borderRadius: type === 'circle' ? '99999999px' : '0px',
      width: '150px',
      height: '150px',
      backgroundColor: colors[this.state.colorIndex]
    }

    return (
      <div
        onClick={this.colorCycle}
        className='Shape'
        style={style} />
    );
  }
}

/*
function Shape (props) {
  const {bgColor = 'Blue', type = 'square'} = props;

  const style = {
    borderRadius: type === 'circle' ? '99999999px' : '0px',
    width: '150px',
    height: '150px',
    backgroundColor: bgColor
  }

  return (
    <div className='Shape' style={style} />
  );
}
*/

export default Shape;

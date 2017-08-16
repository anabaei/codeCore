// Exported default values are imported without using braces {}. All other values
// that exported (without default) must be imported using their name surrounded
// by braces {}.
// `export default React;`
// `export Component;`
// `export class Component extends ... {}`
import React, {Component} from 'react';

// When using JSX, you must always import React event though
// you might not use the `React` object anywhere in your file, because
// JSX tags are converted to `React.createElement` method calls.

/*
function Hello (props) {
  const {
    isBye = false,
    bgColor = 'Lavender',
    fontFamily = 'Helvetica Neue'
  } = props;

  const greeting = isBye ? <em>Bye</em> : <strong>Hello</strong>

  const style = {
    fontFamily: `${fontFamily}, sans-serif`,
    fontWeight: '200',
    backgroundColor: bgColor,
    borderRadius: '3px'
  };

  return (
    <h1 className='Hello' style={style}>
      {greeting}, {props.name}!
    </h1>
  );
}
*/

// Using props with JSX:
// `<Hello name='Jon' />`
// The `props` object will receive all "HTML Attributes" as properties. Meaning
// that the above `Hello` React element will instantiated with props having
// the property `name` and its value being `Jon`.

// All class based components must `extends` from `Component` or `React.Component`
// depending on how you choose to import React modules.
class Hello extends Component {
  constructor (props) {
    super(props);

    this.state = {
      hovered: false
    };
  }

  render () {
    const { hovered } = this.state;
    const {
      isBye = false,
      bgColor = 'Lavender',
      fontFamily = 'Helvetica Neue'
    } = this.props;
    // In class based, `props` is a property of `this`.

    let greeting;
    if (hovered) {
      greeting = !isBye ? <em>Bye</em> : <strong>Hello</strong>
    } else {
      greeting = isBye ? <em>Bye</em> : <strong>Hello</strong>
    }

    const style = {
      fontFamily: `${fontFamily}, sans-serif`,
      fontWeight: '200',
      backgroundColor: bgColor,
      borderRadius: '3px',
      transition: '0.5s border'
    };

    if (this.state.hovered) {
      style.border = 'solid thick Salmon';
    }

    // All class based components must have a render() method that
    // returns a React element.
    return (
      <h1
        onMouseLeave={() => {this.setState({hovered: false})}}
        onMouseEnter={() => {this.setState({hovered: true})}}
        className='Hello' style={style}>
        {greeting}, {this.props.name}!
      </h1>
    );
  }
}

export default Hello;














/* */

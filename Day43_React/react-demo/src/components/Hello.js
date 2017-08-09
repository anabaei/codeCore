import React from 'react';
// When using JSX, you must always import React event though
// you might not use the `React` object anywhere in your file, because
// JSX tags are converted to `React.createElement` method calls.

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

// Using props with JSX:
// `<Hello name='Jon' />`
// The `props` object will receive all "HTML Attributes" as properties. Meaning
// that the above `Hello` React element will instantiated with props having
// the property `name` and its value being `Jon`.

export default Hello;
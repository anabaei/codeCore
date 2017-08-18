import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  TouchableHighlight
} from 'react-native';


// react-native does not render to HTML5. It renders to view code
// on the respective platform (Android or iOS.)

// To display anything on a react-native application, we must
// import a component from the react-native package.

// Use the `View` component for basic containers like a `div`.
// Use the `Text` to display any text on the screen.
// Use the `TouchableOpacity` component to make any component
// pressable.

export default class App extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      currentTime: 0,
      startTime: null
    }

    this.handleStart =  this.handleStart.bind(this);
    this.handleStop =  this.handleStop.bind(this);
  }

  handleStart () {
    if (!this.intervalId) {
      this.setState(
        {startTime: new Date()},
        () => {
          this.intervalId = setInterval(() => {
            const {currentTime, startTime} = this.state;
            const elapsedMs = new Date() - startTime;

            this.setState({currentTime: elapsedMs})
          }, 100)
        }
      );
    }
  }

  handleStop () {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  render() {
    return (
      <View style={styles.container}>

        <View style={{
          height: '18%',
          width: '100%',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>

          <View>
            <Text style={styles.timeText}>
              {this.state.currentTime / 1000}
            </Text>
          </View>

          <TouchableHighlight
            onPress={this.handleStart}
            underlayColor='whitesmoke'
            style={styles.button}>
            <Text style={styles.buttonText}>Start</Text>
          </TouchableHighlight>

          <TouchableOpacity
            onPress={this.handleStop}
            style={styles.button}>
            <Text style={styles.buttonText}>Stop</Text>
          </TouchableOpacity>

        </View>
        {/*
        <Button
          title="Click me!"
          onPress={() => alert('I was pressed!')} />
        */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 26,
    fontFamily: 'Courier New'
  },
  button: {
    width: '50%',
    height: 30,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'blue'
  }
});








/* */

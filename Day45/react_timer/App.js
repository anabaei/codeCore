import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button
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
      currentTime: 0
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.timeText}>
            {this.state.currentTime}
          </Text>
        </View>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Start</Text>
        </View>
        <Button
          title="Click me!"
          onPress={() => alert('I was pressed!')} />
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
    fontSize: 26
  },
  button: {
    width: '50%',
    height: 30,
    borderWidth: 1,
    borderColor: 'lightgrey',
    borderStyle: 'solid',
    borderRadius: 5
  }
});

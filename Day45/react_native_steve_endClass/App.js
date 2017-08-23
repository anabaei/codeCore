import React, {Component} from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import QuestionsNavScreen from './src/components/screens/QuestionsNavScreen';
import QuestionsIndexScreen from './src/components/screens/QuestionsIndexScreen';
import { Question } from './src/utilities/requests';

const {width, height} = Dimensions.get('window');

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <QuestionsNavScreen />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white'
  },
});

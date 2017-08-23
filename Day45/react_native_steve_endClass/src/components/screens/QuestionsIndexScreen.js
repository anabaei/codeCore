import React, {Component} from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity
} from 'react-native';
import QuestionListItem from '../QuestionListItem';
import { Question } from '../../utilities/requests';

class QuestionsIndexScreen extends Component {
  static navigationOptions = {
    title: 'Questions'
  }

  constructor (props) {
    super(props);

    this.state = {
      questions: []
    }
  }

  componentDidMount () {
    Question
      .getAll()
      .then(questions => this.setState({questions}));
  }

  render () {
    const {questions} = this.state;

    // The `navigation` prop is passed by navigators from react-navigation.
    // The prop is an object with methods to navigate to different screens on the StackNavigator
    // component or the TabNavigator component.
    const {navigation} = this.props;
    // <FlatList ... /> is a component optimized for rendering
    // large lists of data. It only renders as many list item
    // components on the screen as it needs (as many it can fit.)
    // It will cycle the list item components that disappear
    // , replace their data and move them to where the user scrolls.
    return (
      <FlatList
        data={questions}
        keyExtractor={question => question.id}
        renderItem={
          ({item}) => <QuestionListItem navigation={navigation} {...item} />
        } />
    );
  }
}

export default QuestionsIndexScreen;

import React, {Component} from 'react';
import {Question} from '../../utilities/requests';
import QuestionList from '../QuestionList';

class QuestionsIndexPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      questions: []
    };
  }

  // 👇 Lifecycle callback that will run once the
  // component is first rendered in the browser.
  componentDidMount () {
    Question
      .getAll()
      .then(questions => this.setState({questions}));
  }

  render () {
    return (
      <div className='QuestionsIndexPage'>
        <h2>Questions</h2>
        <QuestionList questions={this.state.questions} />
      </div>
    );
  }
}

export default QuestionsIndexPage;

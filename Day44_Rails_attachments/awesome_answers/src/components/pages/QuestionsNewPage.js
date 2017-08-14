import React, {Component} from 'react';
import {Question} from '../../utilities/requests';
import QuestionForm from '../QuestionForm';

class QuestionsNewPage extends Component {
  constructor (props) {
    super(props);

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion (question) {
    Question
      .post(question)
      .then(({id}) => this.props.history.push(`/questions/${id}`));
  }

  render () {
    return (
      <div className='QuestionsNewPage'>
        <h2>New Question</h2>
        <QuestionForm onSubmit={this.createQuestion} />
      </div>
    );
  }
}

export default QuestionsNewPage;

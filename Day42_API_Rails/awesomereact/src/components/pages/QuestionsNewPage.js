
import React, {Component} from 'react';
import QuestionForm from '../QuestionForm'

class QuestionsNewPage extends Component {
  render () {
    return (
      <div className='QuestionsNewPage'>
        <h2>New Question</h2>
        <QuestionForm />
      </div>
    );
  }
}

export default QuestionsNewPage;
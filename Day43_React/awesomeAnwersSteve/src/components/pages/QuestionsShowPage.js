import React, {Component} from 'react';
import {Question} from '../../utilities/requests';
import QuestionDetails from '../QuestionDetails';

class QuestionsShowPage extends Component {
  constructor (props) {
    super(props);

    this.state = {
      question: {}
    };
  }

  componentDidMount () {
    const {id} = this.props.match.params;

    Question
      .get(id)
      .then(question => this.setState({question}));
  }

  render () {
    return (
      <div className='QuestionsShowPage'>
        <QuestionDetails {...this.state.question} />
      </div>
    );
  }
}

export default QuestionsShowPage;

import React from 'react';
import QuestionSummary from './QuestionSummary';

function QuestionList (props) {
  const {questions = []} = props;

  return (
    <div className='QuestionList'>
      {
        questions.map(
          question => <QuestionSummary key={question.id} {...question} />
          // ... <QuestionSummary key={question.id} id={question.id} title={question.title} created_at={question.created_at} ... />
        )
      }
    </div>
  );
}

export default QuestionList;

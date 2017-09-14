import React from 'react';

function QuestionDetails (props) {
  const {id, title, body, answers = [], author = {}} = props;

  return (
    <div className='QuestionDetails'>
      <h2>{title}</h2>
      <p>{body}></p>
      <p><em>{author.first_name} {author.last_name}</em></p>
      <h3>Answers</h3>
      <div className='AnswerList'>
        {
          answers.map(
            answer => (
              <div key={answer.id}>
                {answer.body}
              </div>
            )
          )
        }
      </div>
    </div>
  )
}

export default QuestionDetails;
import React from 'react';

function QuestionDetails (props) {
  const {id, title, body, answers = [], author = {}} = props;

  return (
    <div className='QuestionDetails'>
      <h2>{title}</h2>
      <p>{body}</p>
      <p><em>By {author.first_name} {author.last_name}</em></p>
      <h3>Answers</h3>
      <ul className='AnswerList'>
        {
          answers.map(
            answer => (
              <li key={answer.id}>
                {answer.body}
              </li>
            )
          )
        }
      </ul>
    </div>
  )
}

export default QuestionDetails;

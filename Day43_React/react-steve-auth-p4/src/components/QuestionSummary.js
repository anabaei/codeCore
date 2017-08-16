import React from 'react';
import { Link } from 'react-router-dom';

function QuestionSummary (props) {
  const {id, title, created_at } = props;
  return (
    <div className='QuestionSummary'>
      <Link to={`/questions/${id}`}>{title}</Link> • {created_at}
    </div>
  );
};

export default QuestionSummary;

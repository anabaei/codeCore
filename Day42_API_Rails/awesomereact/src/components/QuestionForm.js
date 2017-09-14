import React from 'react';

function QuestionForm (props) {

  return (
    <form>
      <div>
        <label htmlFor='title'>Title</label> <br />
        <input id='title' name='title' />
      </div>

      <div>
        <label htmlFor='body'>Body</label> <br />
        <textarea id='body' name='body' />
      </div>

      <div>
        <input type='submit' value='Submit'/>
      </div>
    </form>
  );
}

export default QuestionForm;
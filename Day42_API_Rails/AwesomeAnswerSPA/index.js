// 1. Build functions to fetch our data and test our backend in the process.
// 2. Allow CORS (Cross Origin Resource Sharing) on our backend server. We setup
//    the `rack-cors` on Awesome Answers to accomplish this.

const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1';
// const API_KEY = 'cd2583a2eb688452be031bfdb79857c7133dad4c3d5c50bf7ec4d61635a9866a';
const API_KEY = 'cabaa75fd95929ca025b89dd59751dc7fe0b28bed841fd83cd8c87af49fc8682';
// To keep all methods that do requests to Questions together, we'll put
// them inside an object named `Question`.
const Question = {
  // getAll: function () { ... }
  // ð Property Method Shorthand. Syntax sugar for ð
  getAll() {
    return fetch(
      `${DOMAIN}${API_PATH}/questions`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  get (id) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/${id}`,
      {
        headers: {'Authorization': API_KEY}
      }
    ).then(res => res.json());
  },
  post (attributes) {
    return fetch(
      `${DOMAIN}${API_PATH}/questions/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': API_KEY
        },
        body: JSON.stringify(attributes)
      }
    ).then(res => res.json());
  }
}
// usage:
/*
Question.getAll()
Question.get(400)
*/

// Node Selector Helpers
function q (query) { return document.querySelector(query); }
function qs (query) { return document.querySelectorAll(query); }

// View
function renderQuestions (questions = []) {
  return questions
    .map(question => `
      <div class='question-summary'>
        <a data-id=${question.id} href>${question.title}</a>
      </div>
    `)
    .join('');
}

function renderQuestion (question = {}) {
  const {author = {}} = question;
  return `
    <h1>${question.title}</h1>
    <p>${question.body}</p>
    <p><strong>Author:</strong> ${author.first_name} ${author.last_name}</p>
    <h2>Answers</h2>
    <div id="answer-list">
      ${renderAnswers(question.answers)}
    </div>
  `;
}

function renderAnswers (answers = []) {
  return answers
    .map(answer => `
      <div class="answer-summary">
        <p>${answer.body}</p>
        <p><strong>Author:</strong> ${answer.author_full_name}</p>
        <p><strong>Created At:</strong> ${answer.created_at}</p>
      </div>
    `).join('');
}

document.addEventListener('DOMContentLoaded', event => {
  // Write code that needs to run after the DOM is fully loaded in here
  const questionList = q('#question-list');
  const questionDetails = q('#question-details');
  const questionForm = q('#question-form');
  const questionNew = q('#question-new');
  const nav = q('nav');

  function showQuestion (id) {
    return Question
      .get(id)
      .then(renderQuestion)
      .then(html => {
        questionDetails.innerHTML = html;
        questionDetails.classList.remove('hidden');
        questionList.classList.add('hidden');
        questionNew.classList.add('hidden');
      });
  }

  Question
    .getAll()
    .then(renderQuestions)
    .then(html => { questionList.innerHTML = html });

  nav.addEventListener('click', event => {
    const {target} = event;
    event.preventDefault();

    const href = target.getAttribute('data-href');

    switch (href) {
      case 'question-list':
        questionDetails.classList.add('hidden');
        questionList.classList.remove('hidden');
        questionNew.classList.add('hidden');
        break;
      case 'question-new':
        questionDetails.classList.add('hidden');
        questionList.classList.add('hidden');
        questionNew.classList.remove('hidden');
        break;
    }
  })

  questionList.addEventListener('click', event => {
    const {target} = event;

    if (target.matches('.question-summary > a')) {
      event.preventDefault();
      const id = target.getAttribute('data-id');
      showQuestion(id);
    }
  });

  questionForm.addEventListener('submit', event => {
    const {currentTarget} = event;
    event.preventDefault();

    const fData = new FormData(currentTarget);

    Question
      .post({
        title: fData.get('title'),
        body: fData.get('body')
      })
      .then(({id}) => showQuestion(id))
      .then(() => {
        currentTarget.reset();
        Question
          .getAll()
          .then(renderQuestions)
          .then(html => { questionList.innerHTML = html });
      });
  });
});






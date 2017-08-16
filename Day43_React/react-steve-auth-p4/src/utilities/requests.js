const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1';
const API_KEY = 'ApiKey ee1838b60e3e140e5580b3c9c79a178b4cd0a900ee680b04b10de6dd07eb3ba9';

// To keep all methods that do requests to Questions together, we'll put
// them inside an object named `Question`.
const Question = {
  // getAll: function () { ... }
  // 👇 Property Method Shorthand. Syntax sugar for 👆
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
};

const Token = {
  post (params) {
    return fetch(
      `${DOMAIN}${API_PATH}/tokens/`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }
    ).then(res => res.json());
  }
}

export { Question, Token };








/* */

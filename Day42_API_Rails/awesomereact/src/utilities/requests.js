const DOMAIN = 'http://localhost:3000';
const API_PATH = '/api/v1';
const API_KEY = 'cb8bf0eb18b3550515ae8b4493ab255fd259631055fb07408b2c54dc797f80b2';

// To keep all methods that do requests to Questions together, we'll put
// them inside an object named `Question`.
const Question = {
  // getAll: function () { ... }
  //Property Method Shorthand. Syntax sugar for 👆
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

export { Question };
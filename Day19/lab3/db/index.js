const pgp = require('pg-promise')();
const db = pgp({
  host: 'localhost',
  database: 'exp_dev'
});

db.query(`
  CREATE TABLE posts14 (
    id SERIAL,
    title VARCHAR(255),
    content TEXT,
    author VARCHAR(255)
  )
`)
  .then(() => {
    console.log('🛠 Created table posts!');
    // process is a global object provided by node (only)
    // that gives access to the running program. We can use it
    // to exit the program amongst other things.
    process.exit();
  })
  .catch(err => {
    console.error(err);
    process.exit();
  })
module.exports = db;

const db = require('./index');
const faker = require('faker');

db.query(`
  INSERT INTO posts (username, body)
  VALUES ($<username>, $<body>)
`, {
  username: faker.hacker.noun(),
  body: faker.hacker.phrase()
})
  .then(() => {
    console.log('🔨 Created a post!');
    process.exit();
  })
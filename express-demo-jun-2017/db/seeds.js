const db = require('./index');
const faker = require('faker');

db.query(`
  INSERT INTO posts (title, content, author)
  VALUES ($<title>, $<content>, $<author>)
`, {
  title: faker.hacker.noun(),
  content: faker.hacker.phrase(),
  author: faker.name.findName()
})
  .then(() => {
    console.log('🔨 Created a post!');
    process.exit();
  })

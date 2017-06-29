
// Get if we map it we get selecting from columns
// patch updating columns 
// Post create usually 

// Every informaiton we want to have should be contin 
// wit http 
// REST 4 different verbs for operations
// URL should starts with 
// :id show the params of that post



// db.query('select * from posts;').then(console.info)
const faker = require('faker');
const db = require('./index');


// db.query(`
//    INSERT INTO posts (title, content, author)
//    VALUES ($<title>, $<content>, $<author>)
// 	`, {
// 		title: faker.hacker.noun(),
//         content: faker.hacker.content(),
//         author: faker.hacker.author()
// 	})
  
//    .then(() => {
//    	console.log('Create s post!');
//    	process.exit();
//    })


db.query(`
  INSERT INTO posts (title, content, author)
  VALUES ($<title>, $<content>, $<author>)
`, {
  title: faker.hacker.noun(),
  content: faker.hacker.phrase(),
  author: faker.name.findName()
})
  .then(() => {
    console.log('ð¨ Created a post!');
    process.exit();
  })



// we want to use a query to make a dababase
// node db/seed.js
// yarn db:drop yarn db:create yarn db:migrate yarn db:seeds

const db = require('./index');
const faker = require('faker');
db.query(`
   CREATE TABLE posts1 (
    id SERIAL,
    title VARCHAR(255),
    content TEXT,
    author VARCHAR(255)
  
   	)
	`)

/// once this table is complete this funciotn is run

	.then(() => {
		console.log('created table');
// process is a global object provided by node 
// that gives access to runnin program.	    
	    process.exit();
	})

    .catch(err => {
     console.log('ð  Not Created !');
    	console.log(err);
    	 process.exit();
    })

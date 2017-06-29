// setup connection to database


// give an instance of pg params 
// 
const pgp = require('pg-promise')();
const db = pgp({
	host: 'localhost',
	database: 'exp_dev'
});

// we export the value or the object when you are going 
// to get it 
module.exports = db;

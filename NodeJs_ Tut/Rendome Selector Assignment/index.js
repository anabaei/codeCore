var cool = require('cool-ascii-faces');
var express = require('express');
var app = express();
var pg = require('pg');

// var pool = new pg.Pool()

// connection using created pool
// pool.connect(function(err, client, done) {
//   client.query(/* etc, etc */)
//   done()
// })

// pool shutdown




// app.get('/db', function (request, response) {
//   pg.connect(function(err, client, done) {
//    // client.query('SELECT * FROM info', function(err, result) {
//       done();
//      // if (err)
//      //  { console.error(err); response.send("Error " + err); }
//      // else
//      //  { 
//        	response.render('pages/db'); 
//      //  }
//    // });
//   });
// });

// pool.end()
// app.post('/', function (request, response) {
//   pg.connect(process.env.DATABASE_URL, function(err, client, done) {
//     client.query('INSERT INTO info (name, gp) VALUES ($<name>, $<gp>)'
// 	, {
// 	  name: req.body.name ,
// 	  gp: req.body.gp
// 	}), function(err, result) {
//       done();
//       if (err)
//        { console.error(err); response.send("Error " + err); }
//       else
//        { response.render('pages/db', {results: result.rows} ); }
//     });
//   });
// });




app.post('/', (req, res) => {

  // const mycookie = req.body.mytask
  // res.cookie('cookie', mycookie);

 // console.log('cookie exists = ', res);
 
	// db.query(`
	//   INSERT INTO info (name, gp)
	//   VALUES ($<name>, $<gp>)
	// `, {
	//   name: req.body.name ,
	//   gp: req.body.gp
	// })

	//   .then(() => {
	//     console.log('🔨 Created a post!');
	//     process.exit();
	//   });
     
	  res.render('pages/index')
});


app.set('port', (process.env.PORT || 5000));

app.use(express.static(__dirname + '/public'));

// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('pages/index')
});

app.get('/cool', function(request, response) {
  response.send(cool());
});

app.get('/anim', function(request, response) {
  response.render('pages/anim');
});

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
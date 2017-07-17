const db = require('./db/index');
const express = require('express');
const router = express.Router();


/// when app use is triger

const path = require('path');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

// const home = require('./routes/home');
// const posts = require('./routes/posts');

// Calling the express function will create
// an instance of a Express web server
const app = express();

// Configure our Express app to use ejs as our templating engine
app.set('view engine', 'ejs');
// app.use(logger('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

// app.get('/', (req, res) => {
//   res.render('index');
// });

//this one sets cookie to a local variable
// everytime app was used
app.use(function (req, res, next) {
  const mycookie = req.body.mytask
//  console.log(req);
  // const username = req.cookies.username;
  // All properties of res.local are available as variables
  // inside your views
  res.locals.cookie = mycookie;
  next();
});

/// this one create cookie inside the cookie respond
app.post('/', (req, res) => {
  const mycookie = req.body.mytask
  res.cookie('cookie', mycookie);
//  console.log('cookie exists = ', res);
db.query(`
  INSERT INTO posts (title, content, author)
  VALUES ($<title>, $<content>, $<author>)
`, {
  title: "faker.hacker",
  content: "faker.hacker",
  author: "faker.hacker"
})
  .then(() => {
    console.log('🔨 Created a post!');
    process.exit();
  });

  res.render('results',{result: req.body});
});

//// now select everything from databse

// posts#index URL: /posts HTTP VERB: GET
app.get('/', (req, res) => {
  db.query(
    `SELECT * FROM posts ORDER BY id DESC`
  )
    .then(posts => {
      res.render('index', {posts: posts});
    })

});

// posts#show URL: /posts/:id HTTP VERB: GET
app.get('/:id', (req, res) => {
  console.log("came here");
  const {id} = req.params;
  // const id = req.params.id;
  db.one(
    `SELECT * FROM posts WHERE id = $<id> LIMIT 1`,
    {id: id}
  )
    .then(post => {
      res.render('show', {post: post});
    })
    .catch(err => res.send(err));
});



const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🖥 Server listening on http://localhost:${PORT}`);
});

/// when app use is triger
const express = require('express');
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

app.get('/', (req, res) => {
  res.render('index');
});

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
  res.render('results',{result: req.body});
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🖥 Server listening on http://localhost:${PORT}`);
});

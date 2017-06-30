// Step 1: Create project with `yarn init`
// Step 2: Add Express package with `yarn add express`
// Step 3: Create `app.js` file
// Step 4: Require Express in `app.js`
// Step 5: Create a route to serve `/hello/:name`
// Step 6: Have server, app, listen on PORT
// Step 7: Install nodemon & add start script

const express = require('express');
const path = require('path');
const logger = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const home = require('./routes/home');
const posts = require('./routes/posts');

// Calling the express function will create
// an instance of a Express web server
const app = express();

// Configure our Express app to use ejs as our templating engine
app.set('view engine', 'ejs');



// unlike app.get, app.use will match for all HTTP verbs
// If we do not give a path as the first argument, it will match for
// every URL
/*
app.use(function (request, response, next) {
  console.log(`📝 ${request.method} – ${request.path} – ${new Date().toString()}`);
  // next, a function and third argument of a middleware callback,
  // express to move on to the next middleware
  next();
  // If you do not call next, or terminate a response with response.send,
  // the browser will appear to never stop loading when accessing a URL
  // on your server
});
*/

app.use(logger('dev'));
// __dirname is a global variable provided by node which
// holds absolute path to the file where it is used.
// (i.e. "/Users/sg/Code/CodeCore/LiveDemos/2017/June/express-demo")
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(function (req, res, next) {
  const {lan} = req.cookies;
  // const username = req.cookies.username;
   console.log('cookie exists = ', req);
  // All properties of res.local are available as variables
  // inside your views
  res.locals.lan = lan;
  next();
});

// When use app.use to mount a router file, the first argument
// is a string that will prefix all uri paths defined inside the router file
app.use('/', home);
// app.use('/posts', posts);

// PORT is uppercased because we intend to be a constant.
// It shouldn't be changed after it's declared.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`🖥 Server listening on http://localhost:${PORT}`);
});

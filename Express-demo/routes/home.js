const express = require('express');
const router = express.Router();

// making a part of the relative url begin with :, will make
// that matched section available as data in request.params under a
// property named after the word that follows :.

// URL: http://localhost:4545/hello/:name HTTP VERB: GET
router.get('/hello/:name', function (request, response) {
  // This function is named Middleware
  // It's passed the arguments in order: request, response & next
  // - request is an object that contains the entire message from
  //   client. This means http headers, any data its sending, etc.
  // - response is an object that contains the message our server will
  //   reply with to the client. It also contains http headers, our own data, etc.
  const name = request.params.name || 'World';
  response.send(`Hello, ${name}!`);
});

// URL: http://localhost:4545/ HTTP VERB: GET
router.get('/', function (request, response) {
  // response.render's first argument is the location and name
  // of a template we want render beginning at views/
  response.render('index');
});

// URL: http://localhost:4545/contact HTTP VERB: GET
router.get('/contact', function (request, response) {
  response.render('contact', {contact: {}});
});

// URL: http://localhost:4545/contact HTTP VERB: POST
router.post('/contact', function (request, response) {
  // when a form post is parsed by bodyParser,
  // its data is formatted as a javascript object and it
  // assigned to the body property of request
  response.render('contact', {contact: request.body});
});

// URL: http://localhost:4545/username HTTP VERB: POST
router.post('/username', function (req, res) {
  const {username} = req.body;
  // 👆 this syntax is named: destructuring. It's a shortcut (syntax sugar)
  // for the code below
  // const username = req.body.username;
  // res.cookie is method added by the cookie-parser
  // its convenient way to set cookies in the header of the response
  // - the first argument is the name of the cookie
  // - the second argument is the value of the cookie
  // - the third and last argument is object to configure the cookie
  res.cookie('username', username, {maxAge: 1000*60*60*24});
  // the maxAge option determines how long a cookie will last in milliseconds

  // res.redirect tells the browser, in the response, to go to the given URL
  res.redirect('/');
});

module.exports = router;

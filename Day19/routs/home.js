// curl does web request, it is a quick way to download to your computer 
// mv images destincation folder 
// yarn add cookie-parser
// 

const express = require('express');
const router = express.Router();

/// we load express packages after installing them

// express is a function inside express 
//varibale name shouldnt be same as package


/// it works on every verbs (get, post,. ..) 
// if we dont send respond then we need to respond back
// app.use(function(request,respond, next){

// console.log(request.method);

// //next notify express we are done here
// next();
// });

// set up http get, call back is run when client 
// ask that path '/' to handle the request
// a resuest is message we get from customer 
// respond is the object we are building to send 

/// whar is different between / and request 
// req is the object includes all headers and 
// and information we are sending to 
// / is the only request 
// name would be a property of params object and if it is empty return
// world
// app.get('/hello/:name', function (req, res) {  
//   // call back is named MiddleWare, 
//   const name = req.params.name || 'world!';
//   res.send('Hello'+ name);
// });

// // index is in the template to render inside views
router.get('/', function(request, respond){
  respond.render('index');
});




router.post('/username', function(req,res){
 
 // assigining of body properties body to 
 // we can have as many as properties as we want so here we want 
 // just user name from body object 
 // the first one is name of cookie, and second is value of cookie
 const username = req.body.username

 res.cookie('username', username, {maxAge: 1000*3000});
 // just telling to browser go to location 
 res.redirect('/'); 
});
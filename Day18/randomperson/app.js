
/// we load express packages after installing them
const express = require('express')
// express is a function inside express 
//varibale name shouldnt be same as package
const logger = require('morgan')

const bodyParser = require('body-parser');
const app = express();

// configure our Express app to use ejs as our template
// view engine is use to render htmls but after this you 
// can define ejs files inside views 
app.set('view engine', 'ejs');

// combined is predifned format of morgan 
app.use(logger('dev'));

// app.use(bodyParser.urlencoded({extended:false}));


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

// index is in the template to render inside views
app.get('/', function(request, respond){
   respond.render('index');
});

// app.get('/contact', function(request, respond){
//   respond.render('contact', {contact: {} });
// });

// we need to install middle ware to parse data
app.post('/re', function(request, respond){
 // contact first one is rendering to page, 
 respond.render('index',{result: request.body});
 // respond.send(request.body);
 // respond.send('contact form received');
});






// const port =4545;

// app.listen(port,()=> {console.log('server listen to'+ port)});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
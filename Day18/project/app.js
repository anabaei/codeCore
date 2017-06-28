
/// we load express packages after installing them
const express = require('express')
// express is a function inside express 
const app = express()

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
app.get('/hello/:name', function (req, res) {  
  // call back is named MiddleWare, 
  const name = req.params.name || 'world!';
  res.send('Hello'+ name);
});

const port =4545;

app.listen(port,()=> {console.log('server listen to'+ port)});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
})
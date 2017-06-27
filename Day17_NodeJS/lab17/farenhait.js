// // Load the 'net' built in module from Node
// const net = require('net');

// // Create the server
// const server = net.createServer(function(socket) {
//   socket.on('data', function(data) {
//     // decode the data to string format
//     let name = data.toString()
//     // simple capitalize script
//     let capitalizedName = name.charAt(0).toUpperCase() + name.slice(1);
//     // send a response back to the client
//     socket.write('Hello ' + capitalizedName);
//   });

//   // notify when connection closes
//   socket.on('close', function() {
//     console.log('Client is no longer communicating.');
//   });

// });

// // Open server on port 3000
// server.listen(3000);

// console.log('Server is listening at PORT 3000');


// const net = require("net");

// const client = new net.Socket();

// client.on("data", function(data){
//   console.log("Data Received from server: " + data);
// });
// const url  = require("url");

// const server = http.createServer(function(request, response) {
  // params will be a JS object with

// client.connect(5000, "127.0.0.1", function(){
//   client.write("Tam");
// });
const url  = require("url");
const http = require('http');
const server = http.createServer(function(request, response) {
  // this like red the get params that we receive as part of url
  // it will give us back a javascript object 
  // it always returns values as strings so if you need 
  // a number just convert it to integer first 
  const params = url.parse(request.url, true).query;
    params.name = Math.round((params.name - 32)/1.8,4);

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<!DOCTYPE html>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                  <html>
                  <head>
                    <title>My first web server</title>
                  </head>
                  <body>
                    <center> <h1>Temperature is =  ${params.name} </h1> </center>
                    
                  </body>
                  </html>`);
  response.end();
});
server.listen(4000);
console.log("Server is listening on port 4000");

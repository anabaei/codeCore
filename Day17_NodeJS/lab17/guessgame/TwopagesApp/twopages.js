
const url  = require("url");
const http = require('http');
const server = http.createServer(function(request, response) {
  
  const params = url.parse(request.url, true).query;
   const p = url.parse(request.url, true);
   
   if(p.path.includes('/greeting'))
   {
  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<!DOCTYPE html>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                  <html>
                  <head>
                    <title>My first web server</title>
                  </head>
                  <body>
                    <center> <h1>Hello  ${params.name} </h1> </center>
                    
                  </body>
                  </html>`);
  response.end();
   }
   else
   {
      response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<!DOCTYPE html>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                  <html>
                  <head>
                    <title>My first web server</title>
                  </head>
                  <body>
                    <center> <h1>Welcome to my application </h1> </center>
                    
                  </body>
                  </html>`);
  response.end();
   } 

//   response.writeHead(200, {'Content-Type': 'text/html'});
//   response.write(`<!DOCTYPE html>
//     <!-- Latest compiled and minified CSS -->
// <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
//                   <html>
//                   <head>
//                     <title>My first web server</title>
//                   </head>
//                   <body>
//                     <center> <h1>Temperature is =  ${params.name} </h1> </center>
                    
//                   </body>
//                   </html>`);
//   response.end();
});
server.listen(5000);
console.log("Server is listening on port 5000");

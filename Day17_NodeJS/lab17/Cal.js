
const url  = require("url");
const http = require('http');
const server = http.createServer(function(request, response) {

  const params = url.parse(request.url, true).query;
  if (params.name > 90) params.name = 'A';
  else if(params.name > 80) params.name = 'B';
  else if(params.name > 70) params.name = 'C';
  else if(params.name > 60) params.name = 'D';
   else  params.name = 'F';

  response.writeHead(200, {'Content-Type': 'text/html'});
  response.write(`<!DOCTYPE html>
    <!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                  <html>
                  <head>
                    <title>My first web server</title>
                  </head>
                  <body>
                    <center> <h1>Your Score is =  ${params.name} </h1> </center>
                    ${params.name}
                  </body>
                  </html>`);
  response.end();
});
server.listen(4000);
console.log("Server is listening on port 4000");

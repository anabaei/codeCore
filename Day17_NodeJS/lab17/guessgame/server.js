const net = require('net');

const server = net.createServer(function(socket){
  let number;
  let random; 
  let result = false;
	socket.on('data', function(data){

   number = parseInt(data);
   
   random = Math.floor((Math.random() * 10) + 1);

   if (number === random)
    result = true;
  
  // socket.write(`  ${result}`);
 // socket.write(`  ${number}`);
  socket.write(`Random number is=  ${random}`);
  socket.write(`your guess was ${result}`);
	
  })
});

// the above defines the server but doesnt run it, 
// to run the server you do
console.log("server is running on 5000");
server.listen(5000,"127.0.0.1"); 
// server.li
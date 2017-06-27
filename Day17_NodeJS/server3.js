// net is a built in lib helps to use TCP/HTTP handle requests

const net = require('net');

const server = net.createServer(function(socket){
// server contineously listening to request on the socket
// server is like infinite loop waiting for request.
// when a new data comes server use the call back function
	
	socket.on('data', function(data){
		let numbers = data.toString.split(',').map(function(num){
			return parseInt(num);
		});

	  
      console.log('data received'+data);

	// to write a respond back 
	socket.write('Thank you');

	})
});

// the above defines the server but doesnt run it, 
// to run the server you do
console.log("server is running");
server.listen(5000,"127.0.0.1"); 
// server.listen(5000,"10.0.0.101");
// // Load the 'net' built in module from Node
// const net = require('net');

// // Create the client by instantiating a new instance of Socket
// const client = new net.Socket();

// // Assign a name to a variable
// const name = 'buddy';

// // Set the client to listen for a response
// client.on('data', function(data) {
//   console.log(`Server says: ${data}`);
// });

// // Connect to the server and send 'name' through the connection.
// client.connect(3000, '127.0.0.1', function() {
//   client.write(name);
// });



const net = require("net");

const client = new net.Socket();

client.on("data", function(data){
  console.log("Data Received from server: " + data);
});

client.connect(5000, "127.0.0.1", function(){
  client.write("Tam");
});







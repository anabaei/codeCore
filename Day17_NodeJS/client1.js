
// net library is used for both send and receive data 

const net = require('net');
const socket = net.Socket();
socket.on("data", function(data)){
	console.log('data receieved from server ${data}');
});


socket.connect(5000,"127.0.0.1", function(){
  socket.write('hello');
  process.exit();
});



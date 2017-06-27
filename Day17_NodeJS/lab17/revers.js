const net = require('net');
const socket = net.Socket();
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
rl.question('What is your name?', function(name){
  socket.write(name);
});

socket.on("data", function(data){
 	console.log('your reverse name'+ data);
});

socket.connect(5000,"127.0.0.1", function(){

});
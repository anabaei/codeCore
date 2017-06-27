
const net = require('net');

const server = net.createServer(function(socket){

	
	socket.on('data', function(data){

   //    let arr = data.toString().split("");
   // let result = "";
   // for (let i of arr){
   //   result = i + result;
   // }
   // socket.write(`  ${result}`);
  })
});

console.log("server is running on 5000");
server.listen(5000,"127.0.0.1"); 
// server.listen(5000,"10.0.0.101");



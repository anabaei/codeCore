const net = require('net');

const server = net.createServer(function(socket){
  let number;
  let random = Math.floor((Math.random() * 10) + 1);
  let cnt = 0;
  let result = false;
	socket.on('data', function(data){

   number = parseInt(data);

   if (number === random)
   {
    result = true;
    socket.write(`your guess was right in ${cnt} attempts`);
    cnt = 0;
   }
   else {
    cnt+=1;
    if(number > random)
      socket.write(`guess lower`);
    else {socket.write(`guess higher`)};
   }
  
  // socket.write(`  ${result}`);
 // socket.write(`  ${number}`);
  // socket.write(`Random number is=  ${random}`);
  // socket.write(`your guess was  ${result}`);
	
  })
});

// the above defines the server but doesnt run it, 
// to run the server you do
console.log("server is running on 5000");
server.listen(5000,"127.0.0.1"); 
// server.li
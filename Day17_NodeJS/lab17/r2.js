const net = require('net');


const client = new net.Socket();


const string = 'Hello how are you, what is this?';

client.on('data', function(response){
 console.log(`Server says: ${response}`);
})

client.connect(5000, function(){
 client.write(string)
})
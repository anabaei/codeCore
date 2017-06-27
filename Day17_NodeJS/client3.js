
const net = require('net');

const client = net.Socket();

const numbers = '5,5,2,6,8'

client.on('data', function(response){
	console.log('servers say: ${response}')
});


client.connect(5000,"127.0.0.1", function(){
 client.write(numbers);

});

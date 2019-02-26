const net = require('net');
const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
})
var fs = require('fs');
var message = 'www.youtube.com';

var client = net.Socket();
client.connect(8080, () => {
	readline.on('line', (input) => {
    client.write(input);
	});
});

	let data = '';
	client.on('data', (chunk) => {
		data += chunk;
		client.destroy;
	//	console.log(data);
			fs.writeFile('receivedData.html', data, function(err, data){
			if (err) console.log(err);
			console.log("Successfully Written to File.");
		});
		
	});
		
client.on('close', () => {
    console.log('Connection closed');
});
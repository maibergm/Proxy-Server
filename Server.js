const net = require('net');

var server = net.createServer();
server.listen(8080);
console.log('Listening');

server.on('connection', (socket) => { 
	socket.on('end', () => { 
		socket.destroy(); 
	});
	
	socket.on('data', (data) => { 
		var dataString = data.toString();
		
		const https = require('https');
		https.get('https://www.google.com', (resp) => {
			
	    let data = '';
		resp.on('data', (chunk) => {
		data += chunk;
	  });

	  resp.on('end', () => {
		
		 console.log(data);
	  });

	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
	
	//	console.log("Sent string by client" + dataString);
	//	socket.write("You sent me this -> "  +dataString); 
		socket.destroy();
	});
});

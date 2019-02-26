const net = require('net');

var server = net.createServer();
server.listen(8080);
var dict = {
	
};

console.log('Listening');

server.on('connection', (socket) => { 
	socket.on('end', () => { 
		socket.destroy(); 
	});
	
	socket.on('data', (data) => { 
	    console.time("db.save");
		var dataString = data.toString(); //Recieved request in a var 
		for(var key in dict) {       //search for link in cache 
				
				var value = dict[dataString];	
		}		
		if (value == null) {
		const https = require('https');
		https.get('https://' +dataString, (resp) => {
			
	    let data = '';
		resp.on('data', (chunk) => {
		data += chunk;
	  });

	  resp.on('end', () => {
		 socket.write(data); 
		 console.log("Time taken to retrieve data :");
		 console.timeEnd("db.save");
		 if (value == null)  //if it wasnt in cache, save to it 
		{
			
			dict[dataString]		= data;
		}
	//	console.log(dict[dataString]);
	  });

	}).on("error", (err) => {
	  console.log("Error: " + err.message);
	});
		}
		else { 
		socket.write(value);
		console.log("data has been written");
		console.log("Time taken to retrieve data :");
		console.timeEnd("db.save");	
		}
	});
});

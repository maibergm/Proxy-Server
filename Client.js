const net = require('net');
var message = 'www.google.com';

var client = net.Socket();
client.connect(8080, () => {
    client.write(message);
});

client.on('data', (data) => {
    console.log(data.toString());
});

client.on('close', () => {
    console.log('Connection closed');
});
const aedes = require('aedes')();
const server = require('net').createServer(aedes.handle);
const port = 5007;

server.listen(port  , function () {
    console.log('Aedes MQTT broker running on port:', port);
});

// Handle client connection
aedes.on('client', function (client) {
    console.log('Client Connected:', client.id);
});

// Handle client disconnection
aedes.on('clientDisconnect', function (client) {
    console.log('Client Disconnected:', client.id);
});

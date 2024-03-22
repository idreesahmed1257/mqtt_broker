// const aedes = require('aedes')();
// const server = require('net').createServer(aedes.handle);
// const port = 5007;

// server.listen(port  , function () {
//     console.log('Aedes MQTT broker running on port:', port);
// });

// // Handle client connection
// aedes.on('client', function (client) {
//     console.log('Client Connected:', client.id);
// });

// // Handle client disconnection
// aedes.on('clientDisconnect', function (client) {
//     console.log('Client Disconnected:', client.id);
// });


const fastify = require('fastify')({ logger: true });

fastify.get('/', async (request, reply) => {
    return { hello : 'MQTT'}
});

const start = async () => {
    try {
        await fastify.listen({ port: 5060 });
        console.log(`Fastify server running on port ${5060}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};

start();
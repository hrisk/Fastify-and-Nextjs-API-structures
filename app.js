// .env file which contains the database connection details
require('dotenv').config();

// load fastify
const fastify = require('fastify')({logger: true})

// register the routes
fastify.register(require('./routes/nextRoutes'));
fastify.register(require('./routes/routes'));

// start the server
const start = async () => {
    try {
        await fastify.listen(process.env.PORT || 3000)
        fastify.log.info(`server listening on ${fastify.server.address()}`)
    } catch (err) {
        fastify.log.error(err)
        process.exit(1)
    }
}

start();
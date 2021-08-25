const fastify = require('fastify')();

/**
 * front end routes for NextJs
 * @param fastify
 * @returns {Promise<void>}
 */
async function nextRoutes(fastify){
    //.after needs to be done to handle the long load time of nextjs
    fastify.register(require('fastify-nextjs'))
        .after(() =>{
            fastify.next('/form')
            fastify.next('/students')
        })
}

module.exports = nextRoutes

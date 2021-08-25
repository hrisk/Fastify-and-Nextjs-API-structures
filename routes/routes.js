let register = require('../controllers/register');
let getCommonStudents = require('../controllers/getCommonStudents')
let retrieveNotifications = require('../controllers/retrieveNotifications')

/**
 * routes for the application
 * @param fastify
 * @returns {Promise<void>}
 */
async function routes(fastify) {

    //Test Route
    fastify.get('/', function (request, reply) {
        reply.send({message: 'Hello World', code: 200})
    });

    /**
     * get request for common students given tutor emails
     * acceptable formats:
     *      GET /api/getcommonstudents?tutor=tutorken%40gmail.com
     *      GET /api/getcommonsstudents?tutor=tutorken%40gmail.com&tutor=tutorjoe%40gmail.com
     */
    fastify.get("/api/getcommonsstudents", getCommonStudents.getCommonStudents);

    /**
     * post request for common students given tutor emails
     */
    fastify.post("/api/getcommonsstudents", getCommonStudents.getCommonStudents);

    /**
     * post request to register students
     */
    fastify.post('/api/register', register.register);

    /**
     * Post request to notify mentioned and registered students under a tutor
     */
    fastify.post('/api/retrievenotifications', retrieveNotifications.retrieveNotifications)
}

module.exports = routes;
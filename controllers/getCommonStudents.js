let response = require('../config/responses');
let con = require('../config/database');
const fastify = require("fastify")()
const helpers = require('../helpers/helpers')

/**
 * Method to get the common students given tutor emails
 * It accepts both post and get requests
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function getCommonStudents(req, res) {
    try {
        let tutor_email
        // POST and GET requests
        if (req.method === "POST") {
            tutor_email = req.body["tutor"]
        } else {
            tutor_email = req.query["tutor"]
        }
        let where = ""
        let count = 0
        // return of no tutor email given
        if (!tutor_email || tutor_email.length === 0) return response.response(400, 400, '', "Tutor email empty", res);

        // dynamically generate the where clause for sql query
        if (Array.isArray(tutor_email)) {
            for (const email of tutor_email) {
                if (helpers.validateEmail(email)) {
                    where = where.concat(`tutor_email = \"${email}\" or `)
                    count += 1
                } else {
                    return response.response(400, 400, '', `Invalid email ${email}`, res)
                }
            }
            where = where.substring(0, where.length - 3)
        } else {
            if (helpers.validateEmail(tutor_email)) {
                where = where.concat(`tutor_email = \"${tutor_email}\"`)
                count += 1
            } else {
                return response.response(400, 400, '', `Invalid email ${tutor_email}`, res)
            }
        }

        let sql = `SELECT student_email FROM students where ${where} GROUP BY student_email HAVING count(*)=${count}`

        let data = await new Promise((resolve) =>
            con.query(sql,
                function (err, result) {
                    if (err) {
                        console.log(err);
                        return response.response(400, 400, '', `${err}`, res)
                    }
                    return resolve(result);
                })
        );

        // format result to required format
        let jsonFormatting = {"students": []}
        data.forEach(d => jsonFormatting["students"].push(d["student_email"]))

        return response.getResponse(200, 200, jsonFormatting, "", res)
    } catch (err) {
        return response.getResponse(400, 400, '', err, res)
    }
}

module.exports = {
    getCommonStudents
};
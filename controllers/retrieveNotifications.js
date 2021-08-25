const con = require('../config/database')
const response = require('../config/responses')
const helpers = require('../helpers/helpers')

/**
 * Method to retrieve the student email ids which will receive notifications
 * based on the notification string of request
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function retrieveNotifications(req, res) {
    try {
        const tutor = req.body["tutor"]
        const notification = req.body["notification"]

        let where = `tutor_email = \"${tutor}\"`
        // return of tutor email is empty
        if (!tutor || tutor.length === 0) return response.response(400, 400, '', 'Tutor email empty', res)

        // dynamically generate where clause for sql query
        const student_emails = await helpers.getTags(notification)
        student_emails.forEach(email => where = `student_email = \"${email}\" or `.concat(where))

        const sql = `SELECT DISTINCT student_email FROM students WHERE ${where}`

        let data = await new Promise((resolve) => {
            con.query(sql, function (err, results) {
                if (err) {
                    console.log(err)
                    return response.response(400, 400, '', err, res)
                }
                return resolve(results)
            })
        });

        //format query result according to requirement
        let jsonFormatting = {"recipients": []}
        data.forEach(d => jsonFormatting["recipients"].push(d["student_email"]))

        return response.response(200, 200, jsonFormatting, '', res)
    } catch (err) {
        return response.response(400, 400, '', err, res)
    }
}

module.exports = {
    retrieveNotifications
}
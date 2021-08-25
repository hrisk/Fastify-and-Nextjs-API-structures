let response = require('../config/responses');
let con = require('../config/database');
let fastify = require('fastify');
let helper = require('../helpers/helpers');


/**
 * Register students to tutors.
 * @param req
 * @param res
 * @returns {Promise<*>}
 */
async function register(req, res) {
    let tutor_email
    let student_email
    try {
        //read values of tutors
        tutor_email = req.body["tutor"];
        student_email = req.body["student"];

        // check if student or tutor is empty
        if (!tutor_email || tutor_email.length === 0) return response.response(400, 400, '', "Tutor email empty");
        if (!student_email || student_email.length === 0) return response.response((400, 400, '' , 'Student email empty'));

        // convert json to SQL query style values
        let {sql_values, invalid_emails} = await helper.jsonToSqlValues(tutor_email, student_email)

        //send with response if needed
        // if (invalid_emails || !(invalid_emails.length === 0)) {
        //     let msg = `${invalid_emails} not registered`
        // }

        //insert query
        let sql = `INSERT INTO students(student_email, tutor_email) values ?`;

        // extension of insert to monitor each email and make sure the relevant emails are registered
        // if (Array.isArray(student_email)) {
        //     let message = ""
        //     for (const email of student_email) {
        //         if (await already_existent()) message.concat(`${email} already exists so it is skipped\n`)
        //         else {
        //             await insert(tutor_email, email, res)
        //             message.concat(`${email} and ${tutor_email} registered`)
        //         }
        //     }
        // }

        // write data to database and respond accordingly
        let data = await new Promise((resolve) =>
            con.query(sql, [sql_values],
                function (err) {
                    if (err) {
                        if (err.code === 'ER_DUP_ENTRY') {
                            return response.response(400, 400, '', `some or all students from ${student_email} already registered to tutor: ${tutor_email}`, res)
                        }
                        console.log(err);
                        return response.response(400, 400, '', `${err}`, res)
                    }
                    return resolve('');
                })
        );

        return response.response(200, 204, data, `Successful registration of student: ${student_email} under tutor: ${tutor_email}`, res);

    } catch (err) {
        return response.response(400, 400, '', err, res)
    }
}

/**
 * insert individual records into database
 * @param tutor_email
 * @param email
 * @param res
 * @returns {Promise<void>}
 */
async function insert(tutor_email, email, res) {
    let sql = `INSERT INTO students(student_email, tutor_email) values ${email}, ${tutor_email}`;

    let data = await new Promise((resolve) =>
        con.query(sql,
            function (err, result) {
                if (err) {
                    console.log(err);
                    return response.response(400, 400, '', `${err}`, res)
                } else return resolve(result);
            })
    );
}

/**
 * check if a certain record already exists in the database
 * @param tutor_email
 * @param email
 * @returns {Promise<void>}
 */
async function already_existent(tutor_email, email) {
    let check_sql = `SELECT * from students where student_email = \"${email}\" and tutor_email = \"${tutor_email}\"`

    let already_existent = new Promise((resolve) =>
        con.query(check_sql,
            function (err, rows) {
                if (err) {
                    console.log(err);
                }
                return resolve(rows);
            })
    );
}

module.exports = {
    register, already_existent
};

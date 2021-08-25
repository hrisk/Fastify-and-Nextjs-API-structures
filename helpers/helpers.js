/**
 * Regex to validate an string as Email
 * @param email
 * @returns {Promise<boolean>}
 */
const {NULL} = require("mysql/lib/protocol/constants/types");

function validateEmail(email) {
    return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,10}$/i.test(email);
}

/**
 * Convert the JSON format post request to usable sql insert values
 * @param tutor_email
 * @param student_email
 * @returns {Promise<{sql_values: *[], invalid_emails: *[]}>}
 */
async function jsonToSqlValues(tutor_email, student_email) {
    let sql_values = [];
    let invalid_emails = [];
    if (!validateEmail(tutor_email)) return NULL;
    if (Array.isArray(student_email)) {
        student_email.forEach(email => {
            if (validateEmail(email))
                sql_values.push([email, tutor_email])
            else
                invalid_emails.push(email)
        })
    }
    else{
        sql_values.push([student_email, tutor_email])
    }

    return {sql_values, invalid_emails}
}

/**
 * Function to extract email Ids from notification text
 * @param str
 * @returns {Promise<*[]>}
 */
async function getTags(str) {
    const emails = [];
    if (!str || str.length === 0) return emails;
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++){
        const word = words[i];
        if (word && word.charAt(0) === '@') {
            const email = word.substring(1);
            if (validateEmail(email)) emails.push(email)
        }
    }
    return emails;
}

module.exports = {
    validateEmail, jsonToSqlValues, getTags
};
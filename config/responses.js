// Note: two different methods for post and get request were
// created to accommodate future changes

/**
 * Post response template
 * @param httpCode
 * @param responseCode
 * @param values
 * @param message
 * @param reply
 * @returns {Promise<*>}
 */
async function postResponse (httpCode, responseCode, values, message, reply){
    return reply
        .code(httpCode)
        .header('Content-Type', 'application/json; charset=UTF-8' )
        .send({
            code: responseCode,
            values: values,
            message: message,
        });
}


/**
 * get response template.
 * @param httpCode
 * @param responseCode
 * @param values
 * @param message
 * @param reply
 * @returns {Promise<*>}
 */
async function getResponse (httpCode, responseCode, values, message, reply){
    return reply
        .code(httpCode)
        .header('Content-Type', 'application/json; charset=UTF-8' )
        .send({
            code: responseCode,
            values: values,
            message: message,
        });
}

module.exports = {
    response: postResponse, getResponse
};
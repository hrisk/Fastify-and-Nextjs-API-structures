const mysql = require('mysql');

/**
 * db connection
 * @type {Connection}
 */
const con = mysql.createConnection({
    // connectionLimit: 5,
    host: process.env.DB_HOST,
    user: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE
    // port: process.env.DB_PORT
});

/**
 * Check connection
 */
con.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + con.threadId);
});

module.exports = con;
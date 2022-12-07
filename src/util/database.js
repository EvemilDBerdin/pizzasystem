var mysql = require('mysql2');
var config = require('../config/database.json');

var pool = mysql.createPool({
    host: config.server,
    user: config.user,
    password: config.password,
    database: config.database
});

module.exports = pool.promise();
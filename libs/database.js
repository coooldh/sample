var mysql = require('mysql');
var properties = require(CONFIG_ROOT + "/properties.json");

var pool  = mysql.createPool({
    connectionLimit : 10,
    host : properties.db_ip,
    port: properties.db_port,
    user : properties.db_user_name,
    password : properties.db_user_pwd,
    database : properties.db_name,
    dateStrings:true,
    multipleStatements:true
});

module.exports = pool;

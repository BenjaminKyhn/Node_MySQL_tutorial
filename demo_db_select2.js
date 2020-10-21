const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    port: 8001,
    database: 'db'
});

connection.connect(function(err) {
    if (err) throw err;
    connection.query("SELECT name, address FROM customers", function (err, result, fields) {
        if (err) throw err;
        console.log(result); // console.log(result[2].address); to log a specific database record
    });
});
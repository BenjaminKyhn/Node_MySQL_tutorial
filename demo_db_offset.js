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
    let sql = "SELECT * FROM customers LIMIT 5 OFFSET 2";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
    });
});
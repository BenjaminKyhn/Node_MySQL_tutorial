// get the client
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
    let sql = "INSERT INTO customers (name, address) VALUES ('Michelle', 'Blue Village 1')";
    connection.query(sql, function (err, result) {
        if (err) throw err;
        console.log("1 record inserted, ID: " + result.insertId); // use the result object to print information about the query
    });
});
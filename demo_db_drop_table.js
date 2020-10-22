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
    var sql = "DROP TABLE customers";
    connection.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Table deleted");
    });
  });
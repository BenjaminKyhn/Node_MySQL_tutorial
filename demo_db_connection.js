// get the client
const mysql = require('mysql2');
 
// create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: 'password',
  port: 8001,
  database: 'db'
});
 
connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

// // simple query
// connection.query(
//  'CREATE TABLE Memes (id int, name varchar(255), description varchar(255));',
//  function(err, results, fields) {
//    console.log(results); // results contains rows returned by server
//    console.log(fields); // fields contains extra meta data about results, if available
//  }
// );

// // simple query
// connection.query(
//    'INSERT INTO Memes (id, name, description) VALUES ("1", "reee", "aggitated person outburst");',
//    function(err, results, fields) {
//      console.log(results); // results contains rows returned by server
//      console.log(fields); // fields contains extra meta data about results, if available
//    }
//  );

// // simple query
connection.query(
    'SELECT * FROM `Memes`',
    function(err, results, fields) {
      console.log(results); // results contains rows returned by server
      console.log(fields); // fields contains extra meta data about results, if available
    }
  );
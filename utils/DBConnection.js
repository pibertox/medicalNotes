var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "PIBE_pibe_2704",
  database: "medicalnotes_schema"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.end();
});

module.exports = con;

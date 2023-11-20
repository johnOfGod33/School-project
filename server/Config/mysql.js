const mysql = require("mysql2");

const database = mysql.createConnection({
  user: "jean",
  password: "jean1234",
  host: "localhost",
  database: "school_v2",
});

database.connect((error) => {
  if (error) throw error;

  console.log("database connected sucessfuly");
});

module.exports = database;

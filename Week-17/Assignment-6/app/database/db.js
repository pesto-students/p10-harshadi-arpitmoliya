const mysql = require("mysql2");
const dbConfig = require("../config/db.config");

const connection = mysql.createPool({
  host: dbConfig.HOST,
  user: dbConfig.USER,
  password: dbConfig.PASSWORD,
  database: dbConfig.DB,
});

console.log("Database is connected");

module.exports = connection;

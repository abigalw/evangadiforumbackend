const mysql = require("mysql2");
const dotenv = require("dotenv");
dotenv.config();
const db = mysql.createPool({
  host: "srv1134.hstgr.io",
  user: "u884692087_evangadiuser",
  password: process.env.DB_PASSWORD,
  database: "u884692087_evangadidb",
});

module.exports = db.promise();

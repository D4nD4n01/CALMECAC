const mysql = require("mysql2");

const connection = mysql.createPool({
  host: "localhost",         
  user: "root",              
  password: "Arancel@0403", 
  database: "calmecac2",      
  waitForConnections: true,
  connectionLimit: 4,
  queueLimit: 0,
});

module.exports = connection.promise();


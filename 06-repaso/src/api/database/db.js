import mysql from "mysql2/promise";
import environments from "../config/environments.js";
const { db } = environments;

// async await
// Create the connection to database
const connection = await mysql.createConnection({
  host: db.host,
  user: db.user,
  password: db.password,
  database: db.database,
});

export default connection;

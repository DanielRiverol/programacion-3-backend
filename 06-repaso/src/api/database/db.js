import mysql from "mysql2/promise";
// async await
// Create the connection to database
const connection = await mysql.createConnection({
  host: "localhost",
  user: "root",
  password:'Sonoma15',
  database: "programacion-3",
});


export default connection
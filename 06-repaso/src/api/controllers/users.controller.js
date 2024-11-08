import connection from "../database/db.js";
 export const = async (req, res) => {
  const sql = "SELECT * FROM users";
  const response = await connection.query(sql);
  console.log(response);

  res.status(200).json(response[0]);
}
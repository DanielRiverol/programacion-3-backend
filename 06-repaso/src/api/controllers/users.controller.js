import connection from "../database/db.js";
export const getUsers = async (req, res) => {
  const sql = "SELECT * FROM users";
  const response = await connection.query(sql);
  console.log(response);

  res.status(200).json(response[0]);
};
export const getUserById = async (req, res) => {
  try {
    const { userId } = req.params;
    const sql = `SELECT * FROM users WHERE users.id = ${userId}`;
    const user = await connection.query(sql);
    const [userFound] = user;
    console.log("Desestructurado", userFound);
    console.log("NO Desestructurado", user[0]);

    if (userFound.length > 0) {
      res.status(200).json({ payload: userFound });
    } else {
      res
        .status(404)
        .json({ message: `Usuario con el id ${userId} no encontrado` }); //Content-type: application/json
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

export const createUser = async (req, res) => {
  const { id, nombre, apellido, edad } = req.body;
  const sql = "INSERT INTO users (id,nombre,apellido,edad) VALUES (?,?,?,?) ";
  try {
    const result = await connection.query(sql, [id, nombre, apellido, edad]);
    res.status(201).json({ message: "Usuario creado con exito" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

// import connection from "../database/db.js";
// import User from "../models/users.model.js";
import * as userService from "../services/users.service.js";
// import  {getAllUsers} from "../services/users.service.js";

export const getUsers = async (req, res) => {
  // SELECT * FROM users
  const users = await userService.getAllUsers();
  res.status(200).json({ payload: users });
  //usar try catch
};
export const getUserById = async (req, res) => {
  const { id } = req.params;
  try {
    const userFound = await userService.getUserById(id);
    if (userFound) {
      res.status(200).json({ payload: userFound });
    } else {
      res.status(404).json({ message: `Usuario con id ${id} no se encuentra` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

export const createUser = async (req, res) => {
  const { firstName, lastName, email, status } = req.body;

  try {
    const result = await userService.createUser({
      firstName,
      lastName,
      email,
      status,
    });
    res.status(201).json({ message: "Usuario creado con éxito" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

export const updateUser = async (req, res) => {
  const { id } = req.params;
  const { firstName, lastName, email, status } = req.body;
  console.log(id);

  try {
    const result = await userService.updateUserIfExists(id, {
      firstName,
      lastName,
      email,
      status,
    });
    res.status(200).json({ message: "Usuario actualizado con éxito" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;
  // buscar el usuario primero y existe lo elimino

  try {
    await userService.deleteUserIfExists(id);
    res.status(200).json({ message: "Usuario eliminado" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
};

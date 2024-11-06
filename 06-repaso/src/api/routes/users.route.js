import { Router } from "express";
import users from "../database/db-memory.js";
const router = Router();

const usersDB = users;

// gets
router.get("/", (req, res) => {
  // res.status(200).send({ payload: usersDB });
  res.status(200).json({ payload: usersDB });
});
router.get("/:userId", (req, res) => {
  try {
    const { userId } = req.params;
    const user = usersDB.find((user) => user.id === +userId);
    if (user) {
      res.status(200).json({ payload: user });
    } else {
      res
        .status(404)
        .json({ message: `Usuario con el id ${userId} no encontrado` });
    }
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error interno del servidor", error: error.message });
  }
});

export default router;

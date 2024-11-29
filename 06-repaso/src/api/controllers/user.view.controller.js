import User from "../models/users.model.js";

export const getUsersForView = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;

  try {
    const users = await User.findAll({ limit: +limit, offset: +page });
    res.render("users", { title: "Lista de usuarios", users });
  } catch (error) {
    res.status(500).json({ message: "Error interno ", error });
  }
};

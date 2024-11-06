import { Router } from "express";
import users from "../database/db-memory.js";
const router = Router();

// gets
router.get("/", (req, res) => {
  res.render("index", { title: "Página de inicio" });
});
router.get("/users", (req, res) => {
  res.render("users", { title: "Listado de usuarios", users });
});

export default router;

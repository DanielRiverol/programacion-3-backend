import { Router } from "express";
// import users from "../database/db-memory.js";
import { getUsersForView } from "../controllers/user.view.controller.js";
const router = Router();

// gets
router.get("/", (req, res) => {
  res.render("index", { title: "Página de inicio" });
});
router.get("/users", getUsersForView);

export default router;

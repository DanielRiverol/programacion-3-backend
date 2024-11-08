import { Router } from "express";
import {
  createUser,
  getUserById,
  getUsers,
} from "../controllers/users.controller.js";
const router = Router();

// gets
router.get("/", getUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
export default router;

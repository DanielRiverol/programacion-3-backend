import { Router } from "express";
import {
  createUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "../controllers/users.controller.js";
const router = Router();

// gets
/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Listado de usuarios
 *    tags: [User]
 *    responses:
 *      200:
 *        description: Lista de usuarios
 *        content:
 *          application/json:
 *              schema:
 *                type: array
 *                items:
 *                   $ref: '#/components/schemas/User'
 */
router.get("/", getUsers);
/**
 * @swagger
 * /api/users/{id}:
 *  get:
 *    summary: Ver usuario por id
 *    tags: [User]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: "integer"
 *          required: true
 *          description: Id de usuario
 *    responses:
 *      200:
 *        description: Lista de usuarios
 *        content:
 *          application/json:
 *              schema:
 *                type: array
 *                items:
 *                   $ref: '#/components/schemas/User'
 */
router.get("/:id", getUserById);
/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: Crear usuario
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *             $ref: '#/components/schemas/User'
 *    responses:
 *      201:
 *        description: suauario creado exitosamente
 *        content:
 *          application/json:
 *              schema:
 *               $ref: '#/components/schemas/User'
 */
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
export default router;

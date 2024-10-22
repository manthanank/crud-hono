import { Hono } from "hono";
import {
  createUserHandler,
  getUsersHandler,
  getUserByIdHandler,
  updateUserHandler,
  deleteUserHandler,
} from "../controllers/user.controller.js";

const userRoutes = new Hono();

userRoutes.post("/", createUserHandler);
userRoutes.get("/", getUsersHandler);
userRoutes.get("/:id", getUserByIdHandler);
userRoutes.put("/:id", updateUserHandler);
userRoutes.delete("/:id", deleteUserHandler);

export default userRoutes;

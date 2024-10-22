import type { Context } from "hono";
import {
  createUser,
  getUsers,
  getUserById,
  updateUser,
  deleteUser,
} from "../services/user.service.js";

export const createUserHandler = async (c: Context) => {
  const { name, email } = await c.req.json();
  const newUser = await createUser({ name, email });
  return c.json(newUser, 201);
};

export const getUsersHandler = async (c: Context) => {
  const users = await getUsers();
  return c.json(users);
};

export const getUserByIdHandler = async (c: Context) => {
  const { id } = c.req.param();
  const user = await getUserById(id);
  return user ? c.json(user) : c.json({ message: "User not found" }, 404);
};

export const updateUserHandler = async (c: Context) => {
  const { id } = c.req.param();
  const { name, email } = await c.req.json();
  const updatedUser = await updateUser(id, { name, email });
  return updatedUser
    ? c.json(updatedUser)
    : c.json({ message: "User not found" }, 404);
};

export const deleteUserHandler = async (c: Context) => {
  const { id } = c.req.param();
  const deletedUser = await deleteUser(id);
  return deletedUser
    ? c.json({ message: "User deleted" })
    : c.json({ message: "User not found" }, 404);
};

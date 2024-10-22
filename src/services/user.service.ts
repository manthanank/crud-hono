import User from "../models/user.model";

export const createUser = async (data: { name: string; email: string }) => {
  const user = new User(data);
  return await user.save();
};

export const getUsers = async () => {
  return await User.find();
};

export const getUserById = async (id: string) => {
  return await User.findById(id);
};

export const updateUser = async (
  id: string,
  data: { name: string; email: string }
) => {
  return await User.findByIdAndUpdate(id, data, { new: true });
};

export const deleteUser = async (id: string) => {
  return await User.findByIdAndDelete(id);
};

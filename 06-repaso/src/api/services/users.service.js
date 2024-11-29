import User from "../models/users.model.js";

export const getAllUsers = async () => {
  return await User.findAll();
};

export const getUserById = async (id) => {
  return await User.findByPk(id);
};
export const createUser = async (user) => {
  return await User.create(user);
};

export const updateUserIfExists = async (id, user) => {
  const userFound = await User.findByPk(id);
  if (!userFound) return null;

  await User.update(user, {
    where: {
      id: id,
    },
  });

  return userFound;
};
export const deleteUserIfExists = async (id) => {
  const userFound = await User.findByPk(id);
  if (!userFound) return null;

  await User.destroy(id);

  return userFound;
};

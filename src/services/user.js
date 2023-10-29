const User = require("../models/user.js");
const contentValidator = require("../utils/contentValidator.js");

const getAll = async () => {
  try {
    const users = await User.findAll();
    contentValidator(users);
    return users;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const user = await User.findByPk(id);
    contentValidator(user);
    return user;
  } catch (err) {
    throw err;
  }
};

const create = async (user) => {
  try {
    const newUser = await User.create(user);
    contentValidator(newUser);
    return newUser;
  } catch (err) {
    throw err;
  }
};

const update = async (id, user) => {
  try {
    const updateUser = await User.update(user, { where: { id } });
    contentValidator(updateUser);
    return updateUser;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const userDestroy = await User.destroy({ where: { id } });
    contentValidator(userDestroy);
    return userDestroy;
  } catch (err) {
    throw err;
  }
};

const findExist = async (username) => {
  try {
    const findUser = await User.findOne({ where: { username } });
    if (!(findUser === null)) {
      throw new Error("User already exists");
    }
  } catch (err) {
    throw err;
  }
};

const findUser = async (username) => {
  try {
    const find = await User.findOne({ where: { username } });
    contentValidator(find);
    return find;
  } catch (err) {
    throw err;
  }
};

const generateCodeLogin = (code, username) => {
  try {
    const codigo = User.update({ loginCode: code }, { where: { username } });
    contentValidator(codigo);
    return codigo;
  } catch (err) {
    throw err;
  }
};

const updatePassword = (password, username) => {
  try {
    const update = User.update({ password }, { where: { username } });
    contentValidator(update);
    return update;
  } catch (err) {
    throw err;
  }
};

const generateCodeRecovery = (code, username) => {
  try {
    const codigo = User.update({ recoveryCode: code }, { where: { username } });
    contentValidator(codigo);
    return codigo;
  } catch (err) {
    throw err;
  }
};

const userService = {
  getAll,
  getById,
  create,
  update,
  destroy,
  findExist,
  findUser,
  generateCodeLogin,
  generateCodeRecovery,
  updatePassword,
};

module.exports = userService;

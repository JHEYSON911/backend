const userService = require("../services/user.js");
const handleErrorController = require("../utils/handleErrorController.js");

const getAll = async (req, res) => {
  try {
    const users = await userService.getAll();
    return res.status(200).json({ data: users });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getById(id);
    return res.status(200).json({ data: user });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const create = async (req, res) => {
  try {
    const { user } = req.body;
    const newUser = await userService.create(user);
    return res.status(200).json({ data: newUser });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const update = async (req, res) => {
  try {
    const { id, user } = req.params;
    const updatedUser = await userService.update(id, user);
    return res.status(200).json({ data: updatedUser });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await userService.destroy(id);
    return res.status(200).json({ data: deletedUser });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const userController = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = userController;

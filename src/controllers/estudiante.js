const estudianteService = require("../services/estudiante");
const handleErrorController = require("../utils/handleErrorController");

const getAll = async (req, res) => {
  try {
    const students = estudianteService.getAll();
    return res.status(200).json({ data: students });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await estudianteService.getById(id);
    return res.status(200).json({ data: student });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const create = async (req, res) => {
  try {
    const { user } = req.body;
    const newStudent = await estudianteService.create(user);
    return res.status(200).json({ data: newStudent });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const update = async (req, res) => {
  try {
    const { id, user } = req.params;
    const updateStudent = await estudianteService.update(id, user);
    return res.status(200).json({ data: updateStudent });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const deleteStudent = await userService.destroy(id);
    return res.status(200).json({ data: deleteStudent });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const studentController = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = studentController;

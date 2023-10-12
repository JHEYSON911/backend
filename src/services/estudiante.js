const Estudiante = require("../models/estudiante.js");
const contentValidator = require("../utils/contentValidator");

const getAll = async () => {
  try {
    const students = await Estudiante.findAll();
    contentValidator(students);
    return students;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const student = await Estudiante.findByPk(id);
    contentValidator(student);
    return student;
  } catch (err) {
    throw err;
  }
};

const create = async (student) => {
  try {
    const newStudent = await Estudiante.create(student);
    contentValidator(newStudent);
    return newStudent;
  } catch (err) {
    throw err;
  }
};

const update = async (id, student) => {
  try {
    const updateStudent = await Estudiante.update(
      { student },
      { where: { id } },
    );
    contentValidator(updateStudent);
    return updateStudent;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const studentDestroy = await Estudiante.destroy({ where: { id } });
    contentValidator(studentDestroy);
    return studentDestroy;
  } catch (err) {
    throw err;
  }
};

const estudianteService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = estudianteService;

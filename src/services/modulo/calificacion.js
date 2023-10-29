const Calificacion = require("../../models/modulo/calificacion.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const grades = await Calificacion.findAll();
    contentValidator(grades);
    return grades;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const grade = await Calificacion.findByPk(id);
    contentValidator(grade);
    return grade;
  } catch (err) {
    throw err;
  }
};

const create = async (grade) => {
  try {
    const newGrade = await Calificacion.create(grade);
    contentValidator(newGrade);
    return newGrade;
  } catch (err) {
    throw err;
  }
};

const update = async (id, grade) => {
  try {
    const updateGrade = await Calificacion.update(grade, { where: { id } });
    contentValidator(updateGrade);
    return updateGrade;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const gradeDestroy = await Calificacion.destroy({ where: { id } });
    contentValidator(gradeDestroy);
    return gradeDestroy;
  } catch (err) {
    throw err;
  }
};

const gradeService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = gradeService;

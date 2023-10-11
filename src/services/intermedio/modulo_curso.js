const ModuloCurso = require("../../models/intermedio/modulo_curso.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const moduleCourses = await ModuloCurso.findAll();
    contentValidator(moduleCourses);
    return moduleCourses;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const moduleCourse = await ModuloCurso.findByPk(id);
    contentValidator(moduleCourse);
    return moduleCourse;
  } catch (err) {
    throw err;
  }
};

const create = async (moduleCourse) => {
  try {
    const newModuleCourse = await ModuloCurso.create(moduleCourse);
    contentValidator(newModuleCourse);
    return newModuleCourse;
  } catch (err) {
    throw err;
  }
};

const update = async (id, moduleCourse) => {
  try {
    const updateModuleCourse = await ModuloCurso.update(
      { moduleCourse },
      { where: { id } },
    );
    contentValidator(updateModuleCourse);
    return updateModuleCourse;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const moduleCourseDestroy = await ModuloCurso.destroy({
      where: { id },
    });
    contentValidator(moduleCourseDestroy);
    return moduleCourseDestroy;
  } catch (err) {
    throw err;
  }
};

const moduleCourseService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = moduleCourseService;

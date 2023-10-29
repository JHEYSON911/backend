const Curso = require("../../models/modulo/curso.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const courses = await Curso.findAll();
    contentValidator(courses);
    return courses;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const course = await Curso.findByPk(id);
    contentValidator(course);
    return course;
  } catch (err) {
    throw err;
  }
};

const create = async (course) => {
  try {
    const newCourse = await Curso.create(course);
    contentValidator(newCourse);
    return newCourse;
  } catch (err) {
    throw err;
  }
};

const update = async (id, course) => {
  try {
    const updateCourse = await Curso.update(course, { where: { id } });
    contentValidator(updateCourse);
    return updateCourse;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const courseDestroy = await Curso.destroy({ where: { id } });
    contentValidator(courseDestroy);
    return courseDestroy;
  } catch (err) {
    throw err;
  }
};

const courseService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = courseService;

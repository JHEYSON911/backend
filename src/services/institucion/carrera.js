const Carrera = require("../../models/institucion/carrera.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const majors = await Carrera.findAll();
    contentValidator(majors);
    return majors;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const major = await Carrera.findByPk(id);
    contentValidator(major);
    return major;
  } catch (err) {
    throw err;
  }
};

const create = async (major) => {
  try {
    const newMajor = await Carrera.create(major);
    contentValidator(newMajor);
    return newMajor;
  } catch (err) {
    throw err;
  }
};

const update = async (id, major) => {
  try {
    const updateMajor = await Carrera.update(major, { where: { id } });
    contentValidator(updateMajor);
    return updateMajor;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const MajorDestroy = await Carrera.destroy({ where: { id } });
    contentValidator(MajorDestroy);
    return MajorDestroy;
  } catch (err) {
    throw err;
  }
};

const majorService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = majorService;

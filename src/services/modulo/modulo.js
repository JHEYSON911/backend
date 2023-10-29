const Modulo = require("../../models/modulo/modulo.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const moduls = await Modulo.findAll();
    contentValidator(moduls);
    return moduls;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const modul = await Modulo.findByPk(id);
    contentValidator(modul);
    return modul;
  } catch (err) {
    throw err;
  }
};

const create = async (modul) => {
  try {
    const newModul = await Modulo.create(modul);
    contentValidator(newModul);
    return newModul;
  } catch (err) {
    throw err;
  }
};

const update = async (id, modul) => {
  try {
    const updateModul = await Modulo.update(modul, { where: { id } });
    contentValidator(updateModul);
    return updateModul;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const modulDestroy = await Modulo.destroy({ where: { id } });
    contentValidator(modulDestroy);
    return modulDestroy;
  } catch (err) {
    throw err;
  }
};

const moduleService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = moduleService;

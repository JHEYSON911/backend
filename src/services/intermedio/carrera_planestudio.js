const CarreraPlanEstudio = require("../../models/intermedio/carreraplanestudio.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const degreePlanStudys = await CarreraPlanEstudio.findAll();
    contentValidator(degreePlanStudys);
    return degreePlanStudys;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const degreePlanStudy = await CarreraPlanEstudio.findByPk(id);
    contentValidator(degreePlanStudy);
    return degreePlanStudy;
  } catch (err) {
    throw err;
  }
};

const create = async (degreePlanStudy) => {
  try {
    const newDegreePlanStudy = await CarreraPlanEstudio.create(degreePlanStudy);
    contentValidator(newDegreePlanStudy);
    return newDegreePlanStudy;
  } catch (err) {
    throw err;
  }
};

const update = async (id, degreePlanStudy) => {
  try {
    const updateDegreePlanStudy = await CarreraPlanEstudio.update(
      { degreePlanStudy },
      { where: { id } },
    );
    contentValidator(updateDegreePlanStudy);
    return updateDegreePlanStudy;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const degreePlanStudyDestroy = await CarreraPlanEstudio.destroy({
      where: { id },
    });
    contentValidator(degreePlanStudyDestroy);
    return degreePlanStudyDestroy;
  } catch (err) {
    throw err;
  }
};

const degreePlanStudyService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = degreePlanStudyService;

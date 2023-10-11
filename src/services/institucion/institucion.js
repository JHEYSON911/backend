const Institucion = require("../../models/institucion/institucion.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const institutions = await Institucion.findAll();
    contentValidator(institutions);
    return institutions;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const institution = await Institucion.findByPk(id);
    contentValidator(institution);
    return institution;
  } catch (err) {
    throw err;
  }
};

const create = async (institution) => {
  try {
    const newInstitution = await Institucion.create(institution);
    contentValidator(newInstitution);
    return newInstitution;
  } catch (err) {
    throw err;
  }
};

const update = async (id, institution) => {
  try {
    const updateInstitution = await Institucion.update(
      { institution },
      { where: { id } },
    );
    contentValidator(updateInstitution);
    return updateInstitution;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const institutionDestroy = await Institucion.destroy({ where: { id } });
    contentValidator(institutionDestroy);
    return institutionDestroy;
  } catch (err) {
    throw err;
  }
};

const institutionService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = institutionService;

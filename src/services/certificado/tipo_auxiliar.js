const TipoAuxiliar = require("../../models/certificado/tipo_auxiliar.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const auxiliaryTypes = await TipoAuxiliar.findAll();
    contentValidator(auxiliaryTypes);
    return auxiliaryTypes;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const auxiliaryType = await TipoAuxiliar.findByPk(id);
    contentValidator(auxiliaryType);
    return auxiliaryType;
  } catch (err) {
    throw err;
  }
};

const create = async (auxiliaryType) => {
  try {
    const newAuxiliaryType = await TipoAuxiliar.create(auxiliaryType);
    contentValidator(newAuxiliaryType);
    return newAuxiliaryType;
  } catch (err) {
    throw err;
  }
};

const update = async (id, auxiliaryType) => {
  try {
    const updateAuxiliaryType = await TipoAuxiliar.update(
      { auxiliaryType },
      { where: { id } },
    );
    contentValidator(updateAuxiliaryType);
    return updateAuxiliaryType;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const auxiliaryTypeDestroy = await TipoAuxiliar.destroy({ where: { id } });
    contentValidator(auxiliaryTypeDestroy);
    return auxiliaryTypeDestroy;
  } catch (err) {
    throw err;
  }
};

const auxiliaryTypeService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = auxiliaryTypeService;

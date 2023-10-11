const TipoItinerario = require("../../models/plan_estudio/tipo_itinerario.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const typeOfModalitys = await TipoItinerario.findAll();
    contentValidator(typeOfModalitys);
    return typeOfModalitys;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const typeOfModality = await TipoItinerario.findByPk(id);
    contentValidator(typeOfModality);
    return typeOfModality;
  } catch (err) {
    throw err;
  }
};

const create = async (typeOfModality) => {
  try {
    const newTypeOfModality = await TipoItinerario.create(typeOfModality);
    contentValidator(newTypeOfModality);
    return newTypeOfModality;
  } catch (err) {
    throw err;
  }
};

const update = async (id, typeOfModality) => {
  try {
    const updateTypeOfModality = await TipoItinerario.update(
      { typeOfModality },
      { where: { id } },
    );
    contentValidator(updateTypeOfModality);
    return updateTypeOfModality;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const typeOfModalityDestroy = await TipoItinerario.destroy({
      where: { id },
    });
    contentValidator(typeOfModalityDestroy);
    return typeOfModalityDestroy;
  } catch (err) {
    throw err;
  }
};

const typeOfModalityService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = typeOfModalityService;

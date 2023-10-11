const TipoItinerario = require("../../models/plan_estudio/tipo_itinerario.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const typeOfItinerarys = await TipoItinerario.findAll();
    contentValidator(typeOfItinerarys);
    return typeOfItinerarys;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const typeOfItinerary = await TipoItinerario.findByPk(id);
    contentValidator(typeOfItinerary);
    return typeOfItinerary;
  } catch (err) {
    throw err;
  }
};

const create = async (typeOfItinerary) => {
  try {
    const newTypeOfItinerary = await TipoItinerario.create(typeOfItinerary);
    contentValidator(newTypeOfItinerary);
    return newTypeOfItinerary;
  } catch (err) {
    throw err;
  }
};

const update = async (id, typeOfItinerary) => {
  try {
    const updateTypeOfItinerary = await TipoItinerario.update(
      { typeOfItinerary },
      { where: { id } },
    );
    contentValidator(updateTypeOfItinerary);
    return updateTypeOfItinerary;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const TypeOfItineraryDestroy = await TipoItinerario.destroy({
      where: { id },
    });
    contentValidator(TypeOfItineraryDestroy);
    return TypeOfItineraryDestroy;
  } catch (err) {
    throw err;
  }
};

const TypeOfItineraryService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = TypeOfItineraryService;

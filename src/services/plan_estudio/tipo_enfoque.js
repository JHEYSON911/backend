const TipoEnfoque = require("../../models/plan_estudio/tipo_enfoque.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const typeOfApproachs = await TipoEnfoque.findAll();
    contentValidator(typeOfApproachs);
    return typeOfApproachs;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const typeOfApproach = await TipoEnfoque.findByPk(id);
    contentValidator(typeOfApproach);
    return typeOfApproach;
  } catch (err) {
    throw err;
  }
};

const create = async (typeOfApproach) => {
  try {
    const newTypeOfApproach = await TipoEnfoque.create(typeOfApproach);
    contentValidator(newTypeOfApproach);
    return newTypeOfApproach;
  } catch (err) {
    throw err;
  }
};

const update = async (id, typeOfApproach) => {
  try {
    const updateTypeOfApproach = await TipoEnfoque.update(
      { typeOfApproach },
      { where: { id } },
    );
    contentValidator(updateTypeOfApproach);
    return updateTypeOfApproach;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const TypeOfApproachDestroy = await TipoEnfoque.destroy({
      where: { id },
    });
    contentValidator(TypeOfApproachDestroy);
    return TypeOfApproachDestroy;
  } catch (err) {
    throw err;
  }
};

const TypeOfApproacService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = TypeOfApproacService;

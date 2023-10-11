const NivelFormacion = require("../../models/plan_estudio/nivel_formacion.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const educationLevels = await NivelFormacion.findAll();
    contentValidator(educationLevels);
    return educationLevels;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const educationLevel = await NivelFormacion.findByPk(id);
    contentValidator(educationLevel);
    return educationLevel;
  } catch (err) {
    throw err;
  }
};

const create = async (educationLevel) => {
  try {
    const newEducationLevel = await NivelFormacion.create(educationLevel);
    contentValidator(newEducationLevel);
    return newEducationLevel;
  } catch (err) {
    throw err;
  }
};

const update = async (id, educationLevel) => {
  try {
    const updateEducationLevel = await NivelFormacion.update(
      { educationLevel },
      { where: { id } },
    );
    contentValidator(updateEducationLevel);
    return updateEducationLevel;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const educationLevelDestroy = await NivelFormacion.destroy({
      where: { id },
    });
    contentValidator(educationLevelDestroy);
    return educationLevelDestroy;
  } catch (err) {
    throw err;
  }
};

const educationLevelService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = educationLevelService;

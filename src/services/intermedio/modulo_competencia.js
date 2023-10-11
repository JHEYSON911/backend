const ModuloCompetencia = require("../../models/intermedio/modulo_competencia.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const competencyModules = await ModuloCompetencia.findAll();
    contentValidator(competencyModules);
    return competencyModules;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const competencyModule = await ModuloCompetencia.findByPk(id);
    contentValidator(competencyModule);
    return competencyModule;
  } catch (err) {
    throw err;
  }
};

const create = async (competencyModule) => {
  try {
    const newCompetencyModule =
      await ModuloCompetencia.create(competencyModule);
    contentValidator(newCompetencyModule);
    return newCompetencyModule;
  } catch (err) {
    throw err;
  }
};

const update = async (id, competencyModule) => {
  try {
    const updateCompetencyModule = await ModuloCompetencia.update(
      { competencyModule },
      { where: { id } },
    );
    contentValidator(updateCompetencyModule);
    return updateCompetencyModule;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const competencyModuleDestroy = await ModuloCompetencia.destroy({
      where: { id },
    });
    contentValidator(competencyModuleDestroy);
    return competencyModuleDestroy;
  } catch (err) {
    throw err;
  }
};

const competencyModuleService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = competencyModuleService;

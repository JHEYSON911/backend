const PlanEstudioModulo = require("../../models/intermedio/plan_estudio_modulo.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const planStudyModules = await PlanEstudioModulo.findAll();
    contentValidator(planStudyModules);
    return planStudyModules;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const planStudyModule = await PlanEstudioModulo.findByPk(id);
    contentValidator(planStudyModule);
    return planStudyModule;
  } catch (err) {
    throw err;
  }
};

const create = async (planStudyModule) => {
  try {
    const newPlanStudyModule = await PlanEstudioModulo.create(planStudyModule);
    contentValidator(newPlanStudyModule);
    return newPlanStudyModule;
  } catch (err) {
    throw err;
  }
};

const update = async (id, planStudyModule) => {
  try {
    const updatePlanStudyModule = await PlanEstudioModulo.update(
      { planStudyModule },
      { where: { id } },
    );
    contentValidator(updatePlanStudyModule);
    return updatePlanStudyModule;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const PlanStudyModuleDestroy = await PlanEstudioModulo.destroy({
      where: { id },
    });
    contentValidator(PlanStudyModuleDestroy);
    return PlanStudyModuleDestroy;
  } catch (err) {
    throw err;
  }
};

const PlanStudyModuleService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = PlanStudyModuleService;

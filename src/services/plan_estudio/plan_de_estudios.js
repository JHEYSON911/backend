const PlanDeEstudios = require("../../models/plan_estudio/plan_de_estudios.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const studyOfPlans = await PlanDeEstudios.findAll();
    contentValidator(studyOfPlans);
    return studyOfPlans;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const studyOfPlan = await PlanDeEstudios.findByPk(id);
    contentValidator(studyOfPlan);
    return studyOfPlan;
  } catch (err) {
    throw err;
  }
};

const create = async (studyOfPlan) => {
  try {
    const newStudyOfPlan = await PlanDeEstudios.create(studyOfPlan);
    contentValidator(newStudyOfPlan);
    return newStudyOfPlan;
  } catch (err) {
    throw err;
  }
};

const update = async (id, studyOfPlan) => {
  try {
    const updateStudyOfPlan = await PlanDeEstudios.update(studyOfPlan, {
      where: { id },
    });
    contentValidator(updateStudyOfPlan);
    return updateStudyOfPlan;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const studyOfPlanDestroy = await PlanDeEstudios.destroy({
      where: { id },
    });
    contentValidator(studyOfPlanDestroy);
    return studyOfPlanDestroy;
  } catch (err) {
    throw err;
  }
};

const studyOfPlanService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = studyOfPlanService;

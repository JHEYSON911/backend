const PlanEstudio = require("../../models/plan_estudio/plan_estudio.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const studyPlans = await PlanEstudio.findAll();
    contentValidator(studyPlans);
    return studyPlans;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const studyPlan = await PlanEstudio.findByPk(id);
    contentValidator(studyPlan);
    return studyPlan;
  } catch (err) {
    throw err;
  }
};

const create = async (studyPlan) => {
  try {
    const newStudyPlan = await PlanEstudio.create(studyPlan);
    contentValidator(newStudyPlan);
    return newStudyPlan;
  } catch (err) {
    throw err;
  }
};

const update = async (id, studyPlan) => {
  try {
    const updateStudyPlan = await PlanEstudio.update(studyPlan, {
      where: { id },
    });
    contentValidator(updateStudyPlan);
    return updateStudyPlan;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const studyPlanDestroy = await PlanEstudio.destroy({
      where: { id },
    });
    contentValidator(studyPlanDestroy);
    return studyPlanDestroy;
  } catch (err) {
    throw err;
  }
};

const studyPlanService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = studyPlanService;

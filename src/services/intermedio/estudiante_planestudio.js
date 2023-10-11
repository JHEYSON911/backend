const EstudiantePlanEstudio = require("../../models/intermedio/estudiante_planestudio.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const studentPlanStudys = await EstudiantePlanEstudio.findAll();
    contentValidator(studentPlanStudys);
    return studentPlanStudys;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const studentPlanStudy = await EstudiantePlanEstudio.findByPk(id);
    contentValidator(studentPlanStudy);
    return studentPlanStudy;
  } catch (err) {
    throw err;
  }
};

const create = async (studentPlanStudy) => {
  try {
    const newStudentPlanStudy =
      await EstudiantePlanEstudio.create(studentPlanStudy);
    contentValidator(newStudentPlanStudy);
    return newStudentPlanStudy;
  } catch (err) {
    throw err;
  }
};

const update = async (id, studentPlanStudy) => {
  try {
    const updateStudentPlanStudy = await EstudiantePlanEstudio.update(
      { studentPlanStudy },
      { where: { id } },
    );
    contentValidator(updateStudentPlanStudy);
    return updateStudentPlanStudy;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const studentPlanStudyDestroy = await EstudiantePlanEstudio.destroy({
      where: { id },
    });
    contentValidator(studentPlanStudyDestroy);
    return studentPlanStudyDestroy;
  } catch (err) {
    throw err;
  }
};

const studentPlanStudyService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = studentPlanStudyService;

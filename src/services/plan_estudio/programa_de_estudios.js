const ProgramaDeEstudios = require("../../models/plan_estudio/programa_de_estudios.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const studyPrograms = await ProgramaDeEstudios.findAll();
    contentValidator(studyPrograms);
    return studyPrograms;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const studyProgram = await ProgramaDeEstudios.findByPk(id);
    contentValidator(studyProgram);
    return studyProgram;
  } catch (err) {
    throw err;
  }
};

const create = async (studyProgram) => {
  try {
    const newStudyProgram = await ProgramaDeEstudios.create(studyProgram);
    contentValidator(newStudyProgram);
    return newStudyProgram;
  } catch (err) {
    throw err;
  }
};

const update = async (id, studyProgram) => {
  try {
    const updateStudyProgram = await ProgramaDeEstudios.update(
      { studyProgram },
      { where: { id } },
    );
    contentValidator(updateStudyProgram);
    return updateStudyProgram;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const studyProgramDestroy = await ProgramaDeEstudios.destroy({
      where: { id },
    });
    contentValidator(studyProgramDestroy);
    return studyProgramDestroy;
  } catch (err) {
    throw err;
  }
};

const studyProgramService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = studyProgramService;

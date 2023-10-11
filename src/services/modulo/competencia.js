const Competencia = require("../../models/modulo/competencia.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const competencies = await Competencia.findAll();
    contentValidator(competencies);
    return competencies;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const competencie = await Competencia.findByPk(id);
    contentValidator(competencie);
    return competencie;
  } catch (err) {
    throw err;
  }
};

const create = async (competencie) => {
  try {
    const newCompetencie = await Competencia.create(competencie);
    contentValidator(newCompetencie);
    return newCompetencie;
  } catch (err) {
    throw err;
  }
};

const update = async (id, competencie) => {
  try {
    const updateCompetencie = await Competencia.update(
      { competencie },
      { where: { id } },
    );
    contentValidator(updateCompetencie);
    return updateCompetencie;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const competencieDestroy = await Competencia.destroy({ where: { id } });
    contentValidator(competencieDestroy);
    return competencieDestroy;
  } catch (err) {
    throw err;
  }
};

const competencieService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = competencieService;

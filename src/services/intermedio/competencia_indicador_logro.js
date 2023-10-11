const CompetenciaIndicadorLogro = require("../../models/intermedio/competencia_indicador_logro.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const competencyIndicators = await CompetenciaIndicadorLogro.findAll();
    contentValidator(competencyIndicators);
    return competencyIndicators;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const competencyIndicator = await CompetenciaIndicadorLogro.findByPk(id);
    contentValidator(competencyIndicator);
    return competencyIndicator;
  } catch (err) {
    throw err;
  }
};

const create = async (competencyIndicator) => {
  try {
    const newCompetencyIndicator =
      await CompetenciaIndicadorLogro.create(competencyIndicator);
    contentValidator(newCompetencyIndicator);
    return newCompetencyIndicator;
  } catch (err) {
    throw err;
  }
};

const update = async (id, competencyIndicator) => {
  try {
    const updateCompetencyIndicator = await CompetenciaIndicadorLogro.update(
      { competencyIndicator },
      { where: { id } },
    );
    contentValidator(updateCompetencyIndicator);
    return updateCompetencyIndicator;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const competencyIndicatorDestroy = await CompetenciaIndicadorLogro.destroy({
      where: { id },
    });
    contentValidator(competencyIndicatorDestroy);
    return competencyIndicatorDestroy;
  } catch (err) {
    throw err;
  }
};

const competencyIndicatorService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = competencyIndicatorService;

const IndicadorLogro = require("../../models/modulo/indicador_logro.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const indicators = await IndicadorLogro.findAll();
    contentValidator(indicators);
    return indicators;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const indicator = await IndicadorLogro.findByPk(id);
    contentValidator(indicator);
    return indicator;
  } catch (err) {
    throw err;
  }
};

const create = async (indicator) => {
  try {
    const newIndicator = await IndicadorLogro.create(indicator);
    contentValidator(newIndicator);
    return newIndicator;
  } catch (err) {
    throw err;
  }
};

const update = async (id, indicator) => {
  try {
    const updateIndicator = await IndicadorLogro.update(indicator, {
      where: { id },
    });
    contentValidator(updateIndicator);
    return updateIndicator;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const indicatorDestroy = await IndicadorLogro.destroy({ where: { id } });
    contentValidator(indicatorDestroy);
    return indicatorDestroy;
  } catch (err) {
    throw err;
  }
};

const indicatorService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = indicatorService;

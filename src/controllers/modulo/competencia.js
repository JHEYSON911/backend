const competenciaService = require("../../services/modulo/competencia.js");
const handleErrorController = require("../../utils/handleErrorController.js");
const reqValidatorContent = require("../../utils/reqValidatorContent.js");

const getAll = async (req, res) => {
  try {
    const response = await competenciaService.getAll();
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await competenciaService.getById(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const create = async (req, res) => {
  try {
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const response = await competenciaService.create(bodyData);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const response = await competenciaService.update(id, bodyData);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await competenciaService.destroy(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

//  Logica del negocio

const getIndicatorsByCompetencieId = async (req, res) => {
  try {
    const { id } = req.params;
    const search =
      await competenciaService.searchIndicadorLogroByCompetencieId(id);
    return res.status(200).json({ data: search });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

// const  = async (req, res) => {
//   try {
// return res.status(200).json({data:search})

//   } catch (err) {
//     handleErrorController(err.message, res);
//   }
// };

const competenciaController = {
  getAll,
  getById,
  create,
  update,
  destroy,
  getIndicatorsByCompetencieId,
};

module.exports = competenciaController;

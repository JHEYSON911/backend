const carreraService = require("../../services/institucion/carrera.js");
const handleErrorController = require("../../utils/handleErrorController.js");
const reqValidatorContent = require("../../utils/reqValidatorContent.js");

const getAll = async (req, res) => {
  try {
    const response = await carreraService.getAll();
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await carreraService.getById(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const create = async (req, res) => {
  try {
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const response = await carreraService.create(bodyData);
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
    const response = await carreraService.update(id, bodyData);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await carreraService.destroy(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

//  logica del negocio

const getPlansByCarreraId = async (req, res) => {
  try {
    const { id } = req.params;
    const search = await carreraService.searchPlanByCarreraId(id);
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

const carreraController = {
  getAll,
  getById,
  create,
  update,
  destroy,
  getPlansByCarreraId,
};

module.exports = carreraController;

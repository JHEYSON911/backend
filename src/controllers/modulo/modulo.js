const moduloService = require("../../services/modulo/modulo.js");
const handleErrorController = require("../../utils/handleErrorController.js");
const reqValidatorContent = require("../../utils/reqValidatorContent.js");

const getAll = async (req, res) => {
  try {
    const response = await moduloService.getAll();
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await moduloService.getById(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const create = async (req, res) => {
  try {
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const response = await moduloService.create(bodyData);
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
    const response = await moduloService.update(id, bodyData);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await moduloService.destroy(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

//  Logica dle negocio

const getCoursesByModulId = async (req, res) => {
  try {
    const { id } = req.params;
    const search = await moduloService.searchCoursesByModulId(id);
    return res.status(200).json({ data: search });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};
const getCompetenciesByModulId = async (req, res) => {
  try {
    const { id } = req.params;
    const search = await moduloService.searchCompetenciesByModulId(id);
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

const moduloController = {
  getAll,
  getById,
  create,
  update,
  destroy,
  getCoursesByModulId,
  getCompetenciesByModulId,
};

module.exports = moduloController;

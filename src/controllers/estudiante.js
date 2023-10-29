const estudianteService = require("../services/estudiante.js");
const handleErrorController = require("../utils/handleErrorController.js");
const reqValidatorContent = require("../utils/reqValidatorContent.js");

const getAll = async (req, res) => {
  try {
    const response = await estudianteService.getAll();
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await estudianteService.getById(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const create = async (req, res) => {
  try {
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const response = await estudianteService.create(bodyData);
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
    const response = await estudianteService.update(id, bodyData);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await estudianteService.destroy(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getCertificatesByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const search =
      await estudianteService.searchCertificatesByStudentCode(code);
    return res.status(200).json({ data: search });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getRequestsByCode = async (req, res) => {
  try {
    const { code } = req.params;
    const search = await estudianteService.searchRequestsByStudentCode(code);
    return res.status(200).json({ data: search });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getCalificationsByStudentCode = async (req, res) => {
  try {
    const { code } = req.params;
    const search =
      await estudianteService.searchCalificationsByEstudentCode(code);
    return res.status(200).json({ data: search });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getPlanByStudentCode = async (req, res) => {
  try {
    const { code } = req.params;
    const search = await estudianteService.searchPlanEstudioByStudentCode(code);
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
const studentController = {
  getAll,
  getById,
  create,
  update,
  destroy,
  getCertificatesByCode,
  getRequestsByCode,
  getCalificationsByStudentCode,
  getPlanByStudentCode,
};

module.exports = studentController;

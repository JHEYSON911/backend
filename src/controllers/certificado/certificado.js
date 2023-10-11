const certificadoService = require("../../services/certificado/certificado.js");
const handleErrorController = require("../utils/handleErrorController");
const reqValidatorContent = require("../utils/reqValidatorContent.js");

const getAll = async (req, res) => {
  try {
    const response = certificadoService.getAll();
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await certificadoService.getById(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const create = async (req, res) => {
  try {
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const response = await certificadoService.create(bodyData);
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
    const response = await certificadoService.update(id, bodyData);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await certificadoService.destroy(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const certificadoController = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = certificadoController;

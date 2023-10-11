const tipoCertidicadoService = require("../../services/certificado/tipo_certificado.js");
const handleErrorController = require("../../utils/handleErrorController.js");
const reqValidatorContent = require("../../utils/reqValidatorContent.js");

const getAll = async (req, res) => {
  try {
    const response = await tipoCertidicadoService.getAll();
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await tipoCertidicadoService.getById(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const create = async (req, res) => {
  try {
    const { bodyData } = req.body;
    reqValidatorContent(bodyData);
    const response = await tipoCertidicadoService.create(bodyData);
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
    const response = await tipoCertidicadoService.update(id, bodyData);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const destroy = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await tipoCertidicadoService.destroy(id);
    return res.status(200).json({ data: response });
  } catch (err) {
    handleErrorController(err.message, res);
  }
};

const tipoCertificadoController = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = tipoCertificadoController;

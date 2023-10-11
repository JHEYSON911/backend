const TipoCertificado = require("../../models/certificado/certificado.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const certificateTypes = await TipoCertificado.findAll();
    contentValidator(certificateTypes);
    return certificateTypes;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const certificateType = await TipoCertificado.findByPk(id);
    contentValidator(certificateType);
    return certificateType;
  } catch (err) {
    throw err;
  }
};

const create = async (certificateType) => {
  try {
    const newCertificateType = await TipoCertificado.create(certificateType);
    contentValidator(newCertificateType);
    return newCertificateType;
  } catch (err) {
    throw err;
  }
};

const update = async (id, certificateType) => {
  try {
    const updateCertificateType = await TipoCertificado.update(
      { certificateType },
      { where: { id } },
    );
    contentValidator(updateCertificateType);
    return updateCertificateType;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const certificateTypeDestroy = await TipoCertificado.destroy({
      where: { id },
    });
    contentValidator(certificateTypeDestroy);
    return certificateTypeDestroy;
  } catch (err) {
    throw err;
  }
};

const certificateTypeService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = certificateTypeService;

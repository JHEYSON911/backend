const Certificado = require("../../models/certificado/certificado.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const certificates = await Certificado.findAll();
    contentValidator(certificates);
    return certificates;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const certificate = await Certificado.findByPk(id);
    contentValidator(certificate);
    return certificate;
  } catch (err) {
    throw err;
  }
};

const create = async (certificate) => {
  try {
    const newCertificate = await Certificado.create(certificate);
    contentValidator(newCertificate);
    return newCertificate;
  } catch (err) {
    throw err;
  }
};

const update = async (id, certificate) => {
  try {
    const updateCertificate = await Certificado.update(certificate, {
      where: { id },
    });
    contentValidator(updateCertificate);
    return updateCertificate;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const certificateDestroy = await Certificado.destroy({ where: { id } });
    contentValidator(certificateDestroy);
    return certificateDestroy;
  } catch (err) {
    throw err;
  }
};

// const pushDocument = async (id, urlDoc) => {
//   try {
//     const pushDoc = await Certificado.update({ urlDoc }, { where: { id } });
//     contentValidator(pushDoc);
//     return pushDoc;
//   } catch (err) {
//     throw err;
//   }
// };

const certificateService = {
  getAll,
  getById,
  create,
  update,
  destroy,
  // pushDocument,
};

module.exports = certificateService;

const TipoSolicitud = require("../../models/solicitud/tipo_solicitud");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const types = await TipoSolicitud.findAll();
    contentValidator(types);
    return types;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const type = await TipoSolicitud.findByPk(id);
    contentValidator(type);
    return type;
  } catch (err) {
    throw err;
  }
};

const create = async (typeData) => {
  try {
    const newType = await TipoSolicitud.create(typeData);
    contentValidator(newType);
    return newType;
  } catch (err) {
    throw err;
  }
};

const update = async (id, typeData) => {
  try {
    const updatedType = await TipoSolicitud.update(typeData, {
      where: { id },
    });
    contentValidator(updatedType);
    return updatedType;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const deletedType = await TipoSolicitud.destroy({
      where: { id },
    });
    contentValidator(deletedType);
    return deletedType;
  } catch (err) {
    throw err;
  }
};

const TipoSolicitudService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = TipoSolicitudService;

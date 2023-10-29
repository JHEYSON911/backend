const Solicitud = require("../../models/solicitud/solicitud");
const contentValidator = require("../../utils/contentValidator");

const getAll = async () => {
  try {
    const requests = await Solicitud.findAll();
    contentValidator(requests);
    return requests;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const request = await Solicitud.findByPk(id);
    contentValidator(request);
    return request;
  } catch (err) {
    throw err;
  }
};

const create = async (requestData) => {
  try {
    const newRequest = await Solicitud.create(requestData);
    contentValidator(newRequest);
    return newRequest;
  } catch (err) {
    throw err;
  }
};

const update = async (id, requestData) => {
  try {
    const updatedRequest = await Solicitud.update(requestData, {
      where: { id },
    });
    contentValidator(updatedRequest);
    return updatedRequest;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const deletedRequest = await Solicitud.destroy({
      where: { id },
    });
    contentValidator(deletedRequest);
    return deletedRequest;
  } catch (err) {
    throw err;
  }
};

const certificateRequestService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = certificateRequestService;

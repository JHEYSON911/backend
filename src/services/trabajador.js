const Trabajador = require("../models/trabajador");
const contentValidator = require("../utils/contentValidator");

const getAll = async () => {
  try {
    const workers = await Trabajador.findAll();
    contentValidator(workers);
    return workers;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const worker = await Trabajador.findByPk(id);
    contentValidator(worker);
    return worker;
  } catch (err) {
    throw err;
  }
};

const create = async (worker) => {
  try {
    const newWorker = await Trabajador.create(worker);
    contentValidator(newWorker);
    return newWorker;
  } catch (err) {
    throw err;
  }
};

const update = async (id, worker) => {
  try {
    const updateWorker = await Trabajador.update({ worker }, { where: { id } });
    contentValidator(updateWorker);
    return updateWorker;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const workerDestroy = await Trabajador.destroy({ where: { id } });
    contentValidator(workerDestroy);
    return workerDestroy;
  } catch (err) {
    throw err;
  }
};

const workerService = {
  getAll,
  getById,
  create,
  update,
  destroy,
};

module.exports = workerService;

const Modulo = require("../../models/modulo/modulo.js");
const Curso = require("../../models/modulo/curso.js");
const Competencia = require("../../models/modulo/competencia.js");
const ModuloCurso = require("../../models/intermedio/modulo_curso.js");
const ModuloCompetencia = require("../../models/intermedio/modulo_competencia.js");
const contentValidator = require("../../utils/contentValidator.js");

const getAll = async () => {
  try {
    const moduls = await Modulo.findAll();
    contentValidator(moduls);
    return moduls;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const modul = await Modulo.findByPk(id);
    contentValidator(modul);
    return modul;
  } catch (err) {
    throw err;
  }
};

const create = async (modul) => {
  try {
    const newModul = await Modulo.create(modul);
    contentValidator(newModul);
    return newModul;
  } catch (err) {
    throw err;
  }
};

const update = async (id, modul) => {
  try {
    const updateModul = await Modulo.update(modul, { where: { id } });
    contentValidator(updateModul);
    return updateModul;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const modulDestroy = await Modulo.destroy({ where: { id } });
    contentValidator(modulDestroy);
    return modulDestroy;
  } catch (err) {
    throw err;
  }
};

const searchCoursesByModulId = async (id) => {
  try {
    const courses = await Modulo.findOne({
      where: { id },
      include: {
        model: Curso,
        through: {
          model: ModuloCurso,
        },
      },
    });
    contentValidator(courses);
    return courses;
  } catch (err) {
    throw err;
  }
};
const searchCompetenciesByModulId = async (id) => {
  try {
    const competencies = await Modulo.findOne({
      where: { id },
      include: {
        model: Competencia,
        through: {
          model: ModuloCompetencia,
        },
      },
    });
    contentValidator(competencies);
    return competencies;
  } catch (err) {
    throw err;
  }
};

// const  = async (codigo) => {
//   try {
// contentValidator(califications);
//   } catch (err) {
//     throw err;
//   }
// };

const moduleService = {
  getAll,
  getById,
  create,
  update,
  destroy,
  searchCoursesByModulId,
  searchCompetenciesByModulId,
};
module.exports = moduleService;

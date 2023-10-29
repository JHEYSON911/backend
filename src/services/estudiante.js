const Estudiante = require("../models/estudiante.js");
const Certificado = require("../models/certificado/certificado.js");
const Calificacion = require("../models/modulo/calificacion.js");
const Curso = require("../models/modulo/curso.js");
const PlanEstudiante = require("../models/intermedio/estudiante_planestudio.js");
const PlanEstudio = require("../models/plan_estudio/plan_estudio.js");
const Solicitud = require("../models/solicitud/solicitud.js");
const contentValidator = require("../utils/contentValidator");

const getAll = async () => {
  try {
    const students = await Estudiante.findAll();
    contentValidator(students);
    return students;
  } catch (err) {
    throw err;
  }
};

const getById = async (id) => {
  try {
    const student = await Estudiante.findByPk(id);
    contentValidator(student);
    return student;
  } catch (err) {
    throw err;
  }
};

const create = async (student) => {
  try {
    const newStudent = await Estudiante.create(student);
    contentValidator(newStudent);
    return newStudent;
  } catch (err) {
    throw err;
  }
};

const update = async (id, student) => {
  try {
    const updateStudent = await Estudiante.update(student, { where: { id } });
    contentValidator(updateStudent);
    return updateStudent;
  } catch (err) {
    throw err;
  }
};

const destroy = async (id) => {
  try {
    const studentDestroy = await Estudiante.destroy({ where: { id } });
    contentValidator(studentDestroy);
    return studentDestroy;
  } catch (err) {
    throw err;
  }
};
const searchStudentByUserId = async (userId) => {
  try {
    const search = await Estudiante.findOne({ where: { userId } });
    contentValidator(search);
    return search;
  } catch (err) {
    throw err;
  }
};

// Logica del negocio

const searchCertificatesByStudentCode = async (codigo) => {
  try {
    const search = await Estudiante.findOne({
      where: { codigo },
      include: { model: Certificado },
    });
    contentValidator(search);
    return search;
  } catch (err) {
    throw err;
  }
};
const searchRequestsByStudentCode = async (codigo) => {
  try {
    const requests = await Estudiante.findOne({
      where: { codigo },
      include: { model: Solicitud },
    });
    contentValidator(requests);
    return requests;
  } catch (err) {
    throw err;
  }
};

const searchCalificationsByEstudentCode = async (codigo) => {
  try {
    const califications = await Estudiante.findOne({
      where: { codigo },
      include: { model: Calificacion, include: { model: Curso } },
    });
    contentValidator(califications);
    return califications;
  } catch (err) {
    throw err;
  }
};

const searchPlanEstudioByStudentCode = async (codigo) => {
  try {
    const plan = await Estudiante.findOne({
      where: { codigo },
      include: {
        model: PlanEstudio,
        through: {
          model: PlanEstudiante,
        },
      },
    });
    contentValidator(plan);
    return plan;
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

const estudianteService = {
  getAll,
  getById,
  create,
  update,
  destroy,
  searchStudentByUserId,
  searchCertificatesByStudentCode,
  searchRequestsByStudentCode,
  searchCalificationsByEstudentCode,
  searchPlanEstudioByStudentCode,
};

module.exports = estudianteService;

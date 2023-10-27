const Institucion = require("./institucion/institucion.js");
const Carrera = require("./institucion/carrera.js");
const PlanEstudio = require("./plan_estudio/plan_estudio.js");
const PlanDeEstudios = require("./plan_estudio/plan_de_estudios.js");
const NivelFormacion = require("./plan_estudio/nivel_formacion.js");
const ProgramaDeEstudios = require("./plan_estudio/programa_de_estudios.js");
const TipoItinerario = require("./plan_estudio/tipo_itinerario.js");
const TipoModalidad = require("./plan_estudio/tipo_modalidad.js");
const TipoEnfoque = require("./plan_estudio/tipo_enfoque.js");
const Modulo = require("./modulo/modulo.js");
const Curso = require("./modulo/curso.js");
const Competencia = require("./modulo/competencia.js");
const IndicadorLogro = require("./modulo/indicador_logro.js");
const Calificacion = require("./modulo/calificacion.js");
const Estudiante = require("./estudiante.js");
const Solicitud = require("./solicitud/solicitud.js");
const TipoSolicitud = require("./solicitud/tipo_solicitud.js");
const Certificado = require("./certificado/certificado.js");
const TipoCertificado = require("./certificado/tipo_certificado.js");
const User = require("./user.js");
const Trabajador = require("./trabajador.js");

Institucion.hasMany(Carrera, {
  foreignKey: "institucionId",
  onDelete: "CASCADE",
});

Carrera.belongsTo(Institucion, {
  foreignKey: "institucionId",
  onDelete: "CASCADE",
});

Carrera.hasOne(Trabajador, {
  foreignKey: "carreraId",
  onDelete: "CASCADE",
});

Trabajador.belongsTo(Carrera, {
  foreignKey: "carreraId",
  onDelete: "CASCADE",
});

PlanDeEstudios.hasOne(PlanEstudio, {
  foreignKey: "planDeEstudiosId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsTo(PlanDeEstudios, {
  foreignKey: "planDeEstudiosId",
  onDelete: "CASCADE",
});

NivelFormacion.hasOne(PlanEstudio, {
  foreignKey: "nivelFormacionId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsTo(NivelFormacion, {
  foreignKey: "nivelFormacionId",
  onDelete: "CASCADE",
});

ProgramaDeEstudios.hasOne(PlanEstudio, {
  foreignKey: "programaDeEstudiosId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsTo(ProgramaDeEstudios, {
  foreignKey: "programaDeEstudiosId",
  onDelete: "CASCADE",
});

TipoItinerario.hasOne(PlanEstudio, {
  foreignKey: "tipoItinerarioId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsTo(TipoItinerario, {
  foreignKey: "tipoItinerarioId",
  onDelete: "CASCADE",
});

TipoModalidad.hasOne(PlanEstudio, {
  foreignKey: "tipoModalidadId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsTo(TipoModalidad, {
  foreignKey: "tipoModalidadId",
  onDelete: "CASCADE",
});

TipoEnfoque.hasOne(PlanEstudio, {
  foreignKey: "tipoEnfoqueId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsTo(TipoEnfoque, {
  foreignKey: "tipoEnfoqueId",
  onDelete: "CASCADE",
});

Curso.hasOne(Calificacion, {
  foreignKey: "cursoId",
  onDelete: "CASCADE",
});

Calificacion.belongsTo(Curso, {
  foreignKey: "cursoId",
  onDelete: "CASCADE",
});

Estudiante.hasOne(Calificacion, {
  foreignKey: "estudianteId",
  onDelete: "CASCADE",
});

Calificacion.belongsTo(Estudiante, {
  foreignKey: "estudianteId",
  onDelete: "CASCADE",
});

Estudiante.hasMany(Certificado, {
  foreignKey: "estudianteId",
  onDelete: "CASCADE",
});

Certificado.belongsTo(Estudiante, {
  foreignKey: "estudianteId",
  onDelete: "CASCADE",
});

Certificado.hasMany(TipoCertificado, {
  foreignKey: "certificadoId",
  onDelete: "CASCADE",
});

TipoCertificado.belongsTo(Certificado, {
  foreignKey: "certificadoId",
  onDelete: "CASCADE",
});

User.hasOne(Trabajador, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Trabajador.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

User.hasOne(Estudiante, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Estudiante.belongsTo(User, {
  foreignKey: "userId",
  onDelete: "CASCADE",
});

Estudiante.hasMany(Solicitud, {
  foreignKey: "estudianteId",
  onDelete: "CASCADE",
});

Solicitud.belongsTo(Estudiante, {
  foreignKey: "estudianteId",
  onDelete: "CASCADE",
});

TipoSolicitud.hasOne(Solicitud, {
  foreignKey: "tipoSolicitudId",
  onDelete: "CASCADE",
});

Solicitud.belongsTo(TipoSolicitud, {
  foreignKey: "tipoSolicitudId",
  onDelete: "CASCADE",
});

Estudiante.belongsToMany(PlanEstudio, {
  through: "estudiante_plan_estudio",
  foreignKey: "estudianteId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsToMany(Estudiante, {
  through: "estudiante_plan_estudio",
  foreignKey: "planEstudioId",
  onDelete: "CASCADE",
});

Carrera.belongsToMany(PlanEstudio, {
  through: "carrera_plan_estudio",
  foreignKey: "carreraId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsToMany(Carrera, {
  through: "carrera_plan_estudio",
  foreignKey: "planEstudioId",
  onDelete: "CASCADE",
});

PlanEstudio.belongsToMany(Modulo, {
  through: "plan_estudio_modulo",
  foreignKey: "planEstudioId",
  onDelete: "CASCADE",
});

Modulo.belongsToMany(PlanEstudio, {
  through: "plan_estudio_modulo",
  foreignKey: "moduloId",
  onDelete: "CASCADE",
});

Modulo.belongsToMany(Competencia, {
  through: "modulo_competencia",
  foreignKey: "moduloId",
  onDelete: "CASCADE",
});

Competencia.belongsToMany(Modulo, {
  through: "modulo_competencia",
  foreignKey: "competenciaId",
  onDelete: "CASCADE",
});

Competencia.belongsToMany(IndicadorLogro, {
  through: "competencia_indicador_logro",
  foreignKey: "competenciaId",
  onDelete: "CASCADE",
});

IndicadorLogro.belongsToMany(Competencia, {
  through: "competencia_indicador_logro",
  foreignKey: "indicadorId",
  onDelete: "CASCADE",
});

Modulo.belongsToMany(Curso, {
  through: "modulo_curso",
  foreignKey: "moduloId",
  onDelete: "CASCADE",
});

Curso.belongsToMany(Modulo, {
  through: "modulo_curso",
  foreignKey: "cursoId",
  onDelete: "CASCADE",
});

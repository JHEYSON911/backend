const Institucion = require("./institucion/institucion");
const Carrera = require("./institucion/carrera");
const User = require("./user");
const Trabajador = require("./trabajador");
const Estudiante = require("./estudiante");
const Certificado = require("./certificado/certificado");
const TipoCertificado = require("./certificado/tipo_certificado");
const CarreraPlanEstudio = require("./intermedio/carrera_planestudio");
const CompetenciaIndicador = require("./intermedio/competencia_indicador_logro");
const EstudiantePlanEstudio = require("./intermedio/estudiante_planestudio");
const ModuloCompetencia = require("./intermedio/modulo_competencia");
const ModuloCurso = require("./intermedio/modulo_curso");
const PlanModulo = require("./intermedio/plan_estudio_modulo");
const Competencia = require("./modulo/competencia");
const Curso = require("./modulo/curso");
const IndicadorLogro = require("./modulo/indicador_logro");
const Modulo = require("./modulo/modulo");
const NivelFormacion = require("./plan_estudio/nivel_formacion");
const PlanDeEstudios = require("./plan_estudio/plan_de_estudios");
const PlanEstudio = require("./plan_estudio/plan_estudio");
const ProgramaDeEstudios = require("./plan_estudio/programa_de_estudios");
const TipoEnfoque = require("./plan_estudio/tipo_enfoque");
const TipoItinerario = require("./plan_estudio/tipo_itinerario");
const TipoModalidad = require("./plan_estudio/tipo_modalidad");
const Solicitud = require("./solicitud/solicitud");
const TipoSolicitud = require("./solicitud/tipo_solicitud");
const Calificacion = require("./modulo/calificacion");
const db = require("../database/connection");

const generarData = async () => {
  const t = await db.transaction();
  try {
    //  Creacion de Data falsa Para el Modelo Institucion

    await Institucion.create({ nombre: "Universidada Peruana Union" });
    await Institucion.create({ nombre: "Universidada Alas Peruanas" });

    //  Creacion de Data falsa el modelo Carrera

    await Carrera.create({
      nombre: "Ingenieria de Sistemas",
    });
    await Carrera.create({
      nombre: "Ingenieria Ambiental",
    });
    await Carrera.create({
      nombre: "Ingenieria Psicologia",
    });
    await Carrera.create({
      nombre: "Ingenieria Enfermeria",
    });

    //  Creacion de Data falsa para el modelo User

    await User.create({
      username: "jheyson.vilca",
      password: "",
      email: "jheyson.vilca@upeu.edu.pe",
      rol: "estudiante",
    });
    await User.create({
      username: "jhon.sucasaire",
      password: "",
      email: "jhon.sucasaire@upeu.edu.pe",
      rol: "estudiante",
    });
    await User.create({
      username: "diego.burgos",
      password: "",
      email: "diego.burgos@upeu.edu.pe",
      rol: "admin",
    });
    await User.create({
      username: "max.avalos",
      password: "",
      email: "max.avalos@upeu.edu.pe",
      rol: "empleado",
    });
    await User.create({
      username: "fabrizio.chany",
      password: "",
      email: "jheyson.vilca@upeu.edu.pe",
      rol: "empleado",
    });

    //  Creacion de Data falsa para el modelo Trabajador

    await Trabajador.create({
      cargo: "secretaria",
    });
    await Trabajador.create({
      cargo: "coordinador",
    });

    //  Creacion de Data falsa para el modelo Estudiante

    await Estudiante.create({
      nombres: "Jheyson Wili",
      apellidos: "Vilca Mamani",
      codigo: "202012378",
      urlFoto:
        "https://staticg.sportskeeda.com/editor/2023/05/e7f92-16855044906251-1920.jpg",
    });
    await Estudiante.create({
      nombres: "Diego Armando",
      apellidos: "Burgos Pari",
      codigo: "202015368",
      urlFoto:
        "https://staticg.sportskeeda.com/editor/2023/05/e7f92-16855044906251-1920.jpg",
    });
    await Estudiante.create({
      nombres: "Jhon Erick",
      apellidos: "Sucasaire Mamani",
      codigo: "202015988",
      urlFoto:
        "https://staticg.sportskeeda.com/editor/2023/05/e7f92-16855044906251-1920.jpg",
    });
    await Estudiante.create({
      nombres: "Max Alexander",
      apellidos: "Avalos Humpiri",
      codigo: "202039876",
      urlFoto:
        "https://staticg.sportskeeda.com/editor/2023/05/e7f92-16855044906251-1920.jpg",
    });
    await Estudiante.create({
      nombres: "Fabrizio Nilocay",
      apellidos: "Chany Vargas",
      codigo: "202068976",
      urlFoto:
        "https://staticg.sportskeeda.com/editor/2023/05/e7f92-16855044906251-1920.jpg",
    });

    //  Creacion de Data falsa para el modelo TipoCertificado

    await TipoCertificado.create({
      nombre: "Titulo",
    });
    await TipoCertificado.create({
      nombre: "Modular",
    });
    await TipoCertificado.create({
      nombre: "Bachiller",
    });
    await TipoCertificado.create({
      nombre: "Tecnico",
    });

    //  Creacion de Data falsa para el modelo Certificado

    await Certificado.create({
      codigoRegistro: "1212569",
      observaciones: "Todas las observaciones",
      fechaEmision: "24/10/2023",
      urlDocumento: "",
      estado: "",
    });
    await Certificado.create({
      codigoRegistro: "1212570",
      observaciones: "Ninguna observacion",
      fechaEmision: "24/10/2023",
      urlDocumento: "",
      estado: "",
    });

    //  Creacion de Data falsa Para el modelo TipoSolicitud

    await TipoSolicitud.create({
      nombre: "Certificado",
    });
    await TipoSolicitud.create({
      nombre: "Titulo",
    });
    await TipoSolicitud.create({
      nombre: "Bachiller",
    });
    await TipoSolicitud.create({
      nombre: "Tecnico",
    });

    //  Creacion de Data falsa Para el modelo Solicitud

    await Solicitud.create({
      asunto: "Asunto1:......",
    });
    await Solicitud.create({
      asunto: "Asunto2:......",
    });
    await Solicitud.create({
      asunto: "Asunto3:......",
    });

    //  Creacion de Data falsa para el modelo NivelFormacion

    await NivelFormacion.create({
      nombre: "Carrera Profesional",
    });
    await NivelFormacion.create({
      nombre: "Profesional Técnico",
    });

    //  Creacion de Data falsa para el modelo PlanDeEstudios

    await PlanDeEstudios.create({
      nombre: "2022",
    });
    await PlanDeEstudios.create({
      nombre: "2023",
    });

    //  Creacion de Data falsa para el modelo Programa de Estudios

    await ProgramaDeEstudios.create({
      nombre: "Ingenieria de Sistemas",
    });
    await ProgramaDeEstudios.create({
      nombre: "Enfermeria Tecnica",
    });

    //  Creacion de Data falsa para el modelo TipoEnfoque

    await TipoEnfoque.create({
      nombre: "Presencial",
    });
    await TipoEnfoque.create({
      nombre: "Virtual",
    });
    await TipoEnfoque.create({
      nombre: "Semi-Presencial",
    });

    //  Creacion de Data falsa para el modelo TipoItinerario

    await TipoItinerario.create({
      nombre: "Modular",
    });

    //  Creacion de Data falsa para el modelo TipoModalidad

    await TipoModalidad.create({
      nombre: "Presencial",
    });
    await TipoModalidad.create({
      nombre: "Virtual",
    });
    await TipoModalidad.create({
      nombre: "Semi-Presencial",
    });

    //  Creacion de Data falsa para el modelo PlanEstudio

    await PlanEstudio.create({
      fechaInicio: "10-03-2020",
      fechaFin: "11-03-2025",
      horasTotales: "1200",
      creditosTotales: "500",
    });
    await PlanEstudio.create({
      fechaInicio: "10-03-2021",
      fechaFin: "11-03-2026",
      horasTotales: "1260",
      creditosTotales: "580",
    });

    //  Creacion de Data falsa para el modelo Modulo

    await Modulo.create({
      nombre: "Modulo 1",
    });
    await Modulo.create({
      nombre: "Modulo 2",
    });
    await Modulo.create({
      nombre: "Modulo 3",
    });
    await Modulo.create({
      nombre: "Modulo 4",
    });

    //  Creacion de Data falsa para el modelo Curso

    await Curso.create({
      nombre: "Programacion Orientada a Objetos",
    });
    await Curso.create({
      nombre: "Microservicios",
    });
    await Curso.create({
      nombre: "Inyeccion :v",
    });
    await Curso.create({
      nombre: "Cuidado del Paciente",
    });

    //  Creacion de Data falsa para el modelo Competencia

    await Competencia.create({
      nombre: "Competencia 1",
    });
    await Competencia.create({
      nombre: "Competencia 2",
    });
    await Competencia.create({
      nombre: "Competencia 3",
    });
    await Competencia.create({
      nombre: "Competencia 4",
    });

    //  Creacion de Data falsa para el modelo IndicadorLogro

    await IndicadorLogro.create({
      nombre: "Indicador 1",
    });
    await IndicadorLogro.create({
      nombre: "Indicador 2",
    });
    await IndicadorLogro.create({
      nombre: "Indicador 3",
    });
    await IndicadorLogro.create({
      nombre: "Indicador 4",
    });

    //  Creacion de Data falsa para el modelo CarreraPlanEstudio

    await CarreraPlanEstudio.create({
      planEstudioId: 1,
      carreraId: 1,
    });
    await CarreraPlanEstudio.create({
      planEstudioId: 1,
      carreraId: 2,
    });
    await CarreraPlanEstudio.create({
      planEstudioId: 2,
      carreraId: 3,
    });
    await CarreraPlanEstudio.create({
      planEstudioId: 2,
      carreraId: 4,
    });

    //  Creacion de Data falsa para el modelo EstudiantePlanEstudio

    await EstudiantePlanEstudio.create({
      estudianteId: 3,
      planEstudioId: 1,
    });
    await EstudiantePlanEstudio.create({
      estudianteId: 2,
      planEstudioId: 2,
    });

    //  Creacion de Data falsa para el modelo PlanModulo

    await PlanModulo.create({
      planEstudioId: 1,
      moduloId: 1,
    });
    await PlanModulo.create({
      planEstudioId: 1,
      moduloId: 2,
    });
    await PlanModulo.create({
      planEstudioId: 2,
      moduloId: 3,
    });
    await PlanModulo.create({
      planEstudioId: 1,
      moduloId: 4,
    });

    //  Creacion de Data falsa para el modelo ModuloCompetencia

    await ModuloCompetencia.create({
      moduloId: 1,
      competenciaId: 1,
    });
    await ModuloCompetencia.create({
      moduloId: 1,
      competenciaId: 2,
    });
    await ModuloCompetencia.create({
      moduloId: 2,
      competenciaId: 3,
    });
    await ModuloCompetencia.create({
      moduloId: 2,
      competenciaId: 4,
    });

    //  Creacion de Data falsa para el modelo ModuloCurso

    await ModuloCurso.create({
      moduloId: 1,
      cursoId: 1,
    });
    await ModuloCurso.create({
      moduloId: 1,
      cursoId: 2,
    });
    await ModuloCurso.create({
      moduloId: 2,
      cursoId: 3,
    });
    await ModuloCurso.create({
      moduloId: 1,
      cursoId: 4,
    });
    //  Creacion de Data falsa para el modelo Competencia Indicador

    await CompetenciaIndicador.create({
      competenciaId: 1,
      indicadorId: 1,
    });
    await CompetenciaIndicador.create({
      competenciaId: 1,
      indicadorId: 2,
    });
    await CompetenciaIndicador.create({
      competenciaId: 2,
      indicadorId: 3,
    });
    await CompetenciaIndicador.create({
      competenciaId: 2,
      indicadorId: 4,
    });

    //  Creacion de Data falsa para el modelo Calificacion

    await Calificacion.create({
      nota: "20",
    });
    await Calificacion.create(
      {
        nota: "10",
      },
      {
        transaction: t,
      },
    );
    await t.commit();
  } catch (err) {
    console.log(`Ocurrio un error al generar los datos ${err.message}`);
    await t.rollback();
  }
};

module.exports = generarData;

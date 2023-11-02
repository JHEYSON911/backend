const express = require("express");
const cors = require("cors");

//  Importando las rutas
const userRoutes = require("./routes/user");
const estudianteRoutes = require("./routes/estudiante");
const trabajadorRoutes = require("./routes/trabajador");
const certificadoRoutes = require("./routes/certificado/certificado");
const tipoCertificadoRoutes = require("./routes/certificado/tipo_certificado");
const carreraRoutes = require("./routes/institucion/carrera");
const institucionRoutes = require("./routes/institucion/institucion");
const calificacionRoutes = require("./routes/modulo/calificacion");
const competenciaRoutes = require("./routes/modulo/competencia");
const cursoRoutes = require("./routes/modulo/curso");
const indicadorLogroRoutes = require("./routes/modulo/indicador_logro");
const moduloRoutes = require("./routes/modulo/modulo");
const nivelFormacionRoutes = require("./routes/plan_estudio/nivel_formacion");
const planDeEstudiosRoutes = require("./routes/plan_estudio/plan_de_estudios");
const planEstudioRoutes = require("./routes/plan_estudio/plan_estudio");
const programaDeEstudiosRoutes = require("./routes/plan_estudio/programa_de_estudios");
const tipoEnfoqueRoutes = require("./routes/plan_estudio/tipo_enfoque");
const tipoItinerarioRoutes = require("./routes/plan_estudio/tipo_itinerario");
const tipoModalidadRoutes = require("./routes/plan_estudio/tipo_modalidad");
const solicitudRoutes = require("./routes/solicitud/solicitud");
const tipoSolicitudRoutes = require("./routes/solicitud/tipo_solicitud");

//  Importando las rutas de la logica del Negocio
const authRoutes = require("./routes/auth.js");

const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.use("/api/v1/usuario", userRoutes);
app.use("/api/v1/estudiante", estudianteRoutes);
app.use("/api/v1/trabajador", trabajadorRoutes);
app.use("/api/v1/certificado", certificadoRoutes);
app.use("/api/v1/tipo-certificado", tipoCertificadoRoutes);
app.use("/api/v1/carrera", carreraRoutes);
app.use("/api/v1/institucion", institucionRoutes);
app.use("/api/v1/calificacion", calificacionRoutes);
app.use("/api/v1/competencia", competenciaRoutes);
app.use("/api/v1/curso", cursoRoutes);
app.use("/api/v1/indicador-logro", indicadorLogroRoutes);
app.use("/api/v1/modulo", moduloRoutes);
app.use("/api/v1/nivel-formacion", nivelFormacionRoutes);
app.use("/api/v1/plan-de-estudio", planDeEstudiosRoutes);
app.use("/api/v1/plan-estudio", planEstudioRoutes);
app.use("/api/v1/programa-de-estudio", programaDeEstudiosRoutes);
app.use("/api/v1/tipo-enfoque", tipoEnfoqueRoutes);
app.use("/api/v1/tipo-itinerario", tipoItinerarioRoutes);
app.use("/api/v1/tipo-modalidad", tipoModalidadRoutes);
app.use("/api/v1/solicitud", solicitudRoutes);
app.use("/api/v1/tipo-solicitud", tipoSolicitudRoutes);

// Rutas del Negocio

app.use("/api/v1/auth", authRoutes);

module.exports = app;

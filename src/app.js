const express = require("express");

//  Importando las rutas
const userRoutes = require("./routes/user.js");
const estudianteRoutes = require("./routes/estudiante.js");
const trabajadorRoutes = require("./routes/trabajador.js");
const certificadoRoutes = require("./routes/certificado/certificado.js");
const tipoCertificadoRoutes = require("./routes/certificado/tipo_certificado.js");
const carreraRoutes = require("./routes/institucion/carrera.js");
const institucionRoutes = require("./routes/institucion/institucion.js");
const calificacionRoutes = require("./routes/modulo/calificacion.js");
const competenciaRoutes = require("./routes/modulo/competencia.js");
const cursoRoutes = require("./routes/modulo/curso.js");
const indicadorLogroRoutes = require("./routes/modulo/indicador_logro.js");
const moduloRoutes = require("./routes/modulo/modulo.js");
const nivelFormacionRoutes = require("./routes/plan_estudio/nivel_formacion.js");
const planDeEstudiosRoutes = require("./routes/plan_estudio/plan_de_estudios.js");
const planEstudioRoutes = require("./routes/plan_estudio/plan_estudio.js");
const programaDeEstudiosRoutes = require("./routes/plan_estudio/programa_de_estudios.js");
const tipoEnfoqueRoutes = require("./routes/plan_estudio/tipo_enfoque.js");
const tipoItinerarioRoutes = require("./routes/plan_estudio/tipo_itinerario.js");
const tipoModalidadRoutes = require("./routes/plan_estudio/tipo_modalidad.js");

//  Importando las rutas de la logica del Negocio
const authRoutes = require("./routes/auth.js");

const app = express();

app.use(express.json());

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

// Rutas del Negocio

app.use("/api/v1/auth", authRoutes);

module.exports = app;

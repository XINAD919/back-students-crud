import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { conectarDB } from "./db/db";
import { studentModel } from "./models/Student/student";

const app = express();

const port = process.env.PORT || 4000;

dotenv.config({
  path: "./.env",
});

app.use(express.json());
app.use(cors());

app.listen({ port: port }, async () => {
  console.log("Server is running on port", process.env.PORT);
  await conectarDB();

  // CREAR
  // const crearEstudiante = await studentModel
  //   .create({
  //     nombre: "paola Castaño",
  //     identificacion: "43582493",
  //     correo: "pc.barrera@hotmail.com",
  //     tel: 32456789,
  //   })
  //   .then((u) => {
  //     console.log("estudiante creado", u);
  //   })
  //   .catch((err) => {
  //     console.error("error al crear estudiante", err);
  //   });

  // CONSULTAR TODOS
  // const consultarEstudiantes = await studentModel
  //   .find()
  //   .then((u) => {
  //     console.log("usuarios", u);
  //   })
  //   .catch((e) => {
  //     console.error("error encontrando estudiantes", e);
  //   });

  // CONSULTAR POR ID
  // const consultarEstudiante = await studentModel
  //   .findOne({ correo: "da_919@hotmail.com" })
  //   .then((u) => {
  //     console.log("estudiante encontrado", u);
  //   })
  //   .catch((e) => {
  //     console.error("error encontrando estudiante", e);
  //   });

  // ACTUALIZAR
  // const actualizarEstudiante = await studentModel
  //   .findOneAndUpdate(
  //     { correo: "da_919@hotmail.com" },
  //     { nombre: "Daniel Castaño Barrera" },
  //     {
  //       new: true,
  //     }
  //   )
  //   .then((u) => {
  //     console.log("estudiante actualizado", u);
  //   })
  //   .catch((e) => {
  //     console.error("error actualizando estudiante", e);
  //   });

  // ELIMINAR
  // const eliminarEstudiante = await studentModel
  //   .findOneAndDelete({ correo: "xinad919@gmail.com" })
  //   .then((u) => {
  //     console.log("estudiante eliminado con exito", u);
  //   })
  //   .catch((e) => {
  //     console.error("error eliminando estudiante", e);
  //   });

});

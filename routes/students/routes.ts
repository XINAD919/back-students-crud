import express from "express";
import mongoose from "mongoose";
import { studentModel } from "../../models/Student/student";

const studentRoutes = express.Router();

const genericCallback = (res) => (err, data) => {
  if (err) {
    console.log("error", err);
    res.status(500).json({ error: err });
  } else {
    res.status(200).json(data);
  }
};

// CREAR ESTUDIANTE
studentRoutes.route("/new-student").post(async (req, res, next) => {
  studentModel.create(req.body, genericCallback(res));
});

// OBTENER TODOS LOS ESTUDIANTES
studentRoutes.route("/").get(async (req, res) => {
  studentModel.find(genericCallback(res));
});

// OBTENER UN ESTUDIANTE POR ID
studentRoutes.route("/student/:id/edit").get(async (req, res) => {
  studentModel.findById(req.params.id, genericCallback(res));
});

// ACTUALIZAR ESTUDIANTE
studentRoutes.route("/student/:id/update").patch(async (req, res, next) => {
  studentModel.findByIdAndUpdate(req.params.id, req.body, genericCallback(res));
});

// ELIMINAR ESTUDIANTE
studentRoutes.route("/student/:id/delete").delete(async (req, res, next) => {
  studentModel.findByIdAndDelete(req.params.id, genericCallback(res));
});

export default studentRoutes;
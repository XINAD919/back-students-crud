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
studentRoutes.route("/new-student").post((req, res, next) => {
  studentModel.create(req.body, genericCallback(res));
});

// OBTENER TODOS LOS ESTUDIANTES
studentRoutes.route("/").get((req, res) => {
  studentModel.find(genericCallback(res));
});

// OBTENER UN ESTUDIANTE POR ID
studentRoutes.route("/student/:_id/edit").get((req, res) => {
  studentModel.findById(req.params._id, genericCallback(res));
});

// ACTUALIZAR ESTUDIANTE
studentRoutes.route("/student/:_id/update").patch((req, res, next) => {
  studentModel.findByIdAndUpdate(req.params._id, req.body,{new:true}, genericCallback(res));
});

// ELIMINAR ESTUDIANTE
studentRoutes.route("/student/:_id/delete").delete((req, res, next) => {
  studentModel.findByIdAndDelete(req.params._id, genericCallback(res));
});

export default studentRoutes;

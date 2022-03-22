import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { conectarDB } from "./db/db";

const app = express();

const port = process.env.PORT || 4000;

dotenv.config({
  path: "./.env",
});

app.use(express.json());
app.use(cors());

app.listen({ port: port }, async() => {
  console.log("Server is running on port", process.env.PORT);
  await conectarDB();
});
 
import Express from "express";
import dotenv from "dotenv";

const app = Express();

dotenv.config({
  path: "./.env",
});

const port = process.env.PORT || 4000;

app.use(Express.json());

app.listen({ port: port }, () => {
  console.log("Server is running on port", process.env.PORT);
});

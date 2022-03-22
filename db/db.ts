import dotenv from "dotenv";
import { connect } from "mongoose";

dotenv.config({
  path: "./.env",
});

const stringconn = process.env.DB;

const conectarDB = async () => {
  await connect(stringconn)
    .then(() => {
      console.log("Base de datos ONLINE");
    })
    .catch((err) => {
      console.log("ERROR conectando a la Base de datos ", err);
    });
};

export { conectarDB };

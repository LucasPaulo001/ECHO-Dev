import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { DBConnection } from "./settings/db/dbConnection";
import router from "./routes/routes";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

const PORT = process.env.PORT;

DBConnection().then(() => {
  app.listen(PORT, () => {
    console.log(`Conectado ao servidor na porta: ${PORT}`);
  });
});

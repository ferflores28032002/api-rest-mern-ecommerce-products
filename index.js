import express from "express";
import cors from "cors";
import { PUERTO } from "./env/configEnv.js";
import productosRouter from "./routes/productos.js";
import shoesRouter from "./routes/shoes.js";
import stripeRouter from "./routes/stripe.js";

// Importamos la conexion a mongodb
import "./databases/conexion.js";

const app = express();

app.use(express.urlencoded({ limit: "50mb", extended: true }));
app.use(express.json({ limit: "50mb" }));
app.use(cors());

// RUTAS QUE UNEN A LOS CONTROLADORES Y LOS MODELOS
app.use(productosRouter);
app.use(shoesRouter);
app.use(stripeRouter);

app.listen(PUERTO, () =>
  console.log("Servidor ejecutandose en el puerto -> " + PUERTO)
);

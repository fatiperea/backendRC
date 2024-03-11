import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";
import path from "path";
import { fileURLToPath } from "url";
import productosRouter from "./src/routes/productos.routes.js";
import "./src/database/database.js"

const app = express();

app.set("puerto", process.env.PORT || 4000);
app.listen(app.get("puerto"), () => {
  console.log("puerto", app.get("puerto"));
});

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
//console.log(__filename);
//console.log(path.join(__dirname, "/public"));

app.use(express.static(path.join(__dirname, "/public")));

/*app.get("/nuevo", (req, res) => {
  console.log("solicitud get");
  res.send("ok");
});*/

app.use("/api", productosRouter)

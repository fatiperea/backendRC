import { Router } from "express";
import { crearProducto, listarProductos } from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").get(listarProductos).post(crearProducto);

//router.route("/productos/:id").get(listarProductos)

export default router;

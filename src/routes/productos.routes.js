import { Router } from "express";
import {
  crearProducto,
  listarProductos,
  obtenerProductos,
  editarProductos,
  borrarProductos,
} from "../controllers/productos.controllers.js";

const router = Router();

router.route("/productos").get(listarProductos).post(crearProducto);

router
  .route("/productos/:id")
  .get(obtenerProductos)
  .put(editarProductos)
  .delete(borrarProductos);

export default router;

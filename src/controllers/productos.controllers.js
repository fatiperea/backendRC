import Producto from "../database/models/producto.js";

export const listarProductos = async (req, res) => {
  try {
    const productos = await Producto.find();
    res.status(200).json(productos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "error al buscar prod." });
  }
};

//export const crearProducto =async(req,res)=>{}

export const crearProducto = async (req, res) => {
  try {
    console.log(req);
    console.log(req.body);
    res.status(201).json({ mensaje: "Producto creado" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "El producto no pudo ser creado" });
  }
};

export const obtenerProductos = async (req, res) => {
  try {
    const produbuscado = await Producto.find(req.params.id);
    if (!produbuscado) {
      return res.status(404).json({ mensaje: "El producto no existe" });
    }
    res.status(200).json(produbuscado);
  } catch (error) {
    console.log(error);
    res.status(400).json({ mensaje: "El producto no pudo ser encontrado" });
  }
};

export const editarProductos = async (req, res) => {
  try {

    const produbuscado = await Producto.find(req.params.id);
    if (!produbuscado) {
      return res.status(404).json({ mensaje: "El producto no fue encontrado" });
    }
    await Producto.findByIdAndUpdate(req.params.id, req.body)
    res.status(200).json({mensaje:"producto editado"})  
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "ocurrio un error, no fue posible editar" });
  }

}

export const borrarProductos = async (req, res) => {
  try {

    const produbuscado = await Producto.find(req.params.id);
    if (!produbuscado) {
      return res.status(404).json({ mensaje: "El producto no se pudo borrar" });
    }
    await Producto.findByIdAndDelete(req.params.id)
    res.status(200).json({mensaje:"producto borrado"})  
  } catch (error) {
    console.log(error);
    res.status(500).json({ mensaje: "ocurrio un error, no fue posible borrar" });
  }

}
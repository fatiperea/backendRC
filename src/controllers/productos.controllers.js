import Producto from "../database/models/producto.js";


export const listarProductos = (req, res) => {
  res.send("enviando lista de prod");
};

export const crearProducto= async(req,res)=>{
try {
  console.log(req)
  console.log(req.body)
  res.status(201).json({mensaje:'Producto creado'})
} catch (error) {
  console.log(error)
  res.status(400).json({mensaje:'El producto no pudo ser creado'})

}
}
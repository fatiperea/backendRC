import mongoose, { Schema } from "mongoose";

const produSchema = new Schema({
  nombreProducto: {
    type: String,
    required: true,
    minLength: 2,
    maxLength: 50,
    unique: true,
  },
  precio: {
    type: Number,
    required: true,
    min: 50,
    max: 10000,
  },
  /*imagen: {
    type: String,
    required,
    validate: (valor) => {
      return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/.test(valor);
    },
    message: (dato) => `${dato.value} no es una URL de imagen valida`,
  },*/
  imagen: {
    type: String,
    required: true,
    validate: {
      validator: (valor) => {
        const pattern = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|jpeg|gif|png)/;
        return pattern.test(valor);
      },
      message: (dato) => `${dato.value} no es una URL de imágen válida.`,
    },
  },
  categoria: {
    type: String,
    required: true,
    enum: ["Infusiones", "Batidos", "Dulce", "Salado"],
  },
  descripcion_breve: {
    type: String,
    required: true,
    minLength: 5,
    maxLength: 50,
  },
  descripcion_amplia: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 150,
  },
});

const Producto = mongoose.model("producto", produSchema);

export default Producto;

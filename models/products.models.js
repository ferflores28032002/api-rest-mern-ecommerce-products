import { Schema, model } from "mongoose";

const products = new Schema({
  name: {
    type: String,
  },
  description: {
    type: String,
  },
  category: {
    type: String,
  },
  price: {
    type: String,
  },
  image_id: {
    type: String,
  },
  image_logo: {
    type: String,
  },
  imagenes: {
    type: [],
  },
});

export const productosModel = model("productos", products);

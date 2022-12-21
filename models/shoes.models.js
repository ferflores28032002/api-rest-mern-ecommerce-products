import { Schema, model } from "mongoose";

const shoes = new Schema({
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

export const shoesModel = model("shoes", shoes);

import dotenv from "dotenv";

dotenv.config({ path: "./env/.env" });

export const PUERTO = process.env.PORT;
export const RUTA_MONGOOSE = process.env.RUTA;


// Configuraciones de cloudinary

export const cloud_name = process.env.CLOUD_NAME;
export const api_key = process.env.API_KEY;
export const api_secrect = process.env.API_SECRECT;

// configuracion para stripe 
export const api_key_stripe = process.env.API_KEY_STRIPE
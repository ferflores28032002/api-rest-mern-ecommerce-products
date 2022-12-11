import { Router } from "express";
import { addImagenes, addImagenProducts, loadProductos } from "../controllers/products.controllers.js";


const router = Router();

router.get("/products", loadProductos);
router.post("/products", addImagenes);
router.post("/products/:id", addImagenProducts);


export default router;

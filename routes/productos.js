import { Router } from "express";
import { addImagenes, addImagenProducts, loadProductos, loadProductsForId } from "../controllers/products.controllers.js";


const router = Router();

router.get("/products", loadProductos);
router.post("/products", addImagenes);
router.post("/products/:id", addImagenProducts);
router.get("/products/:id", loadProductsForId);


export default router;

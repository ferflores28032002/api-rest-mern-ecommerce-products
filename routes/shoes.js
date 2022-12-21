import { Router } from "express";
import { addImagenes, addImagenProducts, loadProductos, loadProductsForId } from "../controllers/shoes.controllers";


const router = Router();

router.get("/products/shoes", loadProductos);
router.post("/products/shoes", addImagenes);
router.post("/products/shoes/:id", addImagenProducts);
router.get("/products/shoes/:id", loadProductsForId);


export default router;

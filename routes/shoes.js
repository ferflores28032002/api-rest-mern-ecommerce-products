import { Router } from "express";
import { addImagenes, addImagenProducts, loadProductos, loadProductsForId } from "../controllers/shoes.controllers.js";


const router = Router();

router.get("/shoes", loadProductos);
router.post("/shoes", addImagenes);
router.post("/shoes/:id", addImagenProducts);
router.get("/shoes/:id", loadProductsForId);


export default router;

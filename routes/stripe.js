
import { Router } from "express";
import { paymentStripe } from "../controllers/stripe.controllers.js";

const router = Router()


router.post('/create-checkout-session', paymentStripe );


export default router;
  
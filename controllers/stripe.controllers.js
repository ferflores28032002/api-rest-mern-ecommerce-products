import Stripe from "stripe";
import { api_key_stripe } from "../env/configEnv.js";

const stripe = Stripe(api_key_stripe);

export const paymentStripe = async (req, res) => {
  const { cart } = req.body;

  try {
    const line_items = cart.map((producto) => {
      return {
        price_data: {
          currency: "usd",
          product_data: {
            name: producto.name,
            images: [producto.image_logo],
            description: producto.description,
            metadata: {
              id: producto._id,
            },
          },
          unit_amount: producto.price,
        },
        quantity: producto.cantidad * 100,
      };
    });

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: process.env.RUTA_DIRECCION,
      cancel_url: process.env.RUTA_DIRECCION,
    });
    res.json({ URL: session.url });
    
  } catch (error) {
    console.log(error);
  }
};

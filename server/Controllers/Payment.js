import Stripe from "stripe";


import dotenv from "dotenv";
dotenv.config();
const stripe = new Stripe(process.env.STRIPE_SECRETKEY);
export const paymentconfig = async (req,res) => {
    res.send({publishablekey: process.env.STRIPE_PUBLISHABLEKEY})
}
export const paymentintent = async (req,res) => {
    try {
    const paymentIntent = await stripe.paymentIntents.create({
        currency:"usd",
        amount:1999,
        automatic_payment_methods: {
            enabled:true
        }
    });
    res.send({clientSecret: paymentIntent.client_secret})
    } catch(error) {
        return res.status(400).send({
            error: error.message
        })
    }
}

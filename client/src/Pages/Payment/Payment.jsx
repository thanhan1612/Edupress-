import React, { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import Elements from "@stripe/react-stripe-js"

const Payment = () => {
    const [stripePromise,setStripePromise] = useState(null);
    const [clientSecret,setclientSecret] = useState("");
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/payment/config`).then( async(r) =>{
            const {publishablekey} = await r.json();
            setStripePromise(loadStripe(publishablekey));
        })
        
    },[stripePromise]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/payment/create-payment-intent`, {
            method:"POST",
            body: JSON.stringify({})
        }).then( async(r) =>{
            const {clientSecret} = await r.json();
            setclientSecret(loadStripe(clientSecret));
            
        })
        
    },[clientSecret]);
    return (
        <div>
            Payment Stripe
            {stripePromise && clientSecret && (
            <Elements stripe = {stripePromise} options = {{clientSecret}}>
             <CheckoutForm />
            </Elements>)}
            
        </div>
    )
};
export default Payment;
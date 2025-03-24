import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import {Elements} from "@stripe/react-stripe-js";
import { Container, Typography, Box } from "@mui/material";
import Divider from '@mui/material/Divider';
const Payment = () => {
    const [stripePromise,setStripePromise] = useState(null);
    const [clientSecret,setclientSecret] = useState("");
    const location = useLocation();
    const course = location.state?.course;
   
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/payment/config`).then( async(r) =>{
            const {publishablekey} = await r.json();
            setStripePromise(loadStripe(publishablekey));
        })
        
    },[]);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/payment/create-payment-intent`, {
            method:"POST",
            body: JSON.stringify({})
        }).then( async(r) =>{
            const {clientSecret} = await r.json();
            setclientSecret(clientSecret);
            console.log(clientSecret)
        })
        
    },[]);
    return (
        <Container className = "flex flex-row gap-[20px] bg-white mt-[50px] p-[20px] rounded-md ">
            <Box className="w-1/2">
                <Typography variant = 'h2'>Payment</Typography>
                {stripePromise && clientSecret && (
                <Elements stripe = {stripePromise} options = {{clientSecret}}>
                <CheckoutForm />
                </Elements>)}
            </Box>
          
            <Box className = "flex flex-col items-start ">
                <Typography variant ="h4">Order Summary</Typography>
                <Typography>Product: {course.CourseTitle}</Typography>
                <Typography>Original Price: ${course.Price}</Typography>
                <Divider className="w-full border-t border-gray-300 my-2"/>
                <Typography>Total: ${course.Price}</Typography>
            </Box>
            

        </Container>
    )
};
export default Payment;
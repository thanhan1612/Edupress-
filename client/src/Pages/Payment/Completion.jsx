import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Completion = () => {
    const navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate('/');
        }, 3000);
    },[])
  
    return (
        <div className = "flex flex-col justify-center items-center">
            <h1 className = "text-lg font-bold">Thank you !</h1>
            <h1>Your transaction is completed</h1>
        </div>
         
    )
};
export default Completion;
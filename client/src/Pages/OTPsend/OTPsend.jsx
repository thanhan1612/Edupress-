import React, { useContext, useState } from "react";
import "./OTPsend.css";
import { RecoveryContext } from "../../App";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const OTPverify = () => {
    const {email,otp} = useContext(RecoveryContext);
    console.log(email);
    const [OTPinput,setOTPinput] = useState([0,0,0,0]);
    const [disable, setDisable] = useState(true);
    const [timerCount, setTimer] = React.useState(60);
    const navigate = useNavigate();
    function resendOTP() {
        if (disable) return;
        axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/otpsend`,{
            OTP:otp,
            recepient_email:email,
        }).then(() => setDisable(true)).then(() => {
            alert("A new OTP has been sent to your email").then(() => setTimer(60)).catch(console.log);
        })
        }
        React.useEffect(() => {
            let interval = setInterval(() => {
              setTimer((lastTimerCount) => {
                lastTimerCount <= 1 && clearInterval(interval);
                if (lastTimerCount <= 1) setDisable(false);
                if (lastTimerCount <= 0) return lastTimerCount;
                return lastTimerCount - 1;
              });
            }, 1000); 
            
            return () => clearInterval(interval);
          }, [disable]);
    function verifyOTP() {
        if (parseInt(OTPinput.join(""))===otp) {
            console.log("used");          
            navigate("/reset");
            return;
        }
        alert (
            "The code you have entered is not correct, try again"
        );
        return
    }
    return (
        <div className="super-container">
            <div className="container">
                <div className="text">
                    <h1>Email Verification</h1>
                    <p>We have sent a code to your email {email}</p>
                </div>
                    <form className="inputfield">
                        <div className="inputs">
                            <input maxLength="1"type ="text" onChange = {(e) => setOTPinput([e.target.value,OTPinput[1],OTPinput[2],OTPinput[3]]) }></input>
                            <input maxLength="1"type ="text" onChange = {(e) => setOTPinput([OTPinput[0],e.target.value,OTPinput[2],OTPinput[3]]) }></input>
                            <input maxLength="1"type ="text" onChange = {(e) => setOTPinput([OTPinput[0],OTPinput[1],e.target.value,OTPinput[3]]) }></input>
                            <input maxLength="1"type ="text" onChange = {(e) => setOTPinput([OTPinput[0],OTPinput[1],OTPinput[2],e.target.value]) }></input>
                           
                        </div>
                        <button onClick = {()=> verifyOTP()}>Verify account</button>
                        <div className="didnotreceive">
                            <p>Did not receive code? <a
                      className="flex flex-row items-center"
                      style={{
                        color: disable ? "gray" : "blue",
                        cursor: disable ? "none" : "pointer",
                        textDecorationLine: disable ? "none" : "underline",
                      }}
                      onClick={() => resendOTP()}
                      
                    >
                      {disable ? `Resend OTP in ${timerCount}s` : "Resend OTP"}
                    </a></p>
                        </div>
                    </form>
             </div>
           
            
            

        </div>
    )
};
export default OTPverify;
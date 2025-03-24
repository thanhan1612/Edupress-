import React, { useContext, useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RecoveryContext } from "../../App";

const Reset =() => {
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const email = localStorage.getItem("email");
    console.log(email);
    const navigate = useNavigate();
    const location = useLocation();
    

    useEffect(() =>{{
      if (!email) {
        alert('No email found');
        navigate('/signin')
      }
    }},[email,navigate])
    const handleChange = (e) => {
      const {  value } = e.target;
      setPassword(value);
    }
    const handleChangeConfirmpass = (e) => {
      const {value}  = e.target;
      setConfirmPassword(value);
      }
    const handleSubmit =(e ) => {
      e.preventDefault();
      if (password!=confirmPassword) {
        alert("Passwords do not match! Please re-enter it!")
      }
      try{
        
      axios.post(`${import.meta.env.VITE_API_BASE_URL}/api/users/changePassword`,{
        email,
        newPassword:password
      }).then(()=> navigate('/')).then(() => alert('Your password has successfully been changed'))
      }catch(error){
        alert(
          error.message
        )
      }
    }
    return (
        <div className="w-full flex justify-center items-center">
        <div className="max-w-screen-sm border-2 rounded-2xl my-10">
          <div className="text-4xl font-semibold text-gray-800 my-14 text-center">
            Change Password
          </div>
          <form  className="d-flex flex-col justify-around p-6" onSubmit={handleSubmit}>
            <div>
              <label className="text-gray-950 font-medium text-xl my-2">
                New Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                
                
                className="w-full p-2 mb-4 border rounded-2xl"
                required
                onChange={handleChange}
              />
            </div>
            <div className="relative">
              <label className="text-gray-950 font-medium text-xl my-2">
                Confirm Password <span className="text-red-600">*</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChangeConfirmpass}
             
                className="w-full p-2 mb-4 border rounded-2xl"
                required
              />
              <button
                type="button"
                
                className="w-fit absolute left-3/4 top-9 text-gray-500"
              >
             
              </button>
            </div>
  
          
  
            <div className="flex items-center">
              <input
                type="checkbox"
                id="rememberMe"
              
             
                className="mr-2 w-fit"
              />
              <label htmlFor="rememberMe" className="text-gray-600 text-lg ">I accept the Terms and Conditions</label>
            </div>
  
            <button className="bg-orange-500 text-xl text-white font-semibold p-2 my-5 rounded-2xl hover:bg-orange-600" >
              Reset Password
            </button>
          </form>
          
        </div>
      </div>
    );
  }
    
export default Reset;
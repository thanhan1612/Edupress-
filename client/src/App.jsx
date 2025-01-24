import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import HomePage from './Pages/HomePage/HomePage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import OTPverify from "./Pages/OTPsend/OTPsend";
import Reset from "./Pages/OTPsend/Reset";
import { createContext, useState } from "react";


export const RecoveryContext = createContext();
function App() {
  const [page,setPage] = useState('/signin')
  const [email,setEmail] = useState("");
  const [otp,setOTP] = useState();
 

  return (
   <RecoveryContext.Provider value = {{setPage,page,otp,setOTP,setEmail,email}}>

     
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signin" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path = "/otpsend" element = {<OTPverify />} />
          <Route path = "/reset" element = {<Reset />} />
        </Routes>
      </Router>
    
      </RecoveryContext.Provider>
    
  );
}

export default App;
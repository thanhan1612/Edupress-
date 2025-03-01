import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';



import Contact from "./Pages/Contact/Contact";

import HomePage from './Pages/HomePage/HomePage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import SignInPage from './Pages/SignInPage/SignInPage';
import OTPverify from "./Pages/OTPsend/OTPsend";
import Reset from "./Pages/OTPsend/Reset";
import { createContext, useState } from "react";

import Header from './components/Header';
import Home from "./pages/Home";


import Courses from "./Pages/AllCourses/AllCourses";



export const RecoveryContext = createContext();
function App() {
  const [page,setPage] = useState('/signin')
  const [email,setEmail] = useState("");
  const [otp,setOTP] = useState();
 

  return (
   <RecoveryContext.Provider value = {{setPage,page,otp,setOTP,setEmail,email}}>

     
      <Router>

      <Header />


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path = "/otpsend" element = {<OTPverify />} />
          <Route path = "/reset" element = {<Reset />} />
         <Route path="/" element={<Home />} />
          <Route path="/courses" element={<Courses />} />

          <Route path = "/courses" element = {<Courses />} />
          <Route path ="/homepage/contact" element ={<Contact />} />

        </Routes>
      </Router>
    
      </RecoveryContext.Provider>
    
  );
}

export default App;
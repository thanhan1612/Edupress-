import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Contact from "./Pages/Contact/Contact";
import HomePage from "./Pages/HomePage/HomePage";
import SignUpPage from "./Pages/SignUpPage/SignUpPage";
import SignInPage from "./Pages/SignInPage/SignInPage";
import OTPverify from "./Pages/OTPsend/OTPsend";
import Reset from "./Pages/OTPsend/Reset";
import { createContext, useState } from "react";
import Header from './components/Header';

import Courses from "./Pages/AllCourses/AllCourses";
import BlogListingLayout from "./Pages/BlogListing/BlogListingLayout";
import BlogDetail from "./Pages/BlogListing/BlogDetail";
import BlogList from "./Pages/BlogListing/BlogComponents/BlogList";



export const RecoveryContext = createContext();

const blogs = [
  {
    title: "random",
    description: "desc",
    date: "dd/mm/yyyy",
    category: "Commercial",
    tag: ["Marketing", "Idea", "LMS"],
  },

  {
    title: "random",
    description: "desc",
    date: "dd/mm/yyyy",
    category: "Shop",
    tag: ["Marketing", "LearnPress", "Instructor"],
  },

  {
    title: "random",
    description: "desc",
    date: "dd/mm/yyyy",
    category: "Educate",
    tag: ["LearnPress", "LLMS", "Idea"],
  },
  {
    title: "random",
    description: "desc",
    date: "dd/mm/yyyy",
    category: "Commercial",
    tag: ["Marketing", "Idea", "LMS"],
  },

  {
    title: "random",
    description: "desc",
    date: "dd/mm/yyyy",
    category: "Shop",
    tag: ["Marketing", "LearnPress", "Instructor"],
  },

  {
    title: "random",
    description: "desc",
    date: "dd/mm/yyyy",
    category: "Educate",
    tag: ["LearnPress", "LLMS", "Idea"],
  },
];

function App() {
  const [page, setPage] = useState("/signin");
  const [email, setEmail] = useState("");
  const [otp, setOTP] = useState();

  // BLOG PAGE
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedTags, setSelectedTags] = useState([]);
  const toggleCategories = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((item) => item !== category)
        : [...prev, category]
    );
  };
  const toggleTags = (tag) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((item) => item !== tag) : [...prev, tag]
    );
  };
  // END OF BLOG PAGE________________________________________________________________
  return (
    
    <RecoveryContext.Provider
      value={{ setPage, page, otp, setOTP, setEmail, email }}>
      <Router>

      <Header />


        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/otpsend" element={<OTPverify />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route
            path="/blog"
            element={
              <BlogListingLayout
                selectedCategories={selectedCategories}
                setSelectedCategories={setSelectedCategories}
                selectedTags={selectedTags}
                setSelectedTags={setSelectedTags}
                toggleCategories={toggleCategories}
                toggleTags={toggleTags}
              />
            }>
            <Route
              index
              element={
                <BlogList
                  blogs={blogs}
                  selectedCategories={selectedCategories}
                  selectedTags={selectedTags}
                />
              }
            />
            <Route path=":id" element={<BlogDetail />} />
          </Route>
        </Routes>
      </Router>
    </RecoveryContext.Provider>
   
  );
}

export default App;

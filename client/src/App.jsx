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
import BreadCrumbs from "./components/BreadCrumbs";
import Courses from "./Pages/AllCourses/AllCourses";
import BlogListingLayout from "./Pages/BlogListing/BlogListingLayout";
import BlogDetail from "./Pages/BlogListing/BlogDetail";
import BlogList from "./Pages/BlogListing/BlogComponents/BlogList";
import CourseDisplay from "./Pages/AllCourses/CourseDisplay";
import Footer from "./components/Footer";
import Overview from "./Pages/AllCourses/Coursecomponents/Overview";
import Curriculum from "./Pages/AllCourses/Coursecomponents/Currculumn";
import FAQs from "./Pages/AllCourses/Coursecomponents/FAQS";
import Instructor from "./Pages/AllCourses/Coursecomponents/Instructor";
import Reviews from "./Pages/AllCourses/Coursecomponents/Reviews";
import { ThemeProvider,createTheme } from "@mui/material/styles";
import Payment from "./Pages/Payment/Payment";
import Completion from "./Pages/Payment/Completion";
export const RecoveryContext = createContext();
const theme = createTheme({
  typography: {
    fontFamily: "'Exo', sans-serif", // Set the font for MUI Typography globally
  },
});
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
        <ThemeProvider theme={theme}>
       
      <Router>

      <Header />
      <BreadCrumbs />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/otpsend" element={<OTPverify />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/courses/:CourseTitle" element={<CourseDisplay />}>
                    <Route index element={<Overview />} /> {/* Default tab */}
                    <Route path="overview" element={<Overview />} />
                    <Route path="curriculum" element={<Curriculum />} />
                    <Route path="instructors" element={<Instructor />} />
                    <Route path="faqs" element={<FAQs />} />
                    <Route path="reviews" element={<Reviews />} />
           </Route>

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
          <Route path ="/payment" element = {<Payment />} />
          <Route path ='/completion' element = {<Completion />}/>
        </Routes>
      </Router>
      <Footer />
      
      </ThemeProvider>
    </RecoveryContext.Provider>
   
  );
}

export default App;


import { Typography, Box, Button, Container, TextField, FormControlLabel, Checkbox } from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Overview from "./Coursecomponents/Overview.jsx";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
//icons
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SchoolIcon from '@mui/icons-material/School';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
const CourseDisplay = () => {
    const [course,setCourse]= useState(null);
    const {CourseTitle} = useParams();
    const [formData, setFormData] = useState({ name: "", email: "", comment: "" });
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate()
    const handleClick =(id) => {
        navigate(`${id}`)
    }
    const onClickPayNow = (id) => {
        navigate(`/${id}/payment`,{state:{course}})
    }
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/courses/${CourseTitle}`)
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch course details");
                return response.json();
            })
            .then((data) => setCourse(data))
            .catch((error) => console.error(error));
            
    }, [CourseTitle]);
    const handleChange = (event) => {
        const { id, value } = event.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleRememberMeChange = () => setRememberMe((prev) => !prev);
   
    const sendEmail = () => console.log("Submitting comment:", formData);
    if (!course){
        return (
            <Typography>Loading...</Typography>
        )
    }
    return (
        
    <Box>
        
        <Box className = " bg-black text-white flex flex-row gap-[100px] ">
            <Box className ="pl-[350px] flex flex-col gap-[20px] pt-[30px]">
                    <Typography variant = "h4" width={"500px"} className="pb-4 pt-4">{course.CourseTitle}</Typography>
                    <Box className = "flex flex-row items-center gap-4 w-fit pb-4">
                        <Box className="flex flex-row gap-2">
                            <WatchLaterIcon sx = {{color:"orange"}}/>
                            <Typography>{course.CourseDuration}</Typography>
                        </Box>
                        <Box className="flex flex-row gap-2">
                            <SchoolIcon  sx = {{color:"orange"}}/>
                            <Typography>{course.NumStudents} Students</Typography>
                        </Box>
                        <Box className="flex flex-row gap-2">
                            <SignalCellularAltIcon sx = {{color:"orange"}}/>
                            <Typography>All Levels</Typography>
                        </Box>
                        <Box className="flex flex-row gap-2">
                            <WatchLaterIcon  sx = {{color:"orange"}}/>
                            <Typography>{course.NumLessons}</Typography>
                        </Box>
                    </Box>
            </Box>
            <Box className ="w-fit relative top-[70px] border-2 rounded-[20px] ml-[100px]">
                <img src ={course.CourseImage} alt ="course image" className=""/>
                <Box className='p-2 flex flex-row items-center justify-center gap-4'>
                    
                        <Typography variant = "p" color="red">${course.Price}</Typography>
                        <Button variant="contained" className="bg-orange-500" onClick={() => onClickPayNow(course.CourseTitle)}>
                                Pay Now
                        </Button>

                </Box>
            </Box>
        </Box>
        <Box className="pt-[10px] ml-[350px] max-w-[589.98px]">
            <Box className="  flex flex-row ">
                <Box  id= "overview" className ="border-2 border-r-0 border-black p-4 rounded-tl-lg hover:bg-gray-200 hover: text-orange transition all" onClick={() => handleClick("overview")}><Typography variant = "h6" className="hover:text-orange-300">Overview</Typography></Box>
                <Box id= "curriculum" className ="border-2 border-r-0 border-black p-4 hover:bg-gray-200 hover: text-orange transition all" onClick={() => handleClick("curriculum")}><Typography variant = "h6" className="hover:text-orange-300">Curriculumn</Typography></Box>
                <Box id= "instructors" className ="border-2 border-r-0 border-black p-4 hover:bg-gray-200 hover: text-orange transition all" onClick={() => handleClick("instructors")}><Typography variant = "h6" className="hover:text-orange-300">Instructors</Typography></Box>
                <Box id= "faqs" className ="border-2 border-r-0 border-black p-4 hover:bg-gray-200 hover: text-orange transition all" onClick={() => handleClick("FAQS")}><Typography variant = "h6" className="hover:text-orange-300">FAQS</Typography></Box>
                <Box id= "reviews"  className ="border-2 border-black p-4 rounded-tr-lg hover:bg-gray-200 hover: text-orange transition all" onClick={() => handleClick("reviews")}><Typography variant = "h6" className="hover:text-orange-300">Reviews</Typography></Box>
            </Box>
            <Box className="pt-[12px] bg-gray-300">
                <Outlet context ={{course}}  />
            </Box>
            
        </Box>
        <Box className = "ml-[350px] max-w-[1000px] pt-[10px]  flex flex-col gap-4">
               <Typography variant ="h2">Contact us</Typography>
                            <Typography variant = "p">Your email address will not be published. Required fields are marked *</Typography>
                            <Box >
                                <form >
                                    <Box className ="flex flex-row justify-between">
                                        <TextField className="w-[48%]" label = "Name*" onChange={handleChange} id ="name" value = {formData.name}/>
                                        <TextField className="w-[48%] " label = "Email*" onChange={handleChange} id ="email" value = {formData.email}/>
                                    </Box>
                                        <TextField label = "Comment" sx ={{marginTop:4}} onChange={handleChange}  id = "comment" value = {formData.comment}/>
                                </form>
                            </Box>
                           <FormControlLabel control={<Checkbox sx = {{width:40}} />} label="Save my name, email in this brower for the next time I comment" checked= {rememberMe} onChange = {handleRememberMeChange}/>
                            <Button variant = "contained" className = "w-1/6 " sx ={{borderRadius:8,backgroundColor:"orange"}} onClick={sendEmail}>Post Comment</Button>
        </Box>
        
    </Box>
    )
};
export default CourseDisplay;
import { Typography, Box, Button, Container} from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import Overview from "./Coursecomponents/Overview.jsx";
import { useNavigate } from "react-router-dom";
//icons
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SchoolIcon from '@mui/icons-material/School';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
const CourseDisplay = () => {
    const [course,setCourse]= useState(null);
    const {CourseTitle} = useParams();
    const navigate = useNavigate()
    const handleClick =(id) => {
        
    }
    
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/users/courses/${CourseTitle}`)
            .then((response) => {
                if (!response.ok) throw new Error("Failed to fetch course details");
                return response.json();
            })
            .then((data) => setCourse(data))
            .catch((error) => console.error(error));
            
    }, [CourseTitle]);
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
                        <Button variant="contained" className="bg-orange-500">
                                Start Now
                        </Button>

                </Box>
            </Box>
        </Box>
        <Box className="pt-[10px] ml-[350px] max-w-[589.98px]">
            <Box className="  flex flex-row ">
                <Box  id= "overview" className ="border-2 border-r-0 border-black p-4 rounded-tl-lg hover:bg-gray-200 hover: text-orange transition all" onClick={handleClick}><Typography variant = "h6" className="hover:text-orange-300">Overview</Typography></Box>
                <Box id= "curriculumn" className ="border-2 border-r-0 border-black p-4 hover:bg-gray-200 hover: text-orange transition all" onClick={handleClick}><Typography variant = "h6" className="hover:text-orange-300">Curriculumn</Typography></Box>
                <Box id= "instructors" className ="border-2 border-r-0 border-black p-4 hover:bg-gray-200 hover: text-orange transition all" onClick={handleClick}><Typography variant = "h6" className="hover:text-orange-300">Instructors</Typography></Box>
                <Box id= "faqs" className ="border-2 border-r-0 border-black p-4 hover:bg-gray-200 hover: text-orange transition all" onClick={handleClick}><Typography variant = "h6" className="hover:text-orange-300">FAQS</Typography></Box>
                <Box id= "reviews"  className ="border-2 border-black p-4 rounded-tr-lg hover:bg-gray-200 hover: text-orange transition all" onClick={handleClick}><Typography variant = "h6" className="hover:text-orange-300">Reviews</Typography></Box>
            </Box>
            <Box className="pt-[12px] bg-gray-300">
                <Overview className="p-2" course ={course} />
            </Box>
            
        </Box>
        
    </Box>
    )
};
export default CourseDisplay;
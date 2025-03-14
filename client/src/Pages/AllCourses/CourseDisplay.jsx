import { Typography, Box, Button} from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
//icons
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import SchoolIcon from '@mui/icons-material/School';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
const CourseDisplay = () => {
    const [course,setCourse]= useState(null);
    const {CourseTitle} = useParams();
    
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
            <Box className ="pl-[350px]">
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
            <Box className ="w-fit relative top-[70px] border-2 rounded-[20px]">
                <img src ={course.CourseImage} alt ="course image" className=""/>
                <Box className='p-2 flex flex-row items-center justify-center gap-4'>
                    
                        <Typography variant = "p" color="red">${course.Price}</Typography>
                        <Button variant="contained" className="bg-orange-500">
                                Start Now
                        </Button>

                </Box>
            </Box>
        </Box>
        
    </Box>
    )
};
export default CourseDisplay;
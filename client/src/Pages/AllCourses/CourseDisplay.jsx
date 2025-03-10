import { Typography, Box} from "@mui/material";
import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
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
        <Box className = "bg-black text-white ">
            <Typography variant = "h3">{course.CourseTitle}</Typography>
        </Box>
    </Box>
    )
};
export default CourseDisplay;
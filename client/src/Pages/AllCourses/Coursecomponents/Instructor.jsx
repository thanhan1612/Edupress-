import React, { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import SchoolIcon from '@mui/icons-material/School';

const Instructor = () => {
    const [instructor,setInstructor] = useState(null);
    const { course } = useOutletContext();
    
    useEffect(() => {
        if (!course?.CourseTitle) return; // Ensure course is available

        fetch(`${import.meta.env.VITE_API_BASE_URL}/api/users/getInstructor`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ CourseTitle: course.CourseTitle })
        })
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch course details");
            return response.json();
        })
        .then((data) => setInstructor(data.course.Instructor_id))
        .catch((error) => console.error("Error fetching instructor:", error));
    }, [course?.CourseTitle]);
    console.log(instructor);

    return (
        <Box className ="flex flex-row gap-[10px]">
            {instructor?.logo ? (
                <img src={instructor.logo} alt="Instructor logo" width="180" height="180" className="rounded-[20px] p-[10px]" />
            ) : (
                <p>Loading instructor details...</p>
            )}
            <Box>
                {instructor?.name ? 
                ( <Typography variant = "h4">{instructor.name}</Typography>) : (<p>
                    Loading details...
                </p>
                )}
               <Typography variant = "p">LearnPress is a comprehensive WordPress LMS Plugin for WordPress. This is one of the best WordPress LMS Plugins which can be used to easily create & sell courses online.</Typography>
                <Box className = "flex flex-row gap-[5px]">
                    <SchoolIcon sx={{color:"orange"}}/>
                    <Typography variant = "p">{course.NumStudents} Students</Typography>
                    <Typography variant = "p">{course.NumLessons} Students</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Instructor;

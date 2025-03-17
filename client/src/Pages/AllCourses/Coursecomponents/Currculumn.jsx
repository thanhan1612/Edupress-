import React, { useEffect, useState } from "react";
import { Box  } from "@mui/material";
const Curriculum = ({course}) => {
    const [instructor,setInstructor] = useState(null);
    useEffect(() => {
        fetch(`${import.meta.env.VITE_API_BASE_URL}/users/getInstructor`),{
            method:"POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:JSON.stringify({ CourseTitle: course.CourseTitle })
        }
        .then((response) => {
            if (!response.ok) throw new Error("Failed to fetch course details");
            return response.json();
        })
        .then((data) => setInstructor(data.Instructor_id))
        .catch((error) => console.error(error));
        
    },[course.CourseTitle]);
    console.log(instructor);
    return (
        <Box>
            <img src = {instructor.logo} alt= 'instructor logo' />

        </Box>
    )
};
export default Curriculum;
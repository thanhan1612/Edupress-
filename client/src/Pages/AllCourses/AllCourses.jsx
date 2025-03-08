import React from "react";
import { Container, Typography, TextField, AppBar, Stack,Box, InputAdornment, Menu, CardMedia, CardContent, Pagination } from "@mui/material";
import Card from "@mui/material/Card";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid2';
import { useState,useEffect } from "react";
import ListIcon from '@mui/icons-material/List';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SignalCellularAltIcon from '@mui/icons-material/SignalCellularAlt';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import Divider from '@mui/material/Divider';
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import Checkbox from "@mui/material/Checkbox";



const Courses = () => {
    const [allcourses,setAllcourses] = useState([]);
    const [selectedCategories,setSelectedCategories] =useState([]);
    const categories = ["Maths","Computer Science", "Literature"]
    const handleCategoryChange = (e) => {
        const {checked,value} = e.target;
        setSelectedCategories((prev) =>
            checked ? [...prev, value] : prev.filter((cat) => cat !== value)
          );
          setPage(1);
    };
    const filterCourses =   selectedCategories.length > 0
    ? allcourses.filter((course) => selectedCategories.includes(course.category))
    : allcourses;

    const usePagination = (data,courseperpage) => {
        const [currentPage,setCurrentPage] = useState(1);
        const maxPage = Math.ceil(filterCourses.length/courseperpage);
        const currentData = () => {
            const begin = (currentPage-1) * courseperpage;
            const end = begin + courseperpage;
            return filterCourses.slice(begin,end);
        };
        const next =() => {
            setCurrentPage(currentPage => Math.min(currentPage+1,maxPage))
        }
        const prev =() => {
            setCurrentPage(currentPage => Math.max(1,currentPage-1));
        }
        const jump = (page) => {
            const pageNumber = Math.min(Math.max(1, page), maxPage);
            setCurrentPage(pageNumber);

        }
        return {next,prev,jump,currentData,currentPage,maxPage}
        
     };
     const [page,setPage] =useState(1);
     const Per_page = 2;
     const count = Math.ceil(allcourses.length/ Per_page);
     const coursedata = usePagination(allcourses,Per_page);
     const handleChangecount = (e,p) => {
        setPage(p);
        coursedata.jump(p);
     }
    useEffect(() => {
        let isMounted = true;  // Flag to track component mount status
    
        fetch(`${import.meta.env.VITE_API_BASE_URL}/users/courses`)
            .then((response) => {
                if (!response.ok) throw new Error("Bad request");
                return response.json();
            })
            .then((data) => {
                console.log(data);
                if (isMounted) {
                    setAllcourses(data.courses);
                      // Prevent state update if component unmounts
                }
            })
            .catch(() => alert('Cannot display courses'));
    
        return () => {
            isMounted = false;  // Cleanup function runs when component unmounts
        };
    }, []);
   
    
  return (
      <Container maxWidth="xl" sx ={{width:"1290px"}} >
        <div className="courses" style = {{display:"flex",flexWrap:"nowrap",gap:"30px"}} >
            <div className="coursedisplay" style = {{display:"flex",flexDirection:"column"}}>
                <div className="searchbar" style ={{justifyContent:"space-between",alignItems:"center",display:"flex",width:"960px"}}>
                    
                    <Typography variant = {"h2"}>All Courses</Typography>
                    <Box sx ={{justifyContent:"center",alignItems:"center",display:"flex",gap:"20px"}}>
                        <TextField
                            variant="outlined"
                            label="Search"
                            size="small"
                            margin = "normal"
                            sx={{ width: 300 }}
                            InputProps={{
                            
                            endAdornment: (
                                <InputAdornment position="end" >
                                <SearchIcon />
                                </InputAdornment>
                            ),
                            }}
                        />
                        <MenuIcon />
                        <ListIcon />
                    </Box>
                    </div>
                    <div>
                    {coursedata.currentData().map(course => 
                    (<Box sx={{ flexGrow: 1, paddingTop: '30px' }}>
                        <Grid container spacing={10}>
                            <Grid item xs size={12}>
                                <Card sx={{ display: "flex", flexDirection: "row", gap: "20px", borderRadius: "20px", width: "990px" }}>
                                    {course.CourseImage ? (
                                        <CardMedia component="img" sx={{ height: 250, width: 410, objectFit: "cover", flexShrink: 0 }} image={course.CourseImage} />
                                    ) : (
                                        <Typography>Loading Image...</Typography>  
                                    )}
                                    <CardContent>
                                        <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}> 
                                            {course.CourseProvider ? (<Typography variant="h6">by {course.CourseProvider}</Typography>) : (<Typography>Loading</Typography>)}
                                            
                                            {course.CourseTitle ? (<Typography variant="h6">{course.CourseTitle}</Typography>) : (<Typography>Loading</Typography>)}

                                            <Grid container spacing={2}>
                                                <Grid size={3} sx={{ display: "flex", alignItems: "center" }}>
                                                    <AccessTimeIcon sx={{ color: "orange" }} />
                                                    {course.CourseDuration ? (<Typography variant="p">{course.CourseDuration}</Typography>) : (<Typography>Loading</Typography>)}
                                                </Grid>
                                                <Grid size={3}>
                                                    <RateReviewIcon sx={{ color: "orange" }} />
                                                    {course.NumberofReviews ? (<Typography variant="p">{course.NumberofReviews}</Typography>) : (<Typography>Loading</Typography>)}
                                                </Grid>
                                                <Grid size={3}>
                                                    <SignalCellularAltIcon sx={{ color: "orange" }} />
                                                    {course.NumberofReviews ? (<Typography variant="p">{course.NumberofReviews}</Typography>) : (<Typography>Loading</Typography>)}
                                                </Grid>
                                                <Grid size={3}>
                                                    <FileCopyIcon sx={{ color: "orange" }} />
                                                    {course.NumLessons ? (<Typography variant="p">{course.NumLessons}</Typography>) : (<Typography>Loading</Typography>)}
                                                </Grid>
                                            </Grid>

                                            <Divider sx={{ paddingTop: '40px' }} />

                                            <Box>
                                                <Stack direction="row" justifyContent="space-between">
                                                    <Box>
                                                        {course.Price ? (<Typography variant="p">${course.Price}</Typography>) : (<Typography>Loading</Typography>)}
                                                        <Typography variant='p' sx={{ paddingLeft: "5px", color: "green", fontWeight: 'bold' }}>Free</Typography>
                                                    </Box>
                                                    <Box sx={{ display: "flex", justifyContent: "flex-end", width: "100px" }}>
                                                        <Typography sx={{ fontWeight: "bold" }}>View More</Typography>
                                                    </Box>
                                                </Stack>
                                            </Box>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        </Grid>
                    </Box>)
                )}


                    <Box 
                        sx={{ 
                            display: "flex", 
                            justifyContent: "center",  
                            alignItems: "center",  
                            width: "100%",
                            mt: 3 
                        }}
                        >
                    <Pagination count={count} size="small" page={page} onChange ={handleChangecount}sx={{ display: "inline-flex", width: "auto" }} />
                    </Box>

                   
                    </div>
                 
                 
            </div>
            
            
            <div className="coursencategories" style ={{width:"220px",paddingTop:"10px"}}>
               
                <Box>
                     <Typography variant="h6" >Course Categories</Typography>
                     <FormGroup>
                        {categories.map((category) => (
                        <FormControlLabel
                            key={category}
                            control={
                            <Checkbox
                                value={category}
                                onChange={handleCategoryChange}
                                checked={selectedCategories.includes(category)}
                            />
                            }
                            label={category}
                        />
                        ))}
                    </FormGroup>
                    <Typography variant="h6" >Instructors</Typography>
                    <FormGroup sx = {{pl:0}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Kenny White" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="John Doe" />                      
                    </FormGroup>
                    <Typography variant = "h6" >Price</Typography>
                    <FormGroup sx = {{pl:0}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="All" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Free" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Paid" /> 
                    </FormGroup>
                  
                </Box>
            </div>
        </div>
        
       
       
        
      </Container>
  );
};

export default Courses;

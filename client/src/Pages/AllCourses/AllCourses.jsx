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
        <div className="courses" style = {{display:"flex",flexWrap:"nowrap"}} >
            <div className="coursedisplay" style = {{display:"flex",flexDirection:"column"}}>
                <div className="searchbar" style ={{justifyContent:"center",alignItems:"center",display:"flex",width:"990px"}}>
                    
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
                    {allcourses.map(course => 
                    (<Box sx={{ flexGrow: 1,paddingTop:'30px' }}>
                    <Grid container spacing={10} >
                        <Grid item xs size ={12}>
                        <Card sx ={{display:"flex",flexDirection:"row",gap:"20px",borderRadius:"20px",width:"990px"}}>
                            {allcourses.length > 0 && course.CourseImage ? (
                            <CardMedia component="img" sx ={{height:250,width:410,objectFit:"cover",flexShrink:0}}image={course.CourseImage} />
                        ) : (
                            <Typography>Loading Image...</Typography>  // Placeholder until data loads
                        )}
                            <CardContent>
                                <Box sx ={{display:"flex",flexDirection:"column",gap:"15px"}}> 
                                {allcourses.length>0 && course.CourseProvider ? (<Typography variant = "h6">by {course.CourseProvider}</Typography>):(<Typography>Loading</Typography>)}
                                
                                {allcourses.length>0 && course.CourseTitle ? (<Typography variant = "h6"> {course.CourseTitle}</Typography>):(<Typography>Loading</Typography>)}
                                <Grid container spacing={2}>
                                    <Grid size={3} sx ={{display:"flex",alignItems:"center"}}>
                                        <AccessTimeIcon sx = {{color:"orange"}}></AccessTimeIcon>
                                        {allcourses.length>0 && course.CourseDuration ? (<Typography variant = "p">{course.CourseDuration}</Typography>):(<Typography>Loading</Typography>)}
                                    </Grid>
                                    <Grid size={3}>
                                        <RateReviewIcon sx ={{color:"orange"}}></RateReviewIcon>
                                        {allcourses.length>0 && course.NumberofReviews ? (<Typography variant = "p"> {course.NumberofReviews}</Typography>):(<Typography>Loading</Typography>)}
                                    </Grid>
                                    <Grid size={3}>
                                        <SignalCellularAltIcon sx = {{color:"orange"}}></SignalCellularAltIcon>
                                        {allcourses.length>0 && course.NumberofReviews ? (<Typography variant = "p"> {course.NumberofReviews}</Typography>):(<Typography>Loading</Typography>)}
                                    </Grid>
                                    <Grid size={3}>
                                        <FileCopyIcon sx ={{color:"orange"}}></FileCopyIcon>
                                        {allcourses.length>0 && course.NumLessons ? (<Typography variant = "p"> {course.NumLessons}</Typography>):(<Typography>Loading</Typography>)}
                                    </Grid>
                                </Grid>
                                <Divider sx ={{paddingTop:'40px'}}></Divider>
                                <Box>
                                    <Stack direction="row" justifyContent="space-between">
                                        <Box>
                                        {allcourses.length>0 && course.Price ? (<Typography variant = "p"> ${course.Price}</Typography>):(<Typography>Loading</Typography>)}
                                        <Typography variant = 'p'sx ={{paddingLeft:"5px",color:"green",fontWeight:'bold'}}>Free</Typography>
                                        </Box>
                                        <Box sx ={{display:"flex",justifyContent:"flex-end",width:"100px"}}>
                                            <Typography sx ={{fontWeight:"bold"}}>View More</Typography>
                                        </Box>
                                      
                                    </Stack>
                                </Box>
                                </Box>
                            </CardContent>

                           
                        </Card>
                        </Grid>
                      
                    </Grid>
                   
                    </Box>))}
                    <Box sx={{ display: "flex",flexDirection:"row", justifyContent: "center", mt: 3, width:"100%" }}>
                            <Pagination
                                count={5}
                                variant="outlined"
                                shape="rounded"
                                size="small"
                                
                            />
                    </Box>

                   
                    </div>
                 
                 
            </div>
            
            
            <div className="coursencategories" style ={{width:"220px",paddingTop:"10px"}}>
               
                <Box>
                     <Typography variant="h6" >Course Categories</Typography>
                    <FormGroup sx = {{pl:0}}>
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Label" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Commercial" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Office" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Job" />
                        <FormControlLabel control={<Checkbox defaultChecked />} label="Educate" />
                        
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

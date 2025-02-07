import React from "react";
import { Container, Typography, TextField, AppBar, Stack,Box, InputAdornment, Menu } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import Grid from '@mui/material/Grid2';
import ListIcon from '@mui/icons-material/List';

const Courses = () => {
  return (
      <Container maxWidth="xl" >
        <div className="courses" style = {{display:"flex",flexWrap:"nowrap"}} >
            <div className="coursedisplay">
                <div className="searchbar" style ={{justifyContent:"center",alignItems:"center",display:"flex"}}>
                    
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
                 <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={3} style = {{border:"1px solid"}}>
                        <Grid item xs>
                        <h1>222</h1>
                        <h1>222</h1>
                        </Grid>
                        <Grid item xs={6}>
                        <h1>222</h1>
                        </Grid>
                        <Grid item xs>
                        <h1>222</h1>
                        </Grid>
                    </Grid>
                    <Grid container spacing={3} style = {{border:"1px solid",display:"flex",flexDirection:"row"}}>
                        <Grid item xs sx = {{display:"flex",flexDirection:"row"}}>
                        <h1>222</h1>
                        <h1>222</h1>
                        </Grid>
                        <Grid item xs={6}>
                        <h1>222</h1>
                        </Grid>
                        <Grid item xs>
                        <h1>222</h1>
                        </Grid>
                    </Grid>
                    </Box>
            </div>
            
            
            <div className="coursencategories" style ={{width:"200px",paddingTop:"10px"}}>
                <Typography variant="h6">Course Categories</Typography>
            </div>
        </div>
       
        
      </Container>
  );
};

export default Courses;

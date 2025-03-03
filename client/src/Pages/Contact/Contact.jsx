
import React, { useState } from "react";
import { Container,Box,Typography, TextField, Checkbox, FormControlLabel,Button } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Contact =() =>{
    const [formdata,setFormdata] = useState({
        name:"",email:"",data:""
    });
    const handleChange = (e) => {
        const { id, value } = e.target;
        setFormdata((prevData) => ({ ...prevData, [id]: value }));
        
    return (
        <Container maxWidth="lg" sx={{ flexGrow: 1, minHeight: "50vh", p: 2 }}>
            <Box className="flex gap-8">
                <Box className ="flex flex-col gap-3">
                    <Typography variant ="h2">Need a Direct Line?</Typography>
                    <Typography variant ="p">Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.</Typography>
                    <Box className ="flex items-center gap-5">
                        <PhoneIcon sx ={{color:"orange"}}/>
                        <Box className ="flex flex-col">
                            <Typography variant ="p">Phone</Typography>
                            <Typography variant = 'p'>(123) 4560 7890</Typography>
                        </Box>
                    </Box>
                    <Box className ="flex items-center gap-5 pt-2">
                        <EmailIcon sx ={{color:"orange"}}/>
                        <Box className ="flex flex-col">
                            <Typography variant ="p">Email</Typography>
                            <Typography variant = 'p'>thanhan221174@gmail.com</Typography>
                        </Box>
                    </Box>
                </Box>
                <img src ="/map.png"/>
            </Box>
            <Box className="pt-16 flex flex-col gap-4">
                <Typography variant ="h2">Contact us</Typography>
                <Typography variant = "p">Your email address will not be published. Required fields are marked *</Typography>
                <Box >
                    <form >
                        <Box className ="flex flex-row justify-between">
                            <TextField className="w-[48%]" label = "Name*" onChange={handleChange}/>
                            <TextField className="w-[48%] " label = "Email*" onChange={handleChange}/>
                        </Box>
                            <TextField label = "Comment" sx ={{marginTop:4}} />
                    </form>
                </Box>
               <FormControlLabel control={<Checkbox sx = {{width:40}} />} label="Save my name, email in this brower for the next time I comment" />
                <Button variant = "contained" className = "w-1/6 " sx ={{borderRadius:8,backgroundColor:"orange"}}>Post Comment</Button>
            </Box>
        </Container>
    )
}};
export default Contact;

import React from "react";
import { Container,Box,Typography } from "@mui/material";
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
const Contact =() =>{
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
            <Box className="pt-16">
                <Typography variant ="h2">Contact us</Typography>
                <Typography variant = "p">Your email address will not be published. Required fields are marked *</Typography>
                <Box component={form}>
                    
                </Box>
            </Box>
        </Container>
    )
};
export default Contact;
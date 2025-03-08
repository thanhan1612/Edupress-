import React, { useState } from "react";
import { Breadcrumbs, Box, Link, Typography } from "@mui/material";
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useLoaderData, useLocation } from "react-router-dom";
import {Link as RouterLink} from 'react-router-dom';
const BreadCrumbs = () => {
    const location = useLocation();
    const pathnames = location.pathname.split("/").filter((x) => x)
    return (
        <Box  sx ={{backgroundColor:"#D3D3D3",padding:"10px", paddingLeft:"350px"}}>
            <Breadcrumbs  aria-label="breadcrumb" separator = {<NavigateNextIcon fontSize="small"/>}>
                            <Link underline='hover' href ='#'>Home</Link>
                            {pathnames.map((val,idx) => {
                                const to = `/${pathnames.slice(0,idx+1).join('/')}`
                                const isLast = idx === pathnames.length-1;
                                return isLast? (<Typography key ={to} color="text.primary" >
                                        {val}
                                </Typography>) : (
                                    <Link key = {to} component={RouterLink} to ={to} underline="hover">
                                    {val}</Link>
                                )
                            })}
            </Breadcrumbs>
        </Box>
    )
};
export default BreadCrumbs;
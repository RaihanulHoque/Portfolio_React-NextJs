import React, { useState } from "react";

import { Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Link, Stack, Step } from "@mui/material";
//Custom Components

const styles ={
    sectionHeading:{
        fontFamily:"Arial",
        fontWeight: "700",
        color: "#fff",
        // borderBottom:"2px solid #8c363e",
        borderWidth:"20%",
    },
    sectionText:{
        marginTop: "5px",
        fontSize: "16px",
        color: "#fff",
        letterSpacing: "0.5px",
    },
    sectionHeadBtmLine:{
        width: "60px",
        height: "3px !important",
        backgroundColor: "#a43f49",
        margin: "10px auto",
    }
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const About = () =>{
    return <>
        <Grid item xs={9} md={8}>
            <Item sx={{ pt:20, pb:20, p:5, pr:5  }}>
                <Typography style={styles.sectionHeading} variant="h4">About Me</Typography>
                <Item style={styles.sectionHeadBtmLine}></Item>
                <Typography color="white" style={styles.sectionText} variant="subtitle1">
                This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site. Updated on 21 May 2019 for repeated main menu HTML code.
                </Typography>              
            </Item>
            <Item sx={{ pt:20, pb:20, p:5, pr:5  }}>
                <Typography style={styles.sectionHeading} variant="h4">About Me</Typography>
                <Item style={styles.sectionHeadBtmLine}></Item>
                <Typography color="white" style={styles.sectionText} variant="subtitle1">
                This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site. Updated on 21 May 2019 for repeated main menu HTML code.
                </Typography>              
            </Item>
        </Grid>
    </>
}
export default About;
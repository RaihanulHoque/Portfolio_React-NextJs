import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { deepOrange, green } from '@mui/material/colors';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';

import { Avatar, Link, Stack, Step } from "@mui/material";
//Custom Components
import Main from "./Main";
import BackGroundImage from '../images/img2.jpg'
import ProfileImage from '../images/img1.jpg'
import { borderBottom } from "@mui/system";
import { StepLabel, Stepper } from "@material-ui/core";
import About from "./About";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

const styles ={
    wraperContainer:{
        height: 1356,
        backgroundImage: `url(${BackGroundImage}) `,
        backgroundSize: "cover",
        width: "100%",
        
    },
    main:{
        left: "10%", 
        backgroundColor: "#a43f49",
        boxSizing: "border-box",
        height: "100%",
        maxHeight: "100vh !important",
        maxWidth: "80vw !important",
        outline: "none",
        overflowX: "hidden !important",
        overflowY: "auto !important",
        padding: "0",
        position: "fixed !important",
        top: "calc(0px)",
        width: "20%",
        willChange: "transform",
        zIndex: "9999 !important",
        // position: "sticky",
    },
    avaterIcons:{
        height: "40px",
        width: "40px",
        lineHeight: "40px",
        fontSize: "14px",
        fontWeight: "700",
        color: "#fff",
        transition: "all 0.5s",
        '&:hover, &:focus': {
            background: "#ffeded",
            color: "#8c363e",
        },
        cursor: "pointer",
        textAlign:"center",
        backgroundColor: "rgba(0, 0, 0, 0.2)",
    },
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

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

const MenuItem = styled(Paper)(({ theme }) => ({
    height: "70px",
    lineHeight: "70px",
    display: "inline-block",
    fontSize: "15px",
    fontWeight: "700",
    color: "#fff",
    width: "100%",
    transition:" all 0.5s",
    borderTop: "2px solid #ffeded",
    background: "#a43f49",
    '&:hover, &:focus': {
        background: "#ffeded",
        color: "#8c363e",
    },
    cursor: "pointer",
  }));

  const AvatersCustom = styled(Paper)(({ theme }) => ({
    height: "40px",
    width: "40px",
    color: "#fff",
    transition: "all 0.5s",
    '&:hover, &:focus': {
        background: "#ffeded",
        color: "#8c363e",
    },
    cursor: "pointer",
    textAlign:"center",
    backgroundColor: "rgba(0, 0, 0, 0.2)",
    
  }));

const LeftPanel = () =>{
    return<>
    <Grid item xs={3} md={4} justifyContent="center" textAlign="center" style={styles.main}>
            <Item justifyContent="center">
                <Avatar
                    alt="Raihan Sabuj"
                    src={ProfileImage}
                    sx={{ width: 140, height: 140 }}
                />
                <Typography sx={{ mt:5 }} color="white" variant="h4">
                    Md Raihanul Hoque
                </Typography>
                <Typography sx={{ mb:5, fontStyle:"italic", fontFamily:"sans-serif" }}  color="white" variant="subtitle1">
                    Web Developer
                </Typography>
            </Item>
            <Stack justifyContent="center" textAlign="center" style={{ display:"block" }}>
                <MenuItem  underline="none" onClick={() => {alert("I'm a button.");}}>About Me</MenuItem>
                <MenuItem underline="none" onClick={() => {alert("I'm a button.");}}>Skills</MenuItem>
                <MenuItem underline="none" onClick={() => {alert("I'm a button.");}}>Project Portfolio</MenuItem>
                <MenuItem style={{ borderBottom: "2px solid #ffeded" }} underline="none" onClick={() => {alert("I'm a button.");}}>Experience</MenuItem>
            </Stack>
            <Stack sx={{ mt:10 }} spacing={.5} justifyContent="center" direction="row" >
                <Link href="https://fb.com/raihan.sabuj" target="_blank">
                    <AvatersCustom >
                        <FacebookIcon />
                    </AvatersCustom>    
                </Link>
                <Link href="https://fb.com/raihan.sabuj" target="_blank">
                    <Avatar style={ styles.avaterIcons} variant="square" >
                        <TwitterIcon />
                    </Avatar>
                </Link>
                <Link href="https://fb.com/raihan.sabuj" target="_blank">
                    <Avatar style={ styles.avaterIcons}  variant="square">
                        <LinkedInIcon />
                    </Avatar>
                </Link>
                <Link href="https://fb.com/raihan.sabuj" target="_blank">
                    <Avatar style={ styles.avaterIcons}  variant="rounded">
                        <GitHubIcon />
                    </Avatar>
                </Link>
                <Link href="https://fb.com/raihan.sabuj" target="_blank">
                    <Avatar style={ styles.avaterIcons}  variant="square">
                        <YouTubeIcon />
                    </Avatar> 
                </Link>
            </Stack>
            <Item sx={{ mt:5 }} justifyContent="center" textAlign="center">
                <Typography variant="caption" color="white">
                    Copyright : 2022 @ Raihan Sabuj
                </Typography>
            </Item>
        </Grid>
    </>
}
export default LeftPanel;
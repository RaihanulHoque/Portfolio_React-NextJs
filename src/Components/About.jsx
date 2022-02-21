import React, { useState } from "react";

import { Container, Grid, Typography, Paper } from "@mui/material";
import { styled } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Avatar, Link, Stack, Step } from "@mui/material";
// import FeaturePhoto1 from "../images/feature_1.png";
import FeatureImage1 from '../images/feature_1.png';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Divider from '@mui/material/Divider';

//Custom Components

const styles ={
    sectionHeading:{
        fontFamily:"Arial",
        fontWeight: "700",
        color: "#fff",
        borderBottom:"2px solid #8c363e",
        borderWidth:"20%",
        textAlign:"center"
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
    },
    cardFeatureImage:{
        borderRadius:"5px",
        maxHeight:"250px",

    },
    media: {
        height: 250,
      },
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
        
            <Item sx={{ pt:20, pb:20, p:5, pr:5  }}>
                <Typography style={styles.sectionHeading} variant="h4" className="headbdrBottom">About Me</Typography>
                <span  style={styles.sectionHeadBtmLine}></span>
                <Typography color="white" style={styles.sectionText} variant="subtitle1">
                This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site. Updated on 21 May 2019 for repeated main menu HTML code.
                </Typography>              
            </Item>
            <Grid item container spacing={2} sx={{ pt:20, pb:20, p:5, pr:5  }}>
                <Grid item xs={6}>
                    <Card style={styles.cardFeatureImage}>
                    <CardMedia
                        style={styles.media}
                        image={FeatureImage1}
                        title="Feature Image"
                        component="img"
                    />
                    
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Typography style={styles.sectionHeading} variant="h5" justifyContent="center">Passionate Learner</Typography>
                    <Typography color="white" style={styles.sectionText} variant="subtitle1" justifyContent="center">
                    This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site. Updated on 21 May 2019 for repeated main menu HTML code. Updated on 21 May 2019 for repeated main menu HTML code.
                    </Typography> 
                </Grid>             
            </Grid>
            <Divider variant="middle" style={{ background: 'white' }} />
     </>
}
export default About;
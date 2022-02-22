import React, { useState } from "react";
import "../css/style.css";

import { Container, Grid, Typography, Paper, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
//Components of Mono Stakced Bar
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import FeatureImage1 from '../images/feature_2.png';

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
    cardStyle:{
        width:"33%",
    }   
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

const Experience = () =>{
    return <>
        <Item sx={{ mt:5, pt:20, pb:20, p:5, pr:5  }}>
            <Typography style={styles.sectionHeading} variant="h4">Experiences</Typography>
            <span  style={styles.sectionHeadBtmLine}></span>

            <Typography color="white" style={styles.sectionText} variant="subtitle1">
            Experiences are listed bellow.
            </Typography>   
        </Item>
        <Grid container>
            <Item  style={styles.cardStyle}>
                <Card>
                    <CardActionArea>
                         
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Software Engineer
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" style={{ color:"#8c363e", fontWeight:"700" }}>
                            Globe Biotech Limited
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                     
                </Card>
            </Item>
            <Item  style={styles.cardStyle}>
                <Card>
                    <CardActionArea>
                         
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Web Developer
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" style={{ color:"#8c363e", fontWeight:"700" }}>
                            R&D Informatics
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                     
                </Card>
            </Item>
            <Item  style={styles.cardStyle}>
                <Card>
                    <CardActionArea>
                        
                        <CardContent>
                        <Typography gutterBottom variant="h6" component="h2">
                            Ecommerce Portal
                        </Typography>
                        <Typography gutterBottom variant="subtitle2" style={{ color:"#8c363e", fontWeight:"700" }}>
                            Sheer Vantage Solutions
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    
                </Card>
            </Item>
        </Grid>
        <Divider sx={{ mt:10 }} variant="middle" style={{ background: 'white' }} />
    </>
}
export default Experience;
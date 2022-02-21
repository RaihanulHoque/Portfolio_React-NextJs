import React, { useState } from "react";
import "../css/style.css";

import { Container, Grid, Typography, Paper, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
//Components of Mono Stakced Bar
import MonoStackedBar from "mono-stacked-bar"
import "mono-stacked-bar/dist/index.css"
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

  

const Project = () =>{
    return <>
        <Item sx={{ mt:5, pt:20, pb:20, p:5, pr:5  }}>
            <Typography style={styles.sectionHeading} variant="h4">Projects Portfolio</Typography>
            <span  style={styles.sectionHeadBtmLine}></span>

            <Typography color="white" style={styles.sectionText} variant="subtitle1">
                Some of the best porjects are listed as chart bellow.
            </Typography>   
        </Item>
        <Grid container>
            <Item  style={styles.cardStyle}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={FeatureImage1}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Project Management Software
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Item>
            <Item  style={styles.cardStyle}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={FeatureImage1}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            POS and Inventory 
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Item>
            <Item  style={styles.cardStyle}>
                <Card>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        alt="Contemplative Reptile"
                        height="140"
                        image={FeatureImage1}
                        title="Contemplative Reptile"
                        />
                        <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Ecommerce Portal
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            This is a Bootstrap v4.2.1 CSS Template for you. Edit and use this layout for your site.
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                        Share
                        </Button>
                        <Button size="small" color="primary">
                        Learn More
                        </Button>
                    </CardActions>
                </Card>
            </Item>
        </Grid>
        <Divider sx={{ mt:10 }} variant="middle" style={{ background: 'white' }} />
    </>
}
export default Project;
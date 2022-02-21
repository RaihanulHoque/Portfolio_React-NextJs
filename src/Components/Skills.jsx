import React, { useState } from "react";
import "../css/style.css";

import { Container, Grid, Typography, Paper, Divider } from "@mui/material";
import { styled } from '@mui/material/styles';
//Components of Mono Stakced Bar
import MonoStackedBar from "mono-stacked-bar"
import "mono-stacked-bar/dist/index.css"


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
    skillData:{
        
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        padding: "20px",
        color:"#FFF",
        borderRadius:"5px",
    },
}
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'transparent',
    ...theme.typography.body2,
    padding: theme.spacing(5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

const Skills = () =>{
    const colors = ["#fd4949", "#fba73b"]

    return <>
        <Item sx={{ mt:5, mb:5, pt:20, pb:20, p:5, pr:5  }}>
            <Typography style={styles.sectionHeading} variant="h4">What are my Skills</Typography>
            <span  style={styles.sectionHeadBtmLine}></span>

            <Typography color="white" style={styles.sectionText} variant="subtitle1">
                My Skills are listed as chart bellow.
            </Typography>   
        </Item>
        <Grid style={styles.skillData}>
            <p>HTML</p>
            <MonoStackedBar  data={[80, 20]} unit="%" colors={colors} />
            <p>CSS</p>
            <MonoStackedBar  data={[70, 30]} unit="%" colors={colors} />
            <p>JavaScripts</p>
            <MonoStackedBar  data={[40, 60]} unit="%" colors={colors} />
            <p>PHP</p>
            <MonoStackedBar  data={[80, 20]} unit="%" colors={colors} />
            <p>MySQL</p>
            <MonoStackedBar  data={[60, 40]} unit="%" colors={colors} />
            <p>Custom colors</p>
            {/* <MonoStackedBar
                data={[
                { value: 10, color: "#fd4949" },
                { value: 20, color: "#fba73b" }
                ]}
            />
            <p>Without custom unit</p>
            <MonoStackedBar data={[50, 20, 30]} unit="%" colors={colors} />
            <p>Without label</p>
            <MonoStackedBar
                data={[10, 10, 10]}
                displayLabels={false}
                colors={colors}
            />
            <p>With caption</p>
            <MonoStackedBar
                data={[
                { value: 12, caption: "Men" },
                { value: 14, caption: "Women" },
                { value: 4, caption: "Other gender" }
                ]}
                colors={colors}
            />
            <p>Without radius + height + maxWidth</p>
            <MonoStackedBar
                data={[10, 10, 10]}
                radius={0}
                height={30}
                width={400}
                colors={colors}
            /> */}
        </Grid>
        <Divider sx={{ mt:10 }} variant="middle" style={{ background: 'white' }} />
    </>
}
export default Skills;
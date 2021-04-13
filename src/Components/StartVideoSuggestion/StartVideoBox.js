import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import img from '../../Media/gavle.jpg';


const useStyles = makeStyles((theme) =>({
    videoStartSection:{
padding:20
    },
    imgContainerVideo:{
    objectFit:'cover',
    width:'100%',
    height:'100%',
    borderRadius: 8
},
textBox:{
height:90,
width:130,
backgroundColor:'#F4F4F4',
borderRadius: 8,
position:'relative',
bottom:90,
margin:'auto',
textAlign:'center',
opacity: 0.9,
boxShadow: '10px 14px 24px rgba(0, 0, 0, 0.25);'

}
}));


const StartVideoBox = (props) =>{
    const classes = useStyles();

    return(
       
        <Box className={classes.videoStartSection} 
        width={props.width} 
        height={props.height}>
            <img src={props.img} 
            alt={props.alt} 
            className={classes.imgContainerVideo} ></img>
            <Box className={classes.textBox}>
                <Typography>
                    <h3>{props.heading}</h3>
                    <p>{props.description}</p>
                </Typography>
            </Box>
        </Box>

    )
}

export default StartVideoBox;
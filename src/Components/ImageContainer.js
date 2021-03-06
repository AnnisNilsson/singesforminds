import React from 'react';
import {makeStyles, Box, Typography, borderRadius} from '@material-ui/core';
import img from '../Media/gavle.jpg';

const useStyles = makeStyles((theme) =>({
    img:{
        objectFit:'contain',
        width:'100%',
        borderRadius:'10px 10px 0 0'
        
    }

}))

const ImageContainer = (props) =>{
    const classes = useStyles();
    return(
            <Box height={props.height} maxWidth={props.maxWidth} >
                <img src={img} className={classes.img}></img>
            </Box>
    )

}

export default ImageContainer;
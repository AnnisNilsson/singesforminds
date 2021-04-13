import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    textContainer:{
        textAlign:"center"
    },
    container:{
        padding:'0 10px 10px 10px'
    }

}))

const DescriptionContainer = (props) =>{
    const classes = useStyles();
    return(
         <Box height={props.height} maxWidth={props.maxWidth} className={classes.container}> 
                <Typography className={classes.textContainer}>
                    <h3>{props.heading}</h3>
                    <p>{props.description}</p>                    
                </Typography>
                <span> play tid: 20:00 </span>
        </Box>
    )

}

export default DescriptionContainer;
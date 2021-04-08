import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import { palette } from '@material-ui/system';
const useStyles = makeStyles((theme) =>({
    descriptionContainer:{
        display:'flex',
        justifyContent:'space-around',
        paddingTop:20,
        width:'80%',
        marginLeft:'auto',
        marginRight:'auto',
        // backgroundColor:'#9AA39C',


    },
    imgContainer:{
        height:320,
        maxWidth:260
    },
    img:{
        objectFit:'contain',
        width:'100%',
        
    },
    categoryHeading:{
        textTransform:'upperCase',
        position:'relative',
        right:50,
    },
    textContainer:{
        marginTop:30
    }

}))

const CategoryDescription = (props =>{
    const classes = useStyles();

    return(
        
        <Box className={classes.descriptionContainer} 
         bgcolor={props.backgroundColor}>
            <div className={classes.textContainer}>
                <Typography> 
                        <h2 className={classes.categoryHeading}>
                            {props.heading}
                        </h2>
                        <p>{props.description}</p>
                </Typography>
            </div>
            <Box className={classes.imgContainer}>
            <img src={props.img} alt={props.alt} className={classes.img}></img>
            </Box>
        </Box>
    )
})

export default CategoryDescription;
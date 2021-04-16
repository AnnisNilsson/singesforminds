import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    textContainer:{
        textAlign:'center'
    },
    container:{
        position:'relative',
        height:200,
        width:260
    },
    img:{
        zIndex:'-1',
        position:'absolute',
        top:0,
        left:0,
        objectFit:'contain',
        width:'100%',
        height:'100%'
    },
    filter:{
        // backgroundColor:'#368A89',
        height: '100%',
        width:'100%',
        borderRadius:17,
        opacity: 0.4
    },
    textContainer:{
        textTransform:'upperCase',
        color:'white',
        position:'absolute',
        top:25,
        left:85,
        fontSize:'16pt',

    }

}))

const CategoryBoxStart = (props) =>{
    const classes = useStyles();
    return(
        <div className={classes.container}>
         <Box className={classes.filter} bgcolor={props.filterColor}></Box>
             <img src={props.img} alt={props.alt} className={classes.img}/>
                <Typography className={classes.textContainer}>
                    <h2>{props.heading}</h2>
                </Typography>
       
        </div>
    )

}

export default CategoryBoxStart;
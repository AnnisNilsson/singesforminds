import React from 'react';
import {makeStyles, Box} from '@material-ui/core';
import { CenterFocusStrong } from '@material-ui/icons';

const useStyles = makeStyles((theme) =>({
    glasContainer:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    glas:{
        backgroundColor:'#6A9E9E',
        opacity:0.42,
        height:'80vh',
        width:'80vw',
        borderColor:'#ffff', 
        boxShadow:'20px 4px 24px rgba(47, 47, 47, 0.28);',
        // [theme.breakpoints.up('sm')]: {
        //     backgroundColor:'#000000'
        // }
    },
    leftBorder:{
        position:'relative',
        right:8,
        top:110,
        height:'50%',
        borderColor:'#6A9E9E' 
    },
    rightBorder:{
        position:'relative',
        left:8,
        bottom:180,
        height:'70%',
        borderColor:'#6A9E9E'
    }
}));

const GlasBackground = (props) =>{
    const classes = useStyles();

    return(
        <div className={classes.glasContainer}>
            <Box border={8} className={classes.glas}>
                <Box borderLeft={9} className={classes.leftBorder}></Box>
                <Box borderRight={9} className={classes.rightBorder}></Box>
            </Box>
        </div>
    )
}


export default GlasBackground;
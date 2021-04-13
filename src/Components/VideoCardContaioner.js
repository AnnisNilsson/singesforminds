import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import ImageContainer from './ImageContainer';
import DescriptionContainer from './DescriptionContainer';
import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) =>({
    cardContainer:{
        backgroundColor:"#F4F4F4",
        width:"90%",
        boxShadow:"10px 13px 20px rgba(0, 0, 0, 0.25);",
        borderRadius:10,
        [theme.breakpoints.up('sm')]: {
            width:250
        }
    }

}));

const VideoCardContainer = (props) =>{
    const classes = useStyles();

    return(
        <Box className={classes.cardContainer}>
            <ImageContainer
            maxWidth={250}
            />
            <DescriptionContainer 
            heading="rubrik"
            description="text"
            />
            
        </Box>

    )
}

export default VideoCardContainer;
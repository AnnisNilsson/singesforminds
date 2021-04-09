import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) =>({
    img:{
        objectFit:'contain',
        width:'100%',
        
    }

}))

const DescriptionContainer = (props) =>{
    const classes = useStyles();
    return(
            <Box height={props.height} maxWidth={props.maxWidth}>
                <Typography>
                    <h3>test</h3>
                    <p>test</p>
                </Typography>
            </Box>
    )

}

export default DescriptionContainer;
import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import img from '../../Media/gavle.jpg';
import StartVideoBox from './StartVideoBox';


const useStyles = makeStyles((theme) =>({
    containerSuggestion:{
        display:'flex',
        justifyContent:'flex-end'
    },
    textContainer:{
     margin:'auto'   
    },
    heading:{
        textTransform:"upperCase"
    }

}));

const StartVideoSuggestion = (props) =>{
    const classes = useStyles();

    return(
    <div className={classes.containerSuggestion}>
        <div className={classes.textContainer}>
            <Typography>
                <h2 className={classes.heading}>{props.heading}</h2>
                <p>{props.description}</p>
            </Typography>
        </div>
        <div className={classes.containerSuggestion}>
            <div>
                <StartVideoBox 
                width={170}
                height={200}
                />
                <StartVideoBox 
                width={170}
                height={200}
                />
            </div>
            <div>
                <StartVideoBox 
                width={340}
                height={440}
                />
            </div>
        </div>
    </div>
    )
}

export default StartVideoSuggestion; 
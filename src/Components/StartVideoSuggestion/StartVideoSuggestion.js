import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import img from '../../Media/gavle.jpg';
import StartVideoBox from './StartVideoBox';
import { positions } from '@material-ui/system';


const useStyles = makeStyles((theme) =>({
    containerSuggestion:{
        display:'flex',
        justifyContent:'flex-end'
    },
    textContainer:{
     margin:'auto'   
    },
    heading:{
        textTransform:"upperCase",
        position: 'relative'
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
                heading="text 1"
                description="lorem ipsum dolores"
                img={img}
                />
               
                <StartVideoBox 
                width={170}
                height={200}
                heading="test 2"
                description="lorem ipsum dolores"
                img={img}


                />
            </div>
            <div>
                <StartVideoBox 
                width={340}
                height={440}
                heading="text 3"
                description="lorem ipsum dolores"
                img={img}


                />
            </div>
        </div>
    </div>
    )
}

export default StartVideoSuggestion; 
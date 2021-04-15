import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import gear from '../Media/Icon/gears.png'
import InputField from './InputField';

const useStyles = makeStyles((theme) =>({
    container:{
        boxShadow:"20px 14px 33px rgba(0, 0, 0, 0.25);",
        width:'70%',
        heading:'90vh',
        [theme.breakpoints.down('sm')]: {
            width:'90vw'
     }
    },
    img:{
        maxWidth:'40vh',
        display:'block',
        paddingTop:'4vh'
    },
    heading:{
       padding:'12vh',
       textAlign:'center'
    },

    label:{
        marginLeft:16
    },
    box:{
        justifyContent:'space-evenly',
        display:'flex',
        flexDirection:'column',
        [theme.breakpoints.up('md')]: {
            flexDirection:'row'
     }
    }
}))

const SettingsInfo = (props) =>{
    const classes = useStyles();
    return(
        <Box className={classes.container}>
                <Typography variant="h2" color="primary" className={classes.heading}>
                Ändra Lösenord
            </Typography> 
            <div className={classes.box}>
            <Box>
            <Typography className={classes.label} variant="subtitle1">Skriv ditt nuvarande lösenord</Typography>  
                <InputField 
                label="Nuvarande lösenord"
                />
            <Typography className={classes.label}  variant="subtitle1">Skriv ditt nya lösenord</Typography>  
                <InputField 
                label="Nytt lösenord"            
                />
            <Typography className={classes.label}  variant="subtitle1">Bekräfta lösenordet</Typography>  
                <InputField 
                label="Lösenord"
                />
            </Box>
                <img src={gear} className={classes.img}/>  
                
            </div>
        </Box>
    )
}

export default SettingsInfo;
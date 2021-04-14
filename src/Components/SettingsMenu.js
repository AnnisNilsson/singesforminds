import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import gear from '../Media/Icon/gear.png'

const useStyles = makeStyles((theme) =>({
    container:{
        boxShadow:"20px 14px 33px rgba(0, 0, 0, 0.25);"
    },
    img:{
        width:80,
        margin:'auto',
        display:'block',
        paddingTop:'4vh'
    },
    text:{
        borderLeft:'6px solid #6A9E9E',
        textAlign:'center',
        backgroundColor:'#ECECEC'

    },
    heading:{
        textAlign:'center',
        marginBottom:'4vh',
    }
}))

const SettingsMenu = (props) =>{
    const classes = useStyles();
    return(
        <Box className={classes.container} width={"20%"} height={"90vh"}>
                <img src={gear} width={"20px"} className={classes.img}/> 
                <Typography variant="h2" color="primary" className={classes.heading}>
                Inställningar
            </Typography> 
            <Typography variant="subtitle1" className={classes.text}>
            Ändra lösenord

                </Typography>   
        </Box>
    )
}

export default SettingsMenu;
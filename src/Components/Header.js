import React from 'react';
import {makeStyles, Box, Typography} from '@material-ui/core';
import img from '../Media/meditation.png'


const useStyles = makeStyles((theme) =>({
 container:{
     height:500,
     position:'relative',
     display:'flex',
     flexDirection:'row-reverse',
     backgroundColor:"#238584",
     color:'#FFFFFF',
     [theme.breakpoints.down('sm')]: {
        display:'block',
        backgroundColor:'#FFFFFF',
        color:"#238584",
        height:100,
        padding:20
 }
 },
 whiteBox:{
     top:100,
     left:70,
     height:330,
     width:500,
     zIndex:1,
     position:'absolute',
     [theme.breakpoints.down('sm')]: {
        display:'none'
 }

 },
 img:{
     zIndex:2,
     position:'absolute',
     left:100,
     top:130,
     [theme.breakpoints.down('sm')]: {
        display:'none'
 }

 },
 boxText:{
     textAlign:'center',
     width:'50%',
     marginTop:'auto',
     marginBottom:'auto',
     textTransform:"uppercase",
 }
}));


const Header = (props) =>{
    const classes = useStyles();

    return(
       
        <Box className={classes.container} >
            <div className={classes.boxText}>
                <Typography variant="h4" >God Morgon</Typography>
                <Typography variant="h2">Namn</Typography>
                <Typography variant="p">Lorem ipsum dolares sitamet</Typography>
            </div>
           
            <div className={classes.boxImg}>
                <img src={img} className={classes.img}/>
                <Box bgcolor="#ffff" className={classes.whiteBox} ></Box>
            </div>
        </Box>

    )
}

export default Header;
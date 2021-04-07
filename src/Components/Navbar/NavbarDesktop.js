import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#FFFFFF'
    },
    logo : {
        marginLeft: theme.spacing(1),
        marginRight: 'auto',
        cursor: 'pointer'
    },
    navlinks: {
        paddingRight: theme.spacing(10),
        paddingLeft: theme.spacing(10),
        cursor: 'pointer',
    }
}))

const NavbarDesktop = () => {
const classes = useStyles();

    return(
        <AppBar className={classes.navbar}>
            <Toolbar>
                <Typography variant="h2" color="primary" className={classes.logo}>LOGOTYP</Typography>
                <Typography variant="h2" color="primary" className={classes.navlinks}>Yoga</Typography>
                <Typography variant="h2" color="primary" className={classes.navlinks}>Meditation</Typography>
                <Typography variant="h2" color="primary" className={classes.navlinks}>Inställningar</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default NavbarDesktop;
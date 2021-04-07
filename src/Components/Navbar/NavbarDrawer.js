import React, {useState} from 'react';
import { AppBar, Drawer, Grid, IconButton, List, ListItem, Toolbar, Typography, makeStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    navbar: {
        backgroundColor: '#FFFFFF',
    },
    sideBarIcon: {
        padding: 0,
        cursor: 'pointer',
    },
    list : {
        width: 250,
        backgroundColor: '#FFFFFF',
        paddingLeft: theme.spacing(2)  
    },
    navlinks: {
        padding: theme.spacing(3)
    }

}))
const NavbarDrawer = () => {
    const classes = useStyles();

    const [drawer, setDrawer] = useState(false);
    return(
        <>
        <AppBar className={classes.navbar}>
            <Toolbar>
                <Grid container direction="row-reverse" justify="space-between" alignItems="center">
                    <MenuIcon color="primary" className={classes.sideBarIcon} onClick={() => setDrawer(true)} />
                    <Typography variant="h1" color="primary">LOGOTYP</Typography>
                </Grid>
            </Toolbar>
        </AppBar>
        <Drawer
        open={drawer}
        anchor='right'
        onClose={() => setDrawer(false)}
        onOpen={() => setDrawer(true)}
        >
            <div
            tabIndex={0}
            role='button'
            onClick={() => setDrawer(false)}
            onKeyDown={() => setDrawer(false)}
            >
                <IconButton><CloseIcon color="primary" /></IconButton>
                <List className={classes.list}>
                    <ListItem key={1} button divider className={classes.navlinks}>
                        <Typography variant="h2" color="primary">YOGA</Typography>
                    </ListItem>
                    <ListItem key={2} button divider className={classes.navlinks}>
                        <Typography variant="h2" color="primary">MEDITATION</Typography>
                    </ListItem>
                    <ListItem key={3} button divider className={classes.navlinks}>
                        <Typography variant="h2" color="primary">INSTÄLLNINGAR</Typography>
                    </ListItem>
                </List>
            </div>
        </Drawer>
        </>
    )
}
export default NavbarDrawer;
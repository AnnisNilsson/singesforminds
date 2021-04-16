import React from 'react';
import {Button, makeStyles, Typography} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    btn: {
        margin: theme.spacing(2)
    }
}));

const Btn = (props) => {
    const classes = useStyles();

    return(
<Button variant="contained" color={props.color} size="medium" className={classes.btn}>
    <Typography variant="button">
        {props.text}
    </Typography>
</Button>
    )
}
export default Btn;
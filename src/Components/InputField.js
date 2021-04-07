import {makeStyles, TextField} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
input: {
    margin: theme.spacing(2)
}
}));
const InputField = (props) => {
    const classes=useStyles();
    return(
        <TextField 
        variant="outlined" 
        className={classes.input}
        id={props.id} 
        label={props.label || 'label'} 
        helperText={props.helperText}
        error={props.error}
        />
    )
}
export default InputField;
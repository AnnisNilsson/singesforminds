import {Typography, Button, makeStyles} from '@material-ui/core';
import {createMuiTheme, ThemeProvider} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
      primary: {
          main: '#238584',
        },
       secondary: {
          main: '#CE9580',
        },
        textPrimary : {
          main: '#FFFFFF',
        },
        textSecondary: {
          main: '#373636',
        }

    },
    typography: {
        fontFamily: [
            'Comfortaa', 'cursive'
        ].join(','),
        h1: {
            fontSize: '2rem',
            fontWeight: 700,
        },
        h2: {
          fontSize: '1.5rem',
          fontWeight: 500
        },
        subtitle1: {
            fontSize: '1.1rem',
            fontWeight: 500
        },
        body: {
            fontSize: '1rem',
            fontWeight: 300,
        },
        button: {
            fontSize: '1.1rem',
            fontWeight: 700
        }   
    },
    spacing: 8,

});

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 0,
    margin: 0,
  }
}))

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>

    </div>
    </ThemeProvider>
  );
}

export default App;

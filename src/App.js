import {createMuiTheme, ThemeProvider, makeStyles} from '@material-ui/core/styles';
import Btn from './Components/Btn';
import InputField from './Components/InputField';

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
  },
  box: {
    backgroundColor: 'black',
    background: 'url(https://images.unsplash.com/photo-1617759865117-e207fbda8bc9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=687&q=80)',
    backgroundSize: '50%',
    backgroundPosition: 'top',
    width: 300,
    height: 300,
    margin: theme.spacing(10),
    '&:hover' : {
      background: 'url(https://images.unsplash.com/photo-1611095562057-2e70d5bf9dee?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
      backgroundSize: '50%',
      backgroundPosition: 'top'
    }
  }
}));

function App() {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
    <div className={classes.root}>
      <Btn 
      text="KNAPP"
      color="primary"
      />
    <Btn
    text="KNAPP"
    color="secondary"
    />

    <InputField id="testInput" label="Testinput" helperText="hjälp!" error={false}/>
    <div className={classes.box}>

    </div>
    </div>
    </ThemeProvider>
  );
}

export default App;

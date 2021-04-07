import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#238584',
            text: '#FFFFFF'
        },
        secondary: {
            main: '#CE9580',
            text: '#373636',
        },
    },
    typography: {
        fontFamily: [
            'Comfortaa', cursive
        ].join(','),
        h1: {
            fontSize: '1.7rem',
            fontWeight: 500,
        },
        subtitle1: {
            fontSize: '1.3rem',
            fontWeight: 300,
        },
        body: {
            fontSize: '1rem',
        },
        button: {
            fontSize: '1.2rem',
            fontWeight: 500,
        }   
    },

});

export default theme;
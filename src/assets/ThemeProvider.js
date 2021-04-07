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
        fontSize: '1.2rem',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1rem'
        },
        [theme.breakpoints.up('sm')]: {
            fontSize: '1.5rem'
        }
    },

});

export default theme;
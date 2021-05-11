import {createMuiTheme} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            light: '#ffef62',
            main: '#ffeb3b',
            dark: '#b2a429',
            contrastText: '#1d1d1d',
        },
        secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
        },
    }
})

export default theme;
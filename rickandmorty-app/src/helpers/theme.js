import { createMuiTheme, makeStyles } from '@material-ui/core/styles';

export default ({ isDarkTheme }) =>
  createMuiTheme({
    palette: {
      primary: {
        main: '#f50057',
      },
      secondary: {
        main: '#f50057',
      },
    },
  });

const defaultStyles = makeStyles((theme) => ({
}));


export { defaultStyles };
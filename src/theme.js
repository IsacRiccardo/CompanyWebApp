import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#8B7355', // warm taupe
      light: '#A08B75',
      dark: '#6D5A43',
    },
    secondary: {
      main: '#B5A899', // soft greige
      light: '#D6CCC1',
      dark: '#968778',
    },
    text: {
      primary: '#4A4A4A', // soft charcoal
      secondary: '#737373',
    },
    background: {
      default: '#F8F7F5', // soft ivory
      paper: '#FFFFFF',
    },
  },
});

export default theme;

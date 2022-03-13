import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#4683d9',
    },
  },
  components: {
    MuiPaper: {
      styleOverrides: {
        rounded: {
          borderRadius: 8,
        },
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '8px',
          textTransform: 'inherit',
          fontSize: 16,
          transition: 'none',
          '&:active': {
            boxShadow:
              '0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%)',
            transform: 'translateY(1px)',
          },
        },
        contained: {
          backgroundColor: 'white',
          //color: 'black',
          boxShadow:
            '0 1px 1px rgb(0 0 0 / 10%), 0 2px 5px rgb(0 0 0 / 5%), 0 -1px 0 rgb(0 0 0 / 5%), -1px 0 0 rgb(0 0 0 / 10%), 1px 0 0 rgb(0 0 0 / 10%)',
          '&:hover': {
            backgroundColor: 'white',
            boxShadow:
              '0 1px 1px rgb(0 0 0 / 15%), 0 4px 7px rgb(0 0 0 / 10%), 0 -1px 0 rgb(0 0 0 / 10%), -1px 0 0 rgb(0 0 0 / 15%), 1px 0 0 rgb(0 0 0 / 15%)',
          },
        },
      },
    },
  },
});

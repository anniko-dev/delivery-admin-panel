import { createTheme } from '@mui/material';

const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};
export const theme = createTheme({
  breakpoints,
  palette: {
    primary: {
      main: '#250048',
    },
  },
  typography: {
    fontFamily: 'Montserrat',
  },
  spacing: 8,
  components: {
    MuiTypography: {
      styleOverrides: {
        subtitle1: {
          fontWeight: 400,
        },
        h1: {
          fontSize: 24,
          fontWeight: 500,
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            fontSize: 16,
          },
        },
        h2: {
          fontSize: 16,
          fontWeight: 500,
        },
      },
    },
    MuiGrid2: {
      styleOverrides: {
        root: {
          // padding: 0,
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          height: '100%',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          padding: 24,
          [`@media screen and (max-width: ${breakpoints.values.sm}px)`]: {
            padding: 16,
          },
        },
      },
    },
  },
});

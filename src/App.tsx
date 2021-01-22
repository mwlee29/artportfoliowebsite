import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline'

import MainLayout from './layouts/MainLayout';
import Routes from './Routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#757575',
      light: '#a4a4a4',
      dark: '#494949',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#979797',
      light: '#c8c8c8',
      dark: '#696969',
      contrastText: '#000000',
    },
    background: {
      default: '#a4a4a4',
    },
  }, 
})

function App() {
  return (
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <BrowserRouter>
        <MainLayout>
          <Routes />
        </MainLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

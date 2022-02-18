import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, StylesProvider } from '@material-ui/core/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import Routes from './routes/Routes';
import theme, { styledTheme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import './App.css';

function App() {
  return (
    <StylesProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StyledThemeProvider theme={styledTheme}>
          <GlobalStyle />
          <BrowserRouter>
            <Routes />
          </BrowserRouter>
        </StyledThemeProvider>
      </ThemeProvider>
    </StylesProvider>
  );
}

export default App;

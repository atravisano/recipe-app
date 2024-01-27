import './App.css';
import Footer from './shared/components/Footer';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Recipes from './shared/components/Recipes';

class App extends React.Component {

  render() {
    const theme = createTheme();
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Typography variant="h6" color="inherit" noWrap>
              Recipes
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Container sx={{ py: 8 }} maxWidth="md">
            <Recipes />
          </Container>
        </main>
        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;

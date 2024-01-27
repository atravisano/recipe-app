import './App.css';
import ApiService from './shared/services/ApiService';
import Footer from './shared/components/Footer';
import React from 'react';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Recipes } from './shared/components/Recipes';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    // Note: This may be called twice in development environment due to React.StrictMode.
    new ApiService().getRecipes()
      .then(
        (result) => {
          console.log(result);
          this.setState({
            isLoaded: true,
            items: result.hits
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    const theme = createTheme();

    if (error) {
      return <div>{error}</div>
    }
    if (!isLoaded) {
      return <div>Loading...</div>
    }
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
          <Recipes items={items}  />
        </Container>
      </main>
      <Footer />
    </ThemeProvider>
  );
  }
}

export default App;

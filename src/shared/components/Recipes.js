import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import ApiService from '../services/ApiService';
import { useEffect, useState } from 'react';

export default function Recipes() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recipes, setRecipes] = useState([]);
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        // Note: This may be called twice in development environment due to React.StrictMode.
        new ApiService().getRecipes()
        .then(
            (result) => {
              setIsLoaded(true);
              setRecipes(result.hits);
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              setIsLoaded(true);
              setError(error);
            }
        )
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(recipes)
        return (
            <Grid container spacing={4}>
                {recipes.map(item => item.recipe).map((item, index) => (
                    <Grid item key={index} xs={12} sm={6} md={4}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                        <CardMedia
                            component="img"
                            image={item.image}
                            alt={item.label} />
                        <CardContent sx={{ flexGrow: 1 }}>
                            <Typography gutterBottom variant="h5" component="h2">
                                {item.label}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                                {Math.ceil(item.calories).toLocaleString()} Calories
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                ))}
            </Grid>
        )
      }
  }
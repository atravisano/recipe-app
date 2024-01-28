import React from 'react';
import Grid from '@mui/material/Grid';
import RecipeService from '../services/RecipeService';
import { useEffect, useState } from 'react';
import Recipe from './Recipe/Recipe';

export default function Recipes() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recipes, setRecipes] = useState([]);
    
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
        // Note: This may be called twice in development environment due to React.StrictMode.
        new RecipeService().getRecipes()
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
                    <Recipe item={item} />
                </Grid>
                ))}
            </Grid>
        )
      }
  }
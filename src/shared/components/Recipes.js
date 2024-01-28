import './Recipes.css';
import React from 'react';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Recipe from './Recipe/Recipe';
import recipeServiceClient from '../services/RecipeService';
import TextField from '@mui/material/TextField';

export default function Recipes() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recipes, setRecipes] = useState([]);
  
    useEffect(() => {
      const getRecipes = async () => {
        try {
          const result = await recipeServiceClient.getRecipes();
          setRecipes(result.hits);
        } catch (error) {
          setError(error);
        }
        finally {
          setIsLoaded(true);
        }
      };
      getRecipes();
    }, [])

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return <div>Loading...</div>;
      } else {
        console.log(recipes)
        return (
          <>
            <div className="search-bar">
              <TextField label="Search" variant="standard" margin="normal" fullWidth />
            </div>
            <Grid container spacing={4}>
              {recipes.map(item => item.recipe).map((item, index) => (
                <Grid item key={index} xs={12} sm={6} md={4}>
                  <Recipe item={item} />
                </Grid>
              ))}
            </Grid>
          </>
        )
      }
  }
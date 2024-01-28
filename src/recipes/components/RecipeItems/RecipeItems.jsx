import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import recipeServiceClient from '../../../shared/services/RecipeService';
import { RecipeFilterContext } from '../../contexts/RecipeFilterContext';
import { Skeleton } from '@mui/material';

export default function RecipeItems() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const filter = useContext(RecipeFilterContext);
  
    useEffect(() => {
      const getRecipes = async () => {
        setIsLoaded(false);
        try {
          const result = await recipeServiceClient.getRecipes(filter.query);
          setRecipes(result.hits);
        } catch (error) {
          setError(error);
        }
        finally {
          setIsLoaded(true);
        }
      };
      getRecipes();
    }, [filter])

    if (error) {
        return <div>Error: {error.message}</div>;
      } else if (!isLoaded) {
        return (
          <Grid container spacing={4}>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular" />
              </Grid>
          </Grid>
        );
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
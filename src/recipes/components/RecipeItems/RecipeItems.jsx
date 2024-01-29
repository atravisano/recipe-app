import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import { useEffect, useState } from 'react';
import Recipe from '../Recipe/Recipe';
import recipeServiceClient from '../../../shared/services/RecipeService';
import { RecipeFilterContext } from '../../contexts/RecipeFilterContext';
import { Skeleton, Alert } from '@mui/material';

export default function RecipeItems() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [recipes, setRecipes] = useState([]);
    const filter = useContext(RecipeFilterContext);
  
    useEffect(() => {
      const getRecipes = async () => {
        if (!recipeServiceClient.isQueryMinLength(filter.query)) {
          setRecipes([]);
          return;
        }

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
                <Skeleton variant="rectangular" width={262} height={262} />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular"  width={262} height={262}  />
              </Grid>
              <Grid item xs={12} sm={6} md={4}>
                <Skeleton variant="rectangular"  width={262} height={262}  />
              </Grid>
          </Grid>
        );
      } else if (!recipeServiceClient.isQueryMinLength(filter.query)) {
        return (
          <Alert severity="info">Search requires at least 2 characters.</Alert>
        );
      } else {
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
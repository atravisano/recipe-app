import Grid from '@mui/material/Grid';
import Recipe from '../Recipe/Recipe';
import recipeServiceClient from '../../../shared/services/RecipeService';
import { Skeleton, Alert } from '@mui/material';
import { RecipesResponse } from '../../../shared/models/recipes';
import { useQuery } from '@tanstack/react-query';

export default function RecipeItems({ searchTerm }: { searchTerm: string }) {
  const query = useQuery({
    queryKey: ['recipes', searchTerm],
    queryFn: async () => {
      if (!recipeServiceClient.isQueryMinLength(searchTerm)) {
        return {} as RecipesResponse;
      }

      return await recipeServiceClient.getRecipes(searchTerm);
    },
    select: (data) => data.hits.map(h => h.recipe)
  })

  if (query.isError) {
    return <div>Error: {query.error.message}</div>;
  } else if (query.isPending) {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" width={262} height={262} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" width={262} height={262} />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Skeleton variant="rectangular" width={262} height={262} />
        </Grid>
      </Grid>
    );
  } else if (!recipeServiceClient.isQueryMinLength(searchTerm)) {
    return (
      <Alert severity="info">Search requires at least 2 characters.</Alert>
    );
  } else {
    return (
      <Grid container spacing={4}>
        {query.data
          .map((recipe, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Recipe item={recipe} />
            </Grid>
          ))}
      </Grid>
    );
  }
}

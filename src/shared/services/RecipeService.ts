import { RecipesResponse } from '../models/recipes';

export class RecipeService {
  appId = process.env.REACT_APP_RECIPE_APP_ID;
  appKey = process.env.REACT_APP_RECIPE_APP_KEY;
  baseAddress = 'https://api.edamam.com/api';

  public async getRecipes(query: string): Promise<RecipesResponse> {
    if (!this.isQueryMinLength(query))
      throw new Error('Recipe query must be at least 2 characters.');

    const response = await fetch(
      `${this.baseAddress}/recipes/v2?type=public&q=${query}&app_id=${this.appId}&app_key=${this.appKey}`,
      { headers: { 'Content-Type': 'application/json' } }
    );
    return await response.json();
  }

  public isQueryMinLength(query: string): boolean {
    return query.length >= 2;
  }
}

const recipeServiceClient = new RecipeService();
export default recipeServiceClient;

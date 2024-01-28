export class RecipeService {
    appId = process.env.REACT_APP_RECIPE_APP_ID;
    appKey = process.env.REACT_APP_RECIPE_APP_KEY;
    baseAddress = 'https://api.edamam.com/api';

    async getRecipes() {
        const res = await fetch(`${this.baseAddress}/recipes/v2?type=public&q=chicken&app_id=${this.appId}&app_key=${this.appKey}`,
            { headers: { 'Content-Type': 'application/json' } });
        return await res.json();
    }
}

const  recipeServiceClient = new RecipeService();
export default recipeServiceClient;

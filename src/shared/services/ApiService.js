export class ApiService {
    appId = 'ed0cbb27';
    appKey = '8b36dd636f644bab926f0e2e6f8d28c5';
    baseAddress = 'https://api.edamam.com/api'

    async getRecipes() {
        const res = await fetch(`${this.baseAddress}/recipes/v2?type=public&q=chicken&app_id=${this.appId}&app_key=${this.appKey}`,
            { headers: { 'Content-Type': 'application/json' } });
        return await res.json();
    }
}

export default ApiService;
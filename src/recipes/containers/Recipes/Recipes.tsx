import './Recipes.css';
import { useState } from 'react';
import { RecipeFilterContext } from '../../contexts/RecipeFilterContext';
import RecipeItems from '../../components/RecipeItems/RecipeItems';
import RecipeSearch from '../../components/RecipeSearch/RecipeSearch';

export default function Recipes() {
  const [query, setQuery] = useState<string>('chicken');
  
  const onChange = (value: string) => {
    setQuery(value);
  }

  return (
    <>
      <RecipeSearch handleOnChange={onChange} value={query} />
      <RecipeFilterContext.Provider value={{ query }}>
        <RecipeItems />
      </RecipeFilterContext.Provider>
    </>
  );
}

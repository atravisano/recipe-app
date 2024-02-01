import './Recipes.css';
import { useState } from 'react';
import RecipeItems from '../../components/RecipeItems/RecipeItems';
import RecipeSearch from '../../components/RecipeSearch/RecipeSearch';

export default function Recipes() {
  const [searchTerm, setSearchTerm] = useState<string>('chicken');
  
  return (
    <>
      <RecipeSearch handleOnChange={setSearchTerm} value={searchTerm} />
      <RecipeItems searchTerm={searchTerm} />
    </>
  );
}

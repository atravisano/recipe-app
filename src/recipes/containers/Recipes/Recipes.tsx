import './Recipes.css';
import { useState } from 'react';
import { RecipeFilterContext } from '../../contexts/RecipeFilterContext';
import RecipeItems from '../../components/RecipeItems/RecipeItems';
import TextField from '@mui/material/TextField';

export default function Recipes() {
  const [query, setQuery] = useState<string>('chicken');

  const debouncedSetQuery = (event: React.ChangeEvent<HTMLInputElement>) => setQuery(event.currentTarget.value);

  return (
    <>
      <div className="search-bar">
        <TextField onChange={debouncedSetQuery} label="Search" variant="standard" margin="normal" fullWidth value={query} />
      </div>
      <RecipeFilterContext.Provider value={{ query }}>
        <RecipeItems />
      </RecipeFilterContext.Provider>
    </>
  )
}
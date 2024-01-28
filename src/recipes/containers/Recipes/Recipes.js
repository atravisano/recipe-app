import './Recipes.css';
import { useState } from 'react';
import { RecipeFilterContext } from '../../contexts/RecipeFilterContext';
import RecipeItems from '../../components/RecipeItems/RecipeItems';
import TextField from '@mui/material/TextField';
import { debounce } from '@mui/material';

export default function Recipes() {
  const [query, setQuery] = useState('chicken');

  const debouncedSetQuery = (e) => debounce(setQuery(e.target.value), 500);

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
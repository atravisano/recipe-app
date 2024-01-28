import TextField from '@mui/material/TextField';
import { useState } from 'react';
import { debounce } from '@mui/material';

export default function RecipeSearch() {
    const [query, setQuery] = useState('chicken');

    const debouncedSetQuery = (e) => debounce(setQuery(e.target.value), 500);

    return (
        <TextField onChange={debouncedSetQuery} label="Search" variant="standard" margin="normal" fullWidth value={query} />
    )
}
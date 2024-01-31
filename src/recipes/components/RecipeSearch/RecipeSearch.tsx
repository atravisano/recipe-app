import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function RecipeSearch() {
  const [query, setQuery] = useState<string>('chicken');

  const debouncedSetQuery = (event: React.ChangeEvent<HTMLInputElement>) =>
    setQuery(event.currentTarget.value);

  return (
    <div className="search-bar">
        <TextField
          onChange={debouncedSetQuery}
          label="Search"
          variant="standard"
          margin="normal"
          fullWidth
          value={query}
        />
    </div>
  );
}

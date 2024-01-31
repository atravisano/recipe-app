import TextField from '@mui/material/TextField';
import { useState } from 'react';

export default function RecipeSearch({ handleOnChange, value }: { handleOnChange: (value: string) => void, value: string }) {
  const [query, setQuery] = useState<string>(value);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setQuery(value);
    handleOnChange(value);
  };

  return (
    <div className="search-bar">
        <TextField
          onChange={onChange}
          label="Search"
          variant="standard"
          margin="normal"
          fullWidth
          value={query}
        />
    </div>
  );
}

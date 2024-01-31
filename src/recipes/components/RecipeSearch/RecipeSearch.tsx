import { useState } from 'react';
import TextField from '@mui/material/TextField';

interface SearchProps {
  handleOnChange: (value: string) => void;
  value: string;
}

export default function RecipeSearch({ handleOnChange, value }: SearchProps) {
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

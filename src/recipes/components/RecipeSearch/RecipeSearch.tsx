import { useState } from 'react';
import TextField from '@mui/material/TextField';
import { useDebounce } from '../../../shared/hooks/use-debounce.hooks';

interface SearchProps {
  handleOnChange: (value: string) => void;
  value: string;
}

export default function RecipeSearch({ handleOnChange, value }: SearchProps) {
  const [query, setQuery] = useState<string>(value);

  const debouncedChange = useDebounce(() => {
    handleOnChange(query);
  });

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.currentTarget.value;
    setQuery(value);
    debouncedChange();
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

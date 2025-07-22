import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';
import { Box } from '@mui/system';

import './index.css';

interface DropdownInterface {
  items: string[];
  onSelection: (item: string) => void;
  style?: React.CSSProperties;
  selectedItemId: string;
}

export function Dropdown({
  items,
  onSelection,
  style,
  selectedItemId,
}: DropdownInterface) {
  const handleChange = (event: SelectChangeEvent<string>) => {
    onSelection(event.target.value);
  };

  return (
    <Box id='dropdown' sx={{ minWidth: 120, maxWidth: 240 }} style={style}>
      <FormControl fullWidth>
        <InputLabel id='demo-simple-select-label'>Target Type</InputLabel>
        <Select
          labelId=''
          id='demo-simple-select'
          value={selectedItemId}
          onChange={handleChange}
          // inputProps={{ 'aria-label': 'Without label' }}
          label='Target Type'
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              {titleCase(item)}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

function titleCase(text: string) {
  if (!text) {
    return ''; // Handle empty strings gracefully
  }

  // Convert the string to lowercase, then split it into an array of words
  const words = text.toLowerCase().split(' ');

  // Map over the array, capitalizing the first letter of each word
  const titleCasedWords = words.map((word: string) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
  });

  // Join the words back into a single string with spaces
  return titleCasedWords.join(' ');
}

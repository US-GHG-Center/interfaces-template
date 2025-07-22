import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
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
        <Select
          labelId=''
          id='target-types-dropdown'
          value={selectedItemId}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'Without label' }}
        >
          {items.map((item) => (
            <MenuItem key={item} value={item}>
              {item}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}

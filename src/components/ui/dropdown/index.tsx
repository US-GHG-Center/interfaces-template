import {
  FormControl,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
} from '@mui/material';
import { Box } from '@mui/system';

import { titleCase } from '../../../utils';

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



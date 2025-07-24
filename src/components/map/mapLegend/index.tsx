import React, { useState } from 'react';
import {
  Box,
  Typography,
  IconButton,
  Stack,
  Tooltip,
  ButtonBase,
} from '@mui/material';
import RoomIcon from '@mui/icons-material/Room';
import ClearAllIcon from '@mui/icons-material/ClearAll';

import { getMarkerColor } from '../utils';
import { titleCase } from '../../../utils';

import './index.css';


interface MapLegendProps {
  items: string[];
  onSelect: (ids: string[]) => void;
  title: string;
}

export const MapLegend: React.FC<MapLegendProps> = ({ items, onSelect, title = '' }) => {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const COLUMN_THRESHOLD = 3;


  const toggleSelect = (id: string) => {
    const newSelected = selectedIds.includes(id)
      ? selectedIds.filter((sid) => sid !== id)
      : [...selectedIds, id];
    setSelectedIds(newSelected);
    onSelect(newSelected);
  };

  const clearFilter = () => {
    setSelectedIds([]);
    onSelect([]);
  };

  const isTwoColumn = items.length > COLUMN_THRESHOLD;

  return (
    <div>
      <Box p={2} borderRadius={3} width="100%" bgcolor="background.paper">
        <Box display="flex" justifyContent="space-between" alignItems="center" mb={1}>
          <Typography className='map-legend-title'>{title}</Typography>
          <Tooltip title="Clear Filter">
            <ButtonBase className="clear-filter-button" onClick={clearFilter}>
              <Typography variant="body2" sx={{ mr: 1 }}>Clear filters </Typography><ClearAllIcon fontSize="medium" />
            </ButtonBase>
          </Tooltip>
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={isTwoColumn ? '1fr 1fr' : '1fr'}
          gap={1}
          maxHeight={250}
          overflow="auto"
        >
          {items.map((category) => {
            const selected = selectedIds.includes(category);
            return (
              <ButtonBase
                key={category}
                onClick={() => toggleSelect(category)}
                sx={{
                  display: 'flex',
                  alignItems: 'left',
                  justifyContent: 'flex-start',
                  px: 1,
                  py: 0.5,
                  borderRadius: 1,
                  bgcolor: selected ? 'action.selected' : 'transparent',
                  '&:hover': { bgcolor: 'action.hover' },
                  textAlign: 'left',
                }}
              >
                <RoomIcon htmlColor={getMarkerColor(category)} sx={{ mr: 1 }} />
                <Typography variant="body2" sx={{ whiteSpace: 'nowrap' }}>
                  {titleCase(category)}
                </Typography>
              </ButtonBase>
            );
          })}
        </Box>
      </Box>
    </div>
  );
};

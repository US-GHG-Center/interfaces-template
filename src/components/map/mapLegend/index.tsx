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
  description: string;
}

export const MapLegend: React.FC<MapLegendProps> = ({ items, onSelect, title = '', description = '' }) => {
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
      <Box p={2} borderRadius={3} width="100%" bgcolor="background.paper" className="map-legend-container">
        <Box display="flex" alignItems="left" flexDirection={'column'}>
          <Box display="flex" justifyContent="space-between" alignItems="center">
            <Typography className='map-legend-title'>{title}</Typography>
            <Tooltip title="Clear Filter">
              <ButtonBase className="clear-filter-button" onClick={clearFilter} sx={{ color: 'text.secondary' }}>
                <Typography variant="body2" sx={{ mr: 1 }}>Clear filters </Typography><ClearAllIcon fontSize="medium" />
              </ButtonBase>
            </Tooltip>
          </Box>
          <Typography className='map-legend-description'>
            {description}
          </Typography>
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
                disableRipple
                key={category}
                onClick={() => toggleSelect(category)}
                className={`marker-category-button ${selected ? 'selected' : ''}`}
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

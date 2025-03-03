import { useState, useEffect } from 'react';
import { Slider, Typography, Box } from '@mui/material';
import moment from 'moment';
/*
      Filter stacItem based on the date range

      @param {STACItem} vizItems   - An array of STACitems from which filtering is to be done
      @param {function} onFilteredVizItems -   with filtered vizItems when date range is selected
      
*/

export function FilterByDate({ vizItems, onFilteredVizItems }) {
  const minDate = moment('2018-01-01').valueOf();
  const maxDate = moment().valueOf();

  const [dateRange, setDateRange] = useState([minDate, maxDate]);

  useEffect(() => {
    if (!vizItems.length) return;

    const filteredVizItems = vizItems.filter((vizItem) => {
      const vizItemDate = moment(vizItem?.properties?.datetime).valueOf();
      return vizItemDate >= dateRange[0] && vizItemDate <= dateRange[1];
    });

    onFilteredVizItems(filteredVizItems);
  }, [dateRange, vizItems, onFilteredVizItems]);

  const handleSliderChange = (_, newValue) => {
    setDateRange(newValue);
  };

  return (
    <Box sx={{ width: '90%', padding: '20px' }}>
      <Typography gutterBottom sx={{ marginBottom: '10px', color: '#082A63', display:'flex',justifyContent:'center',fontWeight:550, }}>
      {moment(dateRange[0]).format('ddd, DD MMM YYYY')} - {moment(dateRange[1]).format('ddd, DD MMM YYYY')}
      </Typography>

      <Box sx={{ position: 'relative', height: '8px', marginTop: '10px' }}>
        {/* MUI Slider */}
        <Slider
          value={dateRange}
          onChange={handleSliderChange}
          getAriaLabel={() => 'Date range'}
          min={minDate}
          max={maxDate}
          step={86400000} // One day step
          sx={{
            height: '8px',
            '& .MuiSlider-track': {
              backgroundColor: '#082A63',
              height: '14px',
              borderRadius: '1px',
            },
            '& .MuiSlider-rail': {
              backgroundColor: '#ffffff',
              height: '14px',
              borderRadius: '3px',
              border: '1px solid #aaaaaa',
            },
            '& .MuiSlider-thumb': {
              width: '22px',
              height: '26px',
              backgroundColor: '#fffffe',
              border: '1px solid #eeeeee',
              borderRadius:2,
              boxShadow: '0 0 0px rgba(0,0,0,0.2)',
              '&:hover': {
                boxShadow: '0 0 8px rgba(0,0,0,0.3)',
              },
            }
          }}
        />
      </Box>
    </Box>
  );
}
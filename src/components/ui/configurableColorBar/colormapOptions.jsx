import React, { useState } from 'react';
import { 
  Box, 
  Typography, 
  Slider, 
  TextField, 
  Switch,
  Grid,
  Card,
  Tooltip
} from '@mui/material';

import { ColorBar } from '../colorBar';
import { COLOR_MAP } from '../colorBar/helper';


export const ColormapOptions = ({VMIN, VMAX, colorMap, setCurrVMAX, setCurrVMIN, setSelColorMap, setIsReverse}) => {
  // State for the input values
  const [minValue, setMinValue] = useState(VMIN);
  const [maxValue, setMaxValue] = useState(VMAX);
  const [reverse, setReverse] = useState(false);
  if (colorMap.includes("_r")) colorMap = colorMap.replaceAll("_r", ""); // sanitize reverse colormap in the default colormap.
  const [selectedColorbar, setSelectedColorbar] = useState(colorMap);
  const [error, setError] = useState(false);
  
  // Handle changes to the min input value
  const handleMinInputChange = (event) => {
    const value = parseFloat(event.target.value);

    if (isNaN(value)) return;

    if ((maxValue - value) <= 0) {
      setError(true)
      return;
    } // error message.

    setError(false);
    setMinValue(value);
    setCurrVMIN(value);
  };
  
  // Handle changes to the slider
  const handleSliderChange = (event, newValue, activeThumb) => {
    const [ leftVal, rightVal ] = newValue;

    if (leftVal === rightVal) return;

    if (rightVal > leftVal) setError(false);

    setMaxValue(rightVal);
    setCurrVMAX(rightVal);
    setMinValue(leftVal);
    setCurrVMIN(leftVal);

    // const minDistance = (VMAX - VMIN)/20;
    // if (rightVal - leftVal < minDistance) {
    //   if (activeThumb === 0) {
    //     const clamped = Math.min(leftVal, 100 - minDistance);
    //     setMaxValue(clamped + minDistance);
    //     setCurrVMAX(clamped + minDistance);
    //     setMinValue(clamped);
    //     setCurrVMIN(clamped);
    //   } else {
    //     const clamped = Math.max(rightVal, minDistance);
    //     setMaxValue(clamped);
    //     setCurrVMAX(clamped);
    //     setMinValue(clamped - minDistance);
    //     setCurrVMIN(clamped - minDistance);
    //   }
    // } else {
    //   setMaxValue(rightVal);
    //   setCurrVMAX(rightVal);
    //   setMinValue(leftVal);
    //   setCurrVMIN(leftVal);
    // }
  };
  
  // Handle changes to the max input value
  const handleMaxInputChange = (event) => {
    const value = parseFloat(event.target.value);
    if (isNaN(value)) return;

    if ((value - minValue) <= 0) {
      setError(true)
      return;
    } // error message.

    setError(false);
    setMaxValue(value);
    setCurrVMAX(value);
  };
  
  // Handle toggling the reverse switch
  const handleReverseChange = (event) => {
    setReverse(event.target.checked);
    setIsReverse(event.target.checked);
  };
  
  // Handle selecting a colorbar
  const handleColorbarClick = (name) => {
    setSelectedColorbar(name);
    setSelColorMap(name);
  };
  
  return (
    <Box sx={{ p: 2, maxWidth: 350, border: "1px solid #f5f5f5", borderRadius: 1 }}>
      <Typography fontWeight="medium" gutterBottom>
        Colormap options
      </Typography>
      
      {/* Rescale section with text input and slider */}
      <Box sx={{ mb: 2 }}>
        <Typography variant="body2" gutterBottom>
          Rescale
        </Typography>
        <Grid container spacing={1} alignItems="center">
          <Grid item xs={3}>
            <Tooltip title={minValue}>
              <TextField
                value={minValue}
                onChange={handleMinInputChange}
                size="small"
                type="number"
                fullWidth
              />
            </Tooltip>
          </Grid>
          <Grid item xs={6} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Slider
              value={[minValue, maxValue]}
              onChange={handleSliderChange}
              min={parseFloat(VMIN)}
              max={parseFloat(VMAX)}
              step={parseFloat((VMAX-VMIN)/20)}
              size="small"
              sx={{ 
                width: '100%',
                marginLeft: '5px',
                marginRight: '5px',
                // Custom styling to match the image
                '& .MuiSlider-rail': {
                  height: 2,
                },
                '& .MuiSlider-track': {
                  height: 2,
                },
                '& .MuiSlider-thumb': {
                  width: 14,
                  height: 14,
                  border: '2px solid currentColor',
                  backgroundColor: '#fff',
                },
              }}
              disableSwap   // Prevents thumbs from swapping positions
            />
          </Grid>
          <Grid item xs={3}>
            <Tooltip title={maxValue}>
              <TextField
                value={maxValue}
                onChange={handleMaxInputChange}
                size="small"
                type="number"
                fullWidth
              />
            </Tooltip>
          </Grid>
        </Grid>
      </Box>

      {error && <Typography variant="caption" gutterBottom sx={{ display: 'block', color: "red" }}>Min should be smaller than Max recale.</Typography>}

      <hr/>

      {/* Reverse toggle */}
      <Box sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
        <Typography variant="body2" sx={{ flex: 1 }}>
          Reverse
        </Typography>
        <Switch
          checked={reverse}
          onChange={handleReverseChange}
          size="small"
        />
      </Box>
      
      {/* Colorbar list */}
      {Object.keys(COLOR_MAP).filter((elem) => {
        if (elem.includes("default")) return false;
        return !elem.includes("_r")
      }).map((colorbarName) => {
        return (
        <Box 
          key={colorbarName}
          onClick={() => handleColorbarClick(colorbarName)}
          sx={{ 
            mb: 1,
            cursor: 'pointer',
            bgcolor: selectedColorbar === colorbarName ? 'white' : 'transparent',
            borderRadius: 1,
            p: selectedColorbar === colorbarName ? 1 : 0,
          }}
        >
          <Card>
            <ColorBar VMIN={VMIN} VMAX={VMAX} STEP={(VMAX-VMIN)/5} colorMap={colorbarName} skipStep skipLabel={false}/>
          </Card>
        </Box>
      )})}
    </Box>
  );
};

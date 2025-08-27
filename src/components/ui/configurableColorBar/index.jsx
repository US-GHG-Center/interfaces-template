import { useEffect, useState } from "react";

import {  
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography
} from '@mui/material';

// import hamburger icon and close icon
import HamburgerMenu from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import { ColormapOptions } from './colormapOptions';
import { ColorBar } from '../colorBar';

import './index.css';

/**
 * @typedef {Object} ConfigurableColorBarProps
 * @property {string} id - Unique identifier for this color bar instance.
 * @property {number} VMINLimit - Absolute minimum value allowed for the color scale.
 * @property {number} VMAXLimit - Absolute maximum value allowed for the color scale.
 * @property {string} colorMap - Initial colormap name (e.g., 'magma', 'viridis').
 * @property {(v: number) => void} setVMIN - Callback to update the committed minimum value.
 * @property {(v: number) => void} setVMAX - Callback to update the committed maximum value.
 * @property {(v: string) => void} setColorMap - Callback to update the colormap.
 * @property {string} [unit] - Optional unit label displayed under the color bar.
 */

/**
 * ConfigurableColorBar component for displaying and customizing a color scale.
 * Includes controls for adjusting the range (VMIN/VMAX), selecting a colormap,
 * and toggling reverse mode.
 * 
 * @param {ConfigurableColorBarProps} props
 */
export const ConfigurableColorBar = ({ 
    id,
    VMINLimit,
    VMAXLimit,
    colorMap,
    setVMIN,
    setVMAX,
    setColorMap,
    unit='',
  }) => {
  const [localVMIN, setLocalVMIN] = useState(VMINLimit);
  const [localVMAX, setLocalVMAX] = useState(VMAXLimit);

  const [currColorMap, setCurrColorMap] = useState(colorMap);
  const [selColorMap, setSelColorMap] = useState(colorMap);
  const [isReversed, setIsReverse] = useState(false);

  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    // key == dataProduct
    // id == dataProduct + selectedCycloneId
    let colorMap = selColorMap;
    if (isReversed) colorMap += "_r";
    setCurrColorMap(colorMap);
    setColorMap(colorMap);
    setVMIN(localVMIN);
    setVMAX(localVMAX);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localVMIN, localVMAX, selColorMap, isReversed])

  useEffect(() => {
    setLocalVMIN(VMINLimit);
    setLocalVMAX(VMAXLimit);
  }, [VMINLimit, VMAXLimit]);

  return (
    <Accordion
      expanded={expanded}
      onChange={() => setExpanded(!expanded)}
      className="configurable-colorbar-container"
    >
      <AccordionSummary
        expandIcon={expanded ? <CloseIcon /> : <HamburgerMenu />}
      >
        <div style={{ display: 'flex', flexDirection: 'column', width: '100%', marginRight: '1rem' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
            <span style={{ fontSize: '1rem' }}>
              {currColorMap.replace(/_r/g, '')}
            </span>
            <span style={{ fontSize: '0.8rem', color: '#666' }}>
              {isReversed ? 'Reversed' : ''}
            </span>
          </div>
          
          <ColorBar
            VMIN={localVMIN}
            VMAX={localVMAX}
            colorMap={currColorMap}
            STEP={(localVMAX-localVMIN)/5}
          />
          
          { unit && <div style={{ textAlign: 'center'}}>
            <Typography style={{ fontSize: '.9rem', color: '#666', marginTop: '0.5rem' }}>{unit}</Typography>
          </div> }
         
        </div>
      </AccordionSummary>
      <AccordionDetails className="configurable-colorbar-details">
        <ColormapOptions
          localVMin={localVMIN}
          localVMax={localVMAX}
          minLimit={VMINLimit}
          maxLimit={VMAXLimit}
          colorMap={colorMap}
          setLocalVMAX={setLocalVMAX}
          setLocalVMIN={setLocalVMIN}
          setSelColorMap={setSelColorMap}
          setIsReverse={setIsReverse}
        />
      </AccordionDetails>
    </Accordion>
  )
}

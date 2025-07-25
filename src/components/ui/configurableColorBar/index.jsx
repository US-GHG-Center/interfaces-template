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
import { Padding } from "@mui/icons-material";

import './index.css';

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
  const [currVMIN, setCurrVMIN] = useState(VMINLimit);
  const [currVMAX, setCurrVMAX] = useState(VMAXLimit);
  const [currColorMap, setCurrColorMap] = useState(colorMap);
  const [isReversed, setIsReverse] = useState(false);
  const [selColorMap, setSelColorMap] = useState(colorMap);

  const [expanded, setExpanded] = useState(false);


  useEffect(() => {
    // key == dataProduct
    // id == dataProduct + selectedCycloneId
    let colorMap = selColorMap;
    if (isReversed) colorMap += "_r";
    setCurrColorMap(colorMap);
    setColorMap(colorMap);
    setVMIN(currVMIN);
    setVMAX(currVMAX);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currVMIN, currVMAX, selColorMap, isReversed])

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
              {isReversed ? 'Reversed' : 'Normal'}
            </span>
          </div>
          
          <ColorBar
            VMIN={currVMIN}
            VMAX={currVMAX}
            colorMap={currColorMap}
            STEP={(currVMAX-currVMIN)/5}
          />
          
          { unit && <div style={{ textAlign: 'center'}}>
            <Typography style={{ fontSize: '.9rem', color: '#666', marginTop: '0.5rem' }}>{unit}</Typography>
          </div> }
         
        </div>
      </AccordionSummary>
      <AccordionDetails className="configurable-colorbar-details">
        <ColormapOptions
          VMIN={VMINLimit}
          VMAX={VMAXLimit}
          colorMap={colorMap}
          setCurrVMAX={setCurrVMAX}
          setCurrVMIN={setCurrVMIN}
          setSelColorMap={setSelColorMap}
          setIsReverse={setIsReverse}
        />
      </AccordionDetails>
    </Accordion>
  )
}

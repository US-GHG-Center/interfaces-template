import { useEffect, useState } from "react";

import {  
  Accordion,
  AccordionSummary,
  AccordionDetails
} from '@mui/material';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import { ColormapOptions } from './colormapOptions';
import { ColorBar } from '../colorBar';
import { Padding } from "@mui/icons-material";

export const ConfigurableColorBar = ({ id, VMINLimit, VMAXLimit, colorMap, setVMIN, setVMAX, setColorMap }) => {
  const [currVMIN, setCurrVMIN] = useState(VMINLimit);
  const [currVMAX, setCurrVMAX] = useState(VMAXLimit);
  const [currColorMap, setCurrColorMap] = useState(colorMap);
  const [isReversed, setIsReverse] = useState(false);
  const [selColorMap, setSelColorMap] = useState(colorMap);


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
    <Accordion>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
      >
        <div style={{ padding: '.8rem' }}>
          <ColorBar
            VMIN={currVMIN}
            VMAX={currVMAX}
            colorMap={currColorMap}
            STEP={(currVMAX-currVMIN)/5}
          />
        </div>
      </AccordionSummary>
      <AccordionDetails>
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

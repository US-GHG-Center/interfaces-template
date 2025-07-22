import { useEffect, useRef, useMemo } from "react";
import Typography from '@mui/material/Typography';

import { createColorbar } from "./helper";
import * as d3 from "d3";

import "./index.css";

export const ColorBar = ({VMIN, VMAX, STEP, colorMap, skipStep=false, skipLabel=true}) => {
    const colorBarScale = useRef();

    useEffect(() => {
        const colorbar = d3.select(colorBarScale.current);
        createColorbar(colorbar, VMIN, VMAX, STEP, colorMap, skipStep);

        return () => {
            colorbar.selectAll("*").remove();
        }
    }, [VMIN, VMAX, STEP, colorMap, skipStep, skipLabel]);

    return (
        <div id="colorbar">
            <div ref={colorBarScale} className="colorbar-scale"></div>
            {
                !skipLabel && <Typography variant="subtitle2" gutterBottom sx={{ width: "40%" }} className="colorbar-label">
                    {colorMap}
                </Typography>
            }
        </div>
    )
}

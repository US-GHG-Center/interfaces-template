import * as d3 from 'd3';

const gistEarthColors = [
  "#000000", "#00274D", "#26466D", "#4D657D", "#73948D",
  "#B3B37D", "#E6C26D", "#F2E6CE", "#FFFFFF"
];

const gistEarth = (t) => {
  const clamped = Math.max(0, Math.min(1, t));
  const scaled = clamped * (gistEarthColors.length - 1);
  const index = Math.floor(scaled);
  const fraction = scaled - index;
  
  if (index >= gistEarthColors.length - 1) {
    return gistEarthColors[gistEarthColors.length - 1];
  }
  
  return d3.interpolate(gistEarthColors[index], gistEarthColors[index + 1])(fraction);
};

export const COLOR_MAP = {
  rdylgn: d3.interpolateRdYlGn, //imerg
  rdylgn_r: (t) => d3.interpolateRdYlGn(1 - t), //imerg
  turbo: d3.interpolateTurbo, //sst
  turbo_r: (t) => d3.interpolateTurbo(1 - t), //sst
  bupu: d3.interpolateBuPu, //viirs,modis
  bupu_r: (t) => d3.interpolateBuPu(1 - t), //viirs,modis
  viridis: d3.interpolateViridis, //cygnss
  viridis_r: (t) => d3.interpolateViridis(1 - t), //cygnss
  greys: d3.interpolateGreys, // goes 8
  greys_r: (t) => d3.interpolateGreys(1 - t), //goes02
  cubehelix: (t) => d3.interpolateCubehelixDefault(t), //goes13
  cubehelix_r: (t) => d3.interpolateCubehelixDefault(1 - t), //goes13
  magma: d3.interpolateMagma,
  magma_r: (t) => d3.interpolateMagma(1 - t),
  reds: d3.interpolateReds,
  reds_r: (t) => d3.interpolateReds(1 - t),
  gist_earth: gistEarth,
  gist_earth_r: (t) => gistEarth(1 - t),
};

export const createColorbar = (
  colorbar,
  VMIN = -92,
  VMAX = 100,
  STEP = 30,
  colorMap = 'magma',
  skipStep = false
) => {
  // Create a color scale using D3
  if (!(colorMap in COLOR_MAP)) {
    colorMap = 'magma';
  }

  const colorScale = d3
    .scaleSequential(COLOR_MAP[colorMap])
    .domain([VMIN, VMAX]); // Set VMIN and VMAX as your desired min and max values

  colorbar
    .append('svg')
    .attr('class', 'colorbar-svg')
    .append('g')
    .selectAll('rect')
    .data(d3.range(VMIN, VMAX, (VMAX - VMIN) / 100)) // Adjust the number of color segments as needed
    .enter()
    .append('rect')
    .attr('height', 12) // height of the svg color segment portion
    .attr('width', '100%') // Adjust the width of each color segment
    .attr('x', (d, i) => i * 3)
    .attr('fill', (d) => colorScale(d));

  if (skipStep) {
    return;
  }

  // Define custom scale labels
  const scaleLabels = generateScale(VMIN, VMAX, STEP);

  // Create a container for color labels
  colorbar
    .append('div')
    .attr('class', 'colorbar-scale-tick-label-container')
    .selectAll('div')
    .data(scaleLabels)
    .enter()
    .append('div')
    .attr('class', 'colorbar-scale-tick-label')
    .text((d) => d); // Set the tick label text
};

function generateScale(min, max, step) {
  const numbers = [];
  for (let i = min; i <= max + step / 10; i += step) {
    const value = Number(i.toFixed(10));
    if (value % 1 !== 0) {
      numbers.push(value.toFixed(2));
    } else {
      numbers.push(value);
    }
  }
  if (numbers.length > 0) {
    numbers[numbers.length - 1] = String(numbers[numbers.length - 1]) + '+';
  }
  return numbers;
}

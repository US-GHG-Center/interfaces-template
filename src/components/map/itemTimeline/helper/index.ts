import * as d3 from 'd3';
import moment from 'moment';

import { STACItem } from '../../../../dataModel';

/**
 * Helper function to check if two dates are in the same month and year
 */
export function isSameMonthAndYear(d1: Date, d2: Date): boolean {
  return (
    d1.getUTCFullYear() === d2.getUTCFullYear() &&
    d1.getUTCMonth() === d2.getUTCMonth()
  );
}

/**
 * Parses and sorts STAC items by their datetime property.
 * Returns an array of objects containing only `id` and parsed `date`.
 */
export function parseItems(vizItems: STACItem[]) {
  return vizItems
    .map(item => ({
      id: item.id,
      date: moment.utc(item.properties.start_datetime).toDate(),
    }))
    .sort((a, b) => a.date.getTime() - b.date.getTime());
}

/**
 * Returns the base X coordinate for the timeline.
 * This is used to calculate the position of the timeline points.
 */
export function getBaseX(
  dates: Date[], 
  width: number, 
  margin: { left: number, right: number }
): d3.ScaleTime<number, number> | null {
  if (!dates.length || !width) return null;

  const minMoment = moment.min(dates.map(d => moment(d))).subtract(20, 'days');
  const maxMoment = moment.max(dates.map(d => moment(d))).add(20, 'days');

  return d3.scaleTime()
    .domain([minMoment.toDate(), maxMoment.toDate()])
    .range([margin.left, width - margin.right]);
}

/**
 * Centers the timeline on a specific date.
 * Adjusts the SVG transform to center the date in the viewport.
 * Requires a zoom instance (e.g., zoomRef.current) to be passed in.
 */
export function centerOnDate(
  svgRef: React.RefObject<SVGSVGElement>,
  date: Date,
  scale: number,
  width: number,
  margin: { left: number; right: number },
  baseX: d3.ScaleTime<number, number>,
  zoomInstance: d3.ZoomBehavior<SVGSVGElement, unknown>
) {
  if (!svgRef.current) return;
  const svg = d3.select(svgRef.current);
  const x = baseX(date);
  const center = (width - margin.left - margin.right) / 2 + margin.left;
  const idealTranslateX = center - x * scale;
  const maxX = margin.left * (1 - scale);
  const minX = (width - margin.right) * (1 - scale);
  const tx = Math.max(minX, Math.min(idealTranslateX, maxX));
  const transform = d3.zoomIdentity.translate(tx, 0).scale(scale);
  svg.transition().duration(250).call(zoomInstance.transform as any, transform);
}

/** * Updates the highlights on the timeline based on the active date.
 * Highlights the active circle and updates the fill color of other circles.
 */
 export function updateHighlights(
  svgRef: React.RefObject<SVGSVGElement>,
  parsedItems: { id: string; date: Date }[],
  activeDate: Date,
  baseX: d3.ScaleTime<number, number> | null,
  transform: d3.ZoomTransform
) {
  if (!baseX || !svgRef.current) return;
  const g = d3.select(svgRef.current).select('g');
  const x = transform.rescaleX(baseX);

  g.selectAll('circle:not(.active-circle)')
    .attr('fill', d =>
      (d as { date: Date }).date.getTime() === activeDate.getTime()
        ? '#3b82f6'
        : '#9ca3af'
    );

  const activeItem = parsedItems.find(d => d.date.getTime() === activeDate.getTime());
  if (!activeItem) return;

  g.select('.active-circle')
    .attr('cx', x(activeItem.date))
    .attr('cy', 0);
}


/* Returns the tick dates for the timeline based on the current zoom transform.
 * This function calculates the appropriate tick dates based on the current zoom level.
 * It returns an array of dates that should be used for the timeline ticks.
 */
export function getTickDates(
  dates: Date[],
  transform: d3.ZoomTransform,
  baseX: d3.ScaleTime<number, number>,
  paddingDays = 20
): { ticks: Date[]; ppm: number } {
  if (!dates.length) return { ticks: [], ppm: 0 };

  const minDate = moment.utc(d3.min(dates)!).subtract(paddingDays, 'days').toDate();
  const maxDate = moment.utc(d3.max(dates)!).add(paddingDays, 'days').toDate();

  const x = transform.rescaleX(baseX);
  const totalRange = x(maxDate) - x(minDate);
  const months = d3.utcMonths(minDate, maxDate);
  const ppm = months.length > 1 ? totalRange / months.length : totalRange;

  let ticks: Date[] = [];
  if (ppm > 55) ticks = d3.utcMonths(minDate, maxDate);
  else if (ppm > 34) ticks = d3.utcMonths(minDate, maxDate, 2);
  else if (ppm > 12) ticks = d3.utcMonths(minDate, maxDate, 6);
  else if (ppm > 4) ticks = d3.utcYears(minDate, maxDate);
  else if (ppm > 2) ticks = d3.utcYears(minDate, maxDate, 2);
  else ticks = d3.utcYears(minDate, maxDate, 5);

  return { ticks, ppm };
}

/** * Moves the active index based on the direction and updates the timeline.
 * Handles left, right, first, and last movements.
 * Centers the timeline on the new active date.
 */
export function moveToIndex(
  direction: 'left' | 'right' | 'first' | 'last',
  activeIndex: number,
  dates: Date[],
  svgRef: React.RefObject<SVGSVGElement>,
  dimensions: { width: number; height: number },
  margin: { left: number; right: number },
  baseX: d3.ScaleTime<number, number>,
  zoom: d3.ZoomBehavior<SVGSVGElement, unknown>,
  handleClick: (newIndex: number) => void
) {
  let newIndex = activeIndex;
  if (direction === 'first') newIndex = 0;
  else if (direction === 'last') newIndex = dates.length - 1;
  else newIndex = direction === 'left'
    ? Math.max(0, activeIndex - 1)
    : Math.min(dates.length - 1, activeIndex + 1);

  handleClick(newIndex);

  const svg = d3.select(svgRef.current);
  const currentTransform = d3.zoomTransform(svg.node()!);

  centerOnDate(
    svgRef,
    dates[newIndex],
    currentTransform.k,
    dimensions.width,
    margin,
    baseX,
    zoom
  );
}

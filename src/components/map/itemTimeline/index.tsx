import { useEffect, useRef, useState, useMemo } from 'react';
import * as d3 from 'd3';

import ReplayIcon from '@mui/icons-material/Replay';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import { STACItem } from '../../../dataModel';

import { isSameMonthAndYear } from './helper';

import './index.css';

interface VizItemTimelineProps {
  vizItems: STACItem[];
  onVizItemSelect: (id: string) => void;
}

export const VizItemTimeline = ({
  vizItems = [],
  onVizItemSelect = () => {},
  title = 'Timeline',
}: VizItemTimelineProps & { title?: string }) : JSX.Element => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const [dimensions, setDimensions] = useState({ width: 0, height: 50 });

  const parsedItems: { id: string; date: Date }[] = useMemo(() =>
    vizItems
      .map(item => ({
        id: item.id,
        date: d3.utcParse('%Y-%m-%dT%H:%M:%SZ')(item.properties.datetime) || new Date(item.properties.datetime),
      }))
      .sort((a, b) => a.date.getTime() - b.date.getTime())
  , [vizItems]);

  const dates = parsedItems.map(item => item.date);

  const [activeIndex, setActiveIndex] = useState(0);
  const activeDate = dates[activeIndex];
  const activeDateRef = useRef(activeDate);

  const margin = { left: 30, right: 30 };

  const updateHighlights = (activeDate: Date) => {
    const g = d3.select(svgRef.current).select('g');

   g.selectAll('circle:not(.active-circle)')
    .attr('fill', d =>
      (d as { date: Date }).date.getTime() === activeDate.getTime()
        ? '#3b82f6'
        : '#9ca3af'
    );

    // Update the active circle overlay position
    const x = getBaseX();
    if (!x) return;

    const activeItem = parsedItems.find(d => d.date.getTime() === activeDate.getTime());
    if (!activeItem) return;

    g.select('.active-circle')
      .attr('cx', x(activeItem.date))
      .attr('cy', 0);
  };


  const setActiveDateIndex = (idx: number) => {
    activeDateRef.current = dates[idx];
    setActiveIndex(idx);
    onVizItemSelect(parsedItems[idx].id);

    updateHighlights(activeDateRef.current);
  };

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const observer = new ResizeObserver(([entry]) => {
      setDimensions({ width: entry.contentRect.width, height: 60 });
    });
    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  const getBaseX = () => {
    if (!dates.length || !dimensions.width) return null;
    // add 20 day padding
    const minDate = d3.utcDay.offset(d3.min(dates)!, -20);
    const maxDate = d3.utcDay.offset(d3.max(dates)!, 20);
    return d3.scaleUtc()
      // .domain([d3.utcMonth.floor(minDate), d3.utcMonth.ceil(maxDate)])
      .domain([minDate, maxDate])
      .range([margin.left, dimensions.width - margin.right]);
  };

  const centerOnDate = (date: Date, scale: number) => {
    const svg = d3.select(svgRef.current);
    const baseX = getBaseX();
    if (!svg.node() || !baseX) return;
    const x = baseX(date);
    const center = (dimensions.width - margin.left - margin.right) / 2 + margin.left;
    const idealTranslateX = center - x * scale;
    const maxX = margin.left * (1 - scale);
    const minX = (dimensions.width - margin.right) * (1 - scale);
    const tx = Math.max(minX, Math.min(idealTranslateX, maxX));
    const transform = d3.zoomIdentity.translate(tx, 0).scale(scale);
    if (zoomRef.current) {
      svg.transition().duration(250).call(zoomRef.current.transform as any, transform);
    }
  }

  useEffect(() => {
    if (!dimensions.width || !dates.length) return;

    const svg = d3.select(svgRef.current);
    const svgNode = svg.node();
    if (!svgNode) return;

    const { width, height } = dimensions;
    svg.selectAll('*').remove();

    const baseX = getBaseX();
    if (!baseX) return;

    const clipId = 'timeline-clip-path';
    const clipPadding = 25;

    svg.append('defs').append('clipPath')
      .attr('id', clipId)
      .append('rect')
      .attr('x', margin.left - clipPadding)
      .attr('y', -height)
      .attr('width', (width - margin.left - margin.right) + (clipPadding * 2))
      .attr('height', height * 2);
    
      const g = svg.append('g')
      .attr('transform', `translate(0, ${height / 2})`)
      .attr('clip-path', `url(#${clipId})`);

    const render = (transform: d3.ZoomTransform) => {
      g.selectAll('*').remove();
      const x = transform.rescaleX(baseX);


      // Add 15 day padding to the min and max dates
      // todo: make this padding configurable
      const minDate = d3.utcDay.offset(d3.min(dates)!, -20);
      const maxDate = d3.utcDay.offset(d3.max(dates)!, 20);

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

      g.selectAll('lines')
        .data(ticks)
        .enter().append('line')
        .attr('x1', d => x(d))
        .attr('x2', d => x(d))
        .attr('y1', -height * 0.15)
        .attr('y2', height * 0.15)
        .attr('stroke', '#aaa');

      g.selectAll('labels')
        .data(ticks)
        .enter().append('text')
        .attr('x', d => x(d))
        .attr('y', -height * 0.35)
        .attr('text-anchor', 'middle')
        .attr('font-size', '10px')
        .attr('fill', '#6b7280')
        .text(d => ppm > 12 ? d3.utcFormat('%b %Y')(d) : d3.utcFormat('%Y')(d));

      g.append('line')
        .attr('x1', margin.left)
        .attr('x2', width - margin.right)
        .attr('stroke', '#d1d5db')
        .attr('stroke-width', 2);

      // Add labels for start and end dates if they are in the same month and year
      // This is to ensure that we have some labels in the timeline
      if (isSameMonthAndYear(minDate, maxDate)) {
        const forcedDates = [parsedItems[0].date, parsedItems[parsedItems.length - 1].date];
        const forcedOnly = forcedDates.filter(
          d => !ticks.some(t => t.getTime() === d.getTime())
        );

        g.selectAll('forced-labels')
          .data(forcedOnly)
          .enter().append('text')
          .attr('x', d => x(d))
          .attr('y', -height * 0.35)
          .attr('text-anchor', 'middle')
          .attr('font-size', '10px')
          .attr('fill', '#6b7280')
          .text(d => d3.utcFormat('%d %b')(d));
      }

      // Draw circles for each item  
      const circles = g.selectAll('circle')
        .data(parsedItems)
        .enter()
        .append('circle')
        .attr('cx', d => x(d.date))
        .attr('cy', 0)
        .attr('r', 5)
        .attr('fill', d => d.date.getTime() === activeDateRef.current.getTime() ? '#3b82f6' : '#9ca3af')
        .style('cursor', 'pointer')
        .on('click', (e, d) => {
          const idx = parsedItems.findIndex(item => item.id === d.id);
          setActiveDateIndex(idx);
        });

        // Remove previous active circle if any (prevent duplicates)
        g.selectAll('.active-circle').remove();

        // Append one persistent "active circle" on top
        g.append('circle')
          .attr('class', 'active-circle')
          .attr('r', 5)
          .attr('fill', '#3b82f6')
          .attr('cx', x(activeDateRef.current))
          .attr('cy', 0)
          .style('pointer-events', 'none');

      circles.append('title').text(d => d3.utcFormat('%Y-%m-%d')(d.date));
    };

    const zoom = d3.zoom<SVGSVGElement, unknown>()
      .scaleExtent([1, 40])
      .translateExtent([[margin.left, 0], [width - margin.right, 0]])
      .extent([[margin.left, 0], [width - margin.right, 0]])
      .on('zoom', e => render(e.transform));

    zoomRef.current = zoom;
    (svg as d3.Selection<SVGSVGElement, unknown, null, undefined>).call(zoom);
    render(d3.zoomIdentity);
    centerOnDate(activeDate, 1);
  }, [dimensions, parsedItems]);

  const move = (direction: string) => {
    let newIndex = activeIndex;
    if (direction === 'first') newIndex = 0;
    else if (direction === 'last') newIndex = dates.length - 1;
    else newIndex = direction === 'left' ? Math.max(0, activeIndex - 1) : Math.min(dates.length - 1, activeIndex + 1);
    setActiveDateIndex(newIndex);

    // Get the current zoom transform
    const svg = d3.select(svgRef.current);
    const currentTransform = d3.zoomTransform(svg.node()!);

    // Center on the new date with the current zoom level
    centerOnDate(dates[newIndex], currentTransform.k);

  };

  const resetZoom = () => centerOnDate(activeDate, 1);
  const format = d3.utcFormat('%Y-%m-%d');

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      {dimensions.width > 0 && (
        <div className="timeline-card">
          <div className="timeline-header">
            <span className="timeline-title">{title}</span>
            <div className="timeline-controls">
              <button className="timeline-button timeline-button-circle" onClick={resetZoom}><ReplayIcon /></button>
              <div className="timeline-divider"></div>
              <button className="timeline-button" onClick={() => move('first')}><FirstPageIcon /></button>
              <button className="timeline-button" onClick={() => move('left')}><KeyboardArrowLeftIcon /></button>
              <button className="timeline-button" onClick={() => move('right')}><KeyboardArrowRightIcon /></button>
              <button className="timeline-button" onClick={() => move('last')}><LastPageIcon /></button>
            </div>
          </div>
          <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
          <div className="timeline-footer">
            <div>Start<br /><strong>{format(dates[0])}</strong></div>
            <div style={{ textAlign: 'center' }}>Active<br /><strong>{format(activeDate)}</strong></div>
            <div style={{ textAlign: 'right' }}>End<br /><strong>{format(dates[dates.length - 1])}</strong></div>
          </div>
        </div>
      )}
    </div>
  );
}

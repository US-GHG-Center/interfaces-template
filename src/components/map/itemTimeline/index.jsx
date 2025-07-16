import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';


// import material-ui icons for timeline controls
import ReplayIcon from '@mui/icons-material/Replay';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

import './index.css';

export const VizItemTimeline = ({
  dates = [
    new Date('2002-03-01'),
    new Date('2002-03-04'),
    new Date('2005-07-10'),
    new Date('2008-10-05'),
  ],
  onDateChange = (d) => console.log('Selected date:', d),
  title = 'Timeline',
}) => {
  const svgRef = useRef();
  const zoomRef = useRef();
  const containerRef = useRef();
  const [activeDate, _setActiveDate] = useState(dates[0]);
  const activeDateRef = useRef(activeDate);
  const [dimensions, setDimensions] = useState({ width: 0, height: 60 });

  const margin = { left: 30, right: 30 };

  const setActiveDate = (date) => {
    activeDateRef.current = date;
    _setActiveDate(date);
  };

  useEffect(() => {
    const containerNode = containerRef.current;
    if (!containerNode) return;

    const resizeObserver = new ResizeObserver(entries => {
      if (entries[0]) {
        setDimensions({
          width: entries[0].contentRect.width,
          height: 60,
        });
      }
    });
    resizeObserver.observe(containerNode);
    return () => resizeObserver.disconnect();
  }, []);

  const minDate = d3.min(dates);
  const maxDate = d3.max(dates);
  const startDomain = d3.timeMonth.floor(minDate);
  const endDomain = d3.timeMonth.ceil(maxDate);
  

  const getBaseX = () => {
    if (dimensions.width === 0) return null;
    return d3.scaleTime().domain([startDomain, endDomain]).range([margin.left, dimensions.width - margin.right]);
  }

  const centerOnDate = (date, scale) => {
    const svg = d3.select(svgRef.current);
    const baseX = getBaseX();
    if (!svg.node() || !baseX) return;

    const dateX = baseX(date);
    const viewCenter = (dimensions.width - margin.left - margin.right) / 2 + margin.left;
    const idealTranslateX = viewCenter - dateX * scale;
    const maxTranslateX = margin.left * (1 - scale);
    const minTranslateX = (dimensions.width - margin.right) * (1 - scale);
    const translateX = Math.max(minTranslateX, Math.min(idealTranslateX, maxTranslateX));

    const newTransform = d3.zoomIdentity.translate(translateX, 0).scale(scale);
    svg.transition().duration(250).call(zoomRef.current.transform, newTransform);
  };
  
  // Main D3 setup effect
  useEffect(() => {
    if (dimensions.width === 0) return;
    const { width, height } = dimensions;
    const baseX = getBaseX();
    if (!baseX) return;

    const svg = d3.select(svgRef.current);
    svg.selectAll('*').remove();

    // Clip path to prevent labels from being clipped
    const clipId = 'timeline-clip-path';
    const clipPadding = 25;

    svg.append('defs')
      .append('clipPath')
      .attr('id', clipId)
      .append('rect')
      .attr('x', margin.left - clipPadding) // Start slightly before the margin
      .attr('y', -height)
      .attr('width', (width - margin.left - margin.right) + (clipPadding * 2)) // Add padding to both sides
      .attr('height', height * 2);

    // Apply the clip path to the main group element
    const g = svg.append('g')
      .attr('transform', `translate(0, ${height / 2})`)
      .attr('clip-path', `url(#${clipId})`);

    const render = (transform) => {
      g.selectAll('*').remove();
      const x = transform.rescaleX(baseX);
      const totalRange = x(endDomain) - x(startDomain);
      const months = d3.timeMonths(startDomain, endDomain);
      const pixelsPerMonth = months.length > 1 ? totalRange / months.length : totalRange;

      let tickDates;
      if (pixelsPerMonth > 55) tickDates = d3.timeMonths(startDomain, endDomain);
      else if (pixelsPerMonth > 34) tickDates = d3.timeMonths(startDomain, endDomain, 2);
      else if (pixelsPerMonth > 12) tickDates = d3.timeMonths(startDomain, endDomain, 6);
      else if (pixelsPerMonth > 4) tickDates = d3.timeYears(startDomain, endDomain);
      else if (pixelsPerMonth > 2) tickDates = d3.timeYears(startDomain, endDomain, 2);
      else tickDates = d3.timeYears(startDomain, endDomain, 5);
      
      g.selectAll('month-lines').data(tickDates).enter().append('line')
        .attr('x1', d => x(d)).attr('x2', d => x(d))
        .attr('y1', -height * 0.15).attr('y2', height * 0.15).attr('stroke', '#aaa');
      g.selectAll('labels').data(tickDates).enter().append('text')
        .attr('x', d => x(d)).attr('y', -height * 0.35).attr('text-anchor', 'middle')
        .attr('font-size', '10px').attr('fill', '#6b7280')
        .text(d => pixelsPerMonth > 12 ? d3.timeFormat('%b %Y')(d) : d3.timeFormat('%Y')(d));

      g.append('line')
        .attr('x1', margin.left).attr('x2', width - margin.right)
        .attr('stroke', '#d1d5db').attr('stroke-width', 2);

      const circles = g.selectAll('circle').data(dates).enter().append('circle')
        .attr('cx', d => x(d)).attr('cy', 0).attr('r', 5)
        .attr('fill', d => d.getTime() === activeDateRef.current.getTime() ? '#3b82f6' : '#9ca3af')
        .style('cursor', 'pointer');
      circles.append('title').text(d => d3.timeFormat('%Y-%m-%d')(d));
      circles.on('click', (event, date) => {
        const currentT = d3.zoomTransform(svg.node());
        setActiveDate(date);
        onDateChange(date);
        centerOnDate(date, currentT.k);
      });
    };

    const zoom = d3.zoom()
      .scaleExtent([1, 40])
      .translateExtent([[margin.left, 0], [width - margin.right, 0]])
      .extent([[margin.left, 0], [width - margin.right, 0]])
      .on('zoom', (event) => render(event.transform));

    zoomRef.current = zoom;
    svg.call(zoom);

    render(d3.zoomIdentity);
    centerOnDate(activeDate, 1);

  }, [dimensions]);

  // Handles date changes, and calls the main centerOnDate function to adjust the view
  useEffect(() => {
    if (dimensions.width === 0 || !svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const currentT = d3.zoomTransform(svg.node());
    centerOnDate(activeDate, currentT.k);
  }, [activeDate]);
  
  const move = (direction) => {
    const idx = dates.findIndex(d => d.getTime() === activeDate.getTime());
    let newIdx;
    if (direction === 'first') newIdx = 0;
    else if (direction === 'last') newIdx = dates.length - 1;
    else newIdx = direction === 'left' ? Math.max(idx - 1, 0) : Math.min(idx + 1, dates.length - 1);
    setActiveDate(dates[newIdx]);
  };

  const resetZoom = () => {
    if (dimensions.width === 0) return;
    centerOnDate(activeDate, 1);
  };
  
  const format = d3.utcFormat('%Y-%m-%d');

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      {dimensions.width > 0 && (
        <div className="timeline-card">
          <div className="timeline-header">
            <span className="timeline-title">{title}</span>

            <div className="timeline-controls">
              <button className="timeline-button timeline-button-circle" onClick={resetZoom} title="Reset Zoom">
                <ReplayIcon />
              </button>

              <div className="timeline-divider"></div>

              <button className="timeline-button" onClick={() => move('first')} title="First">
                <FirstPageIcon />
              </button>
              <button className="timeline-button" onClick={() => move('left')} title="Previous">
                <KeyboardArrowLeftIcon />
              </button>
              <button className="timeline-button" onClick={() => move('right')} title="Next">
                <KeyboardArrowRightIcon />
              </button>
              <button className="timeline-button" onClick={() => move('last')} title="Last">
                <LastPageIcon />
              </button>
            </div>
          </div>
          <div>
            <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
            <div className="timeline-footer">
              <div>
                Start Date<br />
                <span className="timeline-footer-item"><strong>{format(dates[0])}</strong></span>
              </div>
              <div style={{ textAlign: 'center' }}>
                Active Date<br />
                <span className="timeline-footer-item"><strong>{format(activeDate)}</strong></span>
              </div>
              <div style={{ textAlign: 'right' }}>
                End Date<br />
                <span className="timeline-footer-item"><strong>{format(dates[dates.length - 1])}</strong></span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
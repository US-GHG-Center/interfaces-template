// This file implements a timeline visualization for STAC items using D3.js and React.
// It allows users to select and hover over items, displaying their dates on a timeline.

// Import react libraries and hooks
import { useEffect, useRef, useState, useMemo } from 'react';

// Import D3.js for timeline rendering and interaction
import * as d3 from 'd3';
import Tooltip from '@mui/material/Tooltip';

// MUI Icons for timeline controls
import ReplayIcon from '@mui/icons-material/Replay';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

// MUI Typography for text rendering
import Typography from '@mui/material/Typography';


// Data model import
import { STACItem } from '../../../dataModel';

// Helper functions
import {
  parseItems,
  getBaseX,
  centerOnDate,
  updateHighlights,
  getTickDates,
  moveToIndex
} from './helper';

// Stylesheet import
import './index.css';


// Define the props for the VizItemTimeline component
interface VizItemTimelineProps {
  vizItems: STACItem[];
  onVizItemSelect: (id: string) => void;
  activeItemId?: string | null;
  onVizItemHover?: (id: string) => void;
  hoveredItemId?: string | null;
  title?: string;
}


// The main component that renders the timeline visualization
export const VizItemTimeline = ({
  vizItems = [],
  onVizItemSelect = () => { },
  activeItemId = null,
  onVizItemHover = () => { },
  hoveredItemId = null,
  title = 'Timeline',
}: VizItemTimelineProps): JSX.Element => {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const zoomRef = useRef<d3.ZoomBehavior<SVGSVGElement, unknown> | null>(null);
  const transformRef = useRef<d3.ZoomTransform>(d3.zoomIdentity);
  const containerRef = useRef<HTMLDivElement | null>(null);

  /* 
    Refs to track user interactions with the timeline points
    These refs help distinguish between user clicks/hover on the timeline itself
    vs programmatic changes (e.g., using the "Next" button, or when the activeItemId changes)
  */
  const userClickedIdRef = useRef<string | null>(null);
  const userHoveredIdRef = useRef<string | null>(null);

  // Ref to track the currently hovered item ID
  const hoveredItemIdRef = useRef<string | null>(null);


  const [infoOpen, setInfoOpen] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 50 });

  const parsedItems = useMemo(() => parseItems(vizItems), [vizItems]);
  const dates = useMemo(() => parsedItems.map(item => item.date), [parsedItems]);

  // get the activeItemIndex based on the activeItemId prop
  const activeItemIndex = parsedItems.findIndex(item => item.id === activeItemId);
  const [activeIndex, setActiveIndex] = useState(activeItemIndex >= 0 ? activeItemIndex : 0);

  const activeDate = dates[activeIndex];
  const activeDateRef = useRef(activeDate);

  const margin = { left: 30, right: 30 };

  const baseX = useMemo(() => getBaseX(dates, dimensions.width, margin), [dates, dimensions.width]);

  const toggleInfoOpen = () => {
    setInfoOpen(!infoOpen);
  };

  const handleVizItemClick = (idx: number) => {
    const item = parsedItems[idx];
    if (!item) return;
    userClickedIdRef.current = item.id;
    activeDateRef.current = dates[idx];
    setActiveIndex(idx);
    onVizItemSelect(item.id);
    onVizItemHover(item.id);
    updateHighlights(
      svgRef,
      parsedItems,
      activeDateRef.current,
      baseX,
      transformRef.current
    );
  };

  const handleVizItemHover = (idx: number) => {
    onVizItemHover(parsedItems[idx].id);
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


  useEffect(() => {
    if (!dimensions.width || !dates.length) return;

    const svg = d3.select(svgRef.current);
    const svgNode = svg.node();
    if (!svgNode) return;

    const { width, height } = dimensions;
    svg.selectAll('*').remove();

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
      transformRef.current = transform;

      g.selectAll('*').remove();
      const x = transform.rescaleX(baseX);


      const PADDING_DAYS = 20;
      const { ticks, ppm } = getTickDates(dates, transform, baseX, PADDING_DAYS);

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


      // // Add labels for start and end dates if they are in the same month and year
      // // This is to ensure that we have some labels in the timeline
      // if (isSameMonthAndYear(minDate, maxDate)) {
      //   const forcedDates = [parsedItems[0].date, parsedItems[parsedItems.length - 1].date];
      //   const forcedOnly = forcedDates.filter(
      //     d => !ticks.some(t => t.getTime() === d.getTime())
      //   );

      //   g.selectAll('forced-labels')
      //     .data(forcedOnly)
      //     .enter().append('text')
      //     .attr('x', d => x(d))
      //     .attr('y', -height * 0.35)
      //     .attr('text-anchor', 'middle')
      //     .attr('font-size', '10px')
      //     .attr('fill', '#6b7280')
      //     .text(d => d3.utcFormat('%d %b')(d));
      // }

      // Draw circles for each item  
      const circles = g.selectAll('circle')
        .data(parsedItems)
        .enter()
        .append('circle')
        .attr('cx', d => x(d.date))
        .attr('cy', 0)
        .attr('r', 5)
        .attr('fill', d => {
          if (d.id === hoveredItemIdRef.current) return '#9dc1fa';
          if (d.date.getTime() === activeDateRef.current.getTime()) return '#3b82f6';
          return '#9ca3af';
        })
        .style('cursor', 'pointer')
        .on('click', (e, d) => {
          const idx = parsedItems.findIndex(item => item.id === d.id);
          handleVizItemClick(idx);
        })
        .on('mouseover', function (e, d) {
          userHoveredIdRef.current = d.id;
          const isActive = d.date.getTime() === activeDateRef.current.getTime();
          if (!isActive) d3.select(this).attr('fill', '#9dc1fa'); // muted hover color
          const idx = parsedItems.findIndex(item => item.id === d.id);
          handleVizItemHover(idx);
        })
        .on('mouseout', function (e, d) {
          const isActive = d.date.getTime() === activeDateRef.current.getTime();
          if (!isActive) d3.select(this).attr('fill', '#9ca3af'); // back to default
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
    centerOnDate(
      svgRef,
      activeDate,
      1,
      dimensions.width,
      margin,
      baseX!,
      zoomRef.current!
    );
  }, [dimensions, parsedItems]);

  useEffect(() => {
    const newIndex = parsedItems.findIndex(item => item.id === activeItemId);
    if (newIndex !== -1) {
      setActiveIndex(newIndex);
      activeDateRef.current = parsedItems[newIndex].date;
    } else {
      // fallback if no activeItemId matches
      setActiveIndex(0);
      activeDateRef.current = parsedItems[0]?.date;
    }

    updateHighlights(
      svgRef,
      parsedItems,
      activeDateRef.current,
      baseX,
      transformRef.current
    );

    // Only center if the change is NOT from user click
    if (activeItemId !== userClickedIdRef.current) {
      centerOnDate(
        svgRef,
        activeDateRef.current,
        transformRef.current.k, // keep current zoom level
        dimensions.width,
        margin,
        baseX!,
        zoomRef.current!
      );
    }

    // Reset the ref — so future updates are treated as external unless clicked again
    userClickedIdRef.current = null;
  }, [parsedItems, activeItemId]);


  useEffect(() => {
    if (!svgRef.current) return;
    const svg = d3.select(svgRef.current);
    const g = svg.select('g');
    if (!g || !parsedItems.length) return;

    hoveredItemIdRef.current = hoveredItemId;

    if (hoveredItemId !== userHoveredIdRef.current) {
      const hoveredItem = parsedItems.find(item => item.id === hoveredItemId);
      if (hoveredItem) {
        centerOnDate(
          svgRef,
          hoveredItem.date,
          transformRef.current.k,
          dimensions.width,
          margin,
          baseX!,
          zoomRef.current!
        );
      }
    }
    userHoveredIdRef.current = null; // reset after handling hover

  }, [hoveredItemId]);


  // Handle movement controls
  const move = (direction: 'left' | 'right' | 'first' | 'last') => {
    moveToIndex(
      direction,
      activeIndex,
      dates,
      svgRef,
      dimensions,
      margin,
      baseX!,
      zoomRef.current!,
      handleVizItemClick
    );
  };

  // Reset zoom to the initial state
  const resetZoom = () => {
    centerOnDate(
      svgRef,
      activeDate,
      1,
      dimensions.width,
      margin,
      baseX!,
      zoomRef.current!
    );
  };

  // Format function for displaying dates
  const format = d3.utcFormat('%Y-%m-%d');

  return (
    <div ref={containerRef} style={{ width: '100%' }}>
      {dimensions.width > 0 && (
        <div className="timeline-card">
          <div className="timeline-header-container">
            <div className="timeline-header">
              <span className="timeline-title">{title}</span>
              <div className="timeline-controls">
                <Tooltip title="Help">
                  <button className="timeline-button" onClick={toggleInfoOpen}>
                    <InfoOutlinedIcon />
                  </button>
                </Tooltip>
                <div className="timeline-divider"></div>
                <Tooltip title="Reset Zoom">
                  <button className="timeline-button timeline-button-circle" onClick={resetZoom}>
                    <ReplayIcon />
                  </button>
                </Tooltip>

                <div className="timeline-divider"></div>

                <Tooltip title="First Item">
                  <button className="timeline-button" onClick={() => move('first')}>
                    <FirstPageIcon />
                  </button>
                </Tooltip>

                <Tooltip title="Previous Item">
                  <button className="timeline-button" onClick={() => move('left')}>
                    <KeyboardArrowLeftIcon />
                  </button>
                </Tooltip>

                <Tooltip title="Next Item">
                  <button className="timeline-button" onClick={() => move('right')}>
                    <KeyboardArrowRightIcon />
                  </button>
                </Tooltip>

                <Tooltip title="Last Item">
                  <button className="timeline-button" onClick={() => move('last')}>
                    <LastPageIcon />
                  </button>
                </Tooltip>

              </div>
            </div>
            <div>
              {infoOpen && (
                <Typography
                  sx={{ fontSize: '0.8rem', textAlign: 'left', color: 'text.secondary', pl: 1, mt: 1 }}
                >
                  This timeline is <strong>zoomable</strong> (mouse wheel or pinch) and <strong>scrollable</strong> (drag horizontally)
                </Typography>
              )}
            </div>
          </div>

          <svg ref={svgRef} width={dimensions.width} height={dimensions.height} />
          <div className="timeline-footer">
            <div>
              <Typography variant="caption">Start Date</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                {format(dates[0])}
              </Typography>
            </div>
            <div style={{ textAlign: 'center' }}>
              <Typography variant="caption">Active Date</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                {format(activeDate)}
              </Typography>
            </div>
            <div style={{ textAlign: 'right' }}>
              <Typography variant="caption">End Date</Typography>
              <Typography variant="subtitle2" fontWeight="bold">
                {format(dates[dates.length - 1])}
              </Typography>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

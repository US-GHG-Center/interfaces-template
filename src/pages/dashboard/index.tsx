import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import styled from 'styled-components';
import './index.css';

import {
  MainMap,
  MarkerFeature,
  VisualizationLayers,
  ColorBar,
  LoadingSpinner,
  PersistentDrawerRight,
  Title,
  MapControls,
  MapZoom,
  Search,
  FilterByDate,
  VizItemAnimation,
  VisualizationItemCard
} from '../../components/index.js';

import { STACItem } from '../../dataModel';

type VizItem = STACItem;

const TITLE: string = 'GOES Methane Plume Viewer';
const DESCRIPTION: string =
  'The Geostationary Operational Environmental Satellites collect images of the surface every 5 minutes. Only very large emission events can be detected, \but plume expansion is easy to see over time. More plumes will be added soon.';

const HorizontalLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`;

interface VizItemDict {
  [key: string]: VizItem
}

interface DashboardProps {
  data: VizItem[];
  dataTree: React.MutableRefObject<{ [key: string]: any } | null>;
  metaDataTree: { [key: string]: any };
  zoomLocation: number[];
  setZoomLocation: React.Dispatch<React.SetStateAction<number[]>>;
  zoomLevel: number | null;
  setZoomLevel: React.Dispatch<React.SetStateAction<number | null>>;
  loadingData: boolean;
}

export function Dashboard({
  data,
  zoomLocation,
  setZoomLocation,
  zoomLevel,
  setZoomLevel,
  loadingData,
}: DashboardProps) {
  // states for data
  const [vizItemsDict, setVizItemsDict] = useState<VizItemDict>({}); // store all available visualization items
  const [selectedVizItems, setSelectedVizItems] = useState<VizItem[]>([]); // all visualization items for the selected region (marker)
  const [hoveredVizLayerId, setHoveredVizLayerId] = useState<string>(''); // vizItem_id of the visualization item which was hovered over
  const [filteredVizItems, setFilteredVizItems] = useState<VizItem[]>([]); // visualization items for the selected region with the filter applied

  const [vizItemIds, setVizItemIds] = useState<string[]>([]); // list of vizItem_ids for the search feature.
  const [vizItemsForAnimation, setVizItemsForAnimation] = useState<VizItem[]>([]); // list of subdaily_visualization_item used for animation
  const [showVisualizationLayers, setShowVisualizationLayers] = useState<boolean>(true);
  const [showMarkerFeature, setShowMarkerFeature] = useState<boolean>(true);
  const [visualizationLayers, setVisualizationLayers] = useState<VizItem[]>([]);

  //color map
  const [VMAX, setVMAX] = useState<number>(100);
  const [VMIN, setVMIN] = useState<number>(-92);
  const [colormap, setColormap] = useState<string>('default');
  const [assets, setAssets] = useState<string>('rad');

  // states for components/controls
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // handler functions
  const handleSelectedVizItem = (vizItemId: string) => {
    if (!vizItemId) return;
    let vizItem = vizItemsDict[vizItemId];

    setVisualizationLayers([vizItem]);
    setShowVisualizationLayers(true); // all the available visualization items layers should be visible when region is selected
    let location = [
      Number(vizItem.geometry.coordinates[0][0][0]),
      Number(vizItem.geometry.coordinates[0][0][1]),
    ];
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
    setOpenDrawer(true);
  };

  const handleSelectedVizLayer = (vizItemId: string) => {
    if (!vizItemId) return;
    let vizItem = vizItemsDict[vizItemId];
    let location = [
      Number(vizItem.geometry.coordinates[0][0][0]),
      Number(vizItem.geometry.coordinates[0][0][1]),
    ];
    setZoomLocation(location);
    handleSelectedVizItemSearch(vizItemId);
    handleAnimationReady(vizItemId);
    setZoomLevel(null); // take the default zoom level
  };

  const handleAnimationReady = (vizItemId: string) => {
    if (!vizItemId) return;
    // Provide a sorted list of (by start date) items for animation
    const vizItemsForAnimation: VizItem[] = data.slice(0, 10);
    setVizItemsForAnimation(vizItemsForAnimation);
    // just clear the previous visualization item layers and not the cards
    setShowVisualizationLayers(false);
  };

  const handleSelectedVizItemSearch = (vizItemId: string) => {
    // will focus on the visualization item along with its visualization item metadata card
    // will react to update the metadata on the sidedrawer
    if (!vizItemsDict || !vizItemId) return;
    const vizItem = vizItemsDict[vizItemId];
    const location = vizItem?.geometry?.coordinates[0][0];
    setSelectedVizItems([vizItem]);
    setOpenDrawer(true);
    setZoomLocation(location.map((coord) => Number(coord)));
    setZoomLevel(null); // take the default zoom level
    setVizItemsForAnimation([]); // to reset the previous animation
  };

  const handleResetHome = () => {
    setHoveredVizLayerId('');
    setFilteredVizItems([]);
    setVizItemsForAnimation([]);
    setOpenDrawer(false);
    setZoomLevel(4);
    setZoomLocation([-98.771556, 32.967243]);
  };

  // Component Effects
  useEffect(() => {
    // Mocked data initialization for the application.
    if (!data) return;

    const vizItemsDict: VizItemDict = {}; // visualization_items[string] = visualization_item
    const vizItemIds: string[] = []; // string[] // for search
    const testData = data.slice(0, 10);
    testData.forEach((items) => {
      vizItemsDict[items.id] = items;
      vizItemIds.push(items.id);
    });
    setVizItemsDict(vizItemsDict);
    setVizItemIds(vizItemIds); // for search
    // the reference to datatree is in current, so see changes with respect to that

    // also few extra things for the application state. We can receive it from collection json.
    const VMIN = 0;
    const VMAX = 0.4;
    const colormap: string = 'default';
    setVMIN(VMIN);
    setVMAX(VMAX);
    setColormap(colormap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const onFilteredVizItems = (filteredVizItems: VizItem[]) => {
    setFilteredVizItems(filteredVizItems);
  };
  // JSX
  return (
    <Box className='fullSize'>
      <div id='dashboard-map-container'>
        <MainMap>
          <Paper className='title-container'>
            <Title title={TITLE} description={DESCRIPTION} />
            <div className='title-content'>
              <HorizontalLayout>
                <Search
                  vizItems={data}
                  onSelectedVizItemSearch={handleSelectedVizItemSearch}
                ></Search>
              </HorizontalLayout>
              {/* <HorizontalLayout>
                <FilterByDate
                  vizItems={Object.keys(vizItemsDict).map((key) => vizItemsDict[key])}
                  onFilteredVizItems={onFilteredVizItems}
                />
              </HorizontalLayout> */}
              <HorizontalLayout>
                <VizItemAnimation
                  VMIN={VMIN}
                  VMAX={VMAX}
                  colormap={colormap}
                  assets={assets}
                  vizItems={vizItemsForAnimation}
                />
              </HorizontalLayout>
            </div>
          </Paper>

          <MapZoom zoomLocation={zoomLocation} zoomLevel={zoomLevel} />
          <MapControls
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            handleResetHome={handleResetHome}
            handleResetToSelectedRegion={() => {}}
          />
          <MarkerFeature
            vizItems={Object.keys(vizItemsDict).map((key) => vizItemsDict[key])}
            onClickOnMarker={handleSelectedVizItem}
          ></MarkerFeature>
          <VisualizationLayers
            vizItems={visualizationLayers}
            VMIN={VMIN}
            VMAX={VMAX}
            colormap={colormap}
            assets={assets}
            onClickOnLayer={handleSelectedVizLayer}
            onHoverOverLayer={setHoveredVizLayerId}
          />
        </MainMap>
        <PersistentDrawerRight
          open={openDrawer}
          header={
            <>
              <Typography
                variant='h6'
                component='div'
                fontWeight='bold'
                className='drawer-head-content'
              >
                USA
              </Typography>
              <Typography
                variant='subtitle1'
                component='div'
                className='drawer-head-content'
              >
                - Denver
              </Typography>
            </>
          }
          body={
            !!selectedVizItems.length &&
            selectedVizItems.map((vizItem) => (
              <VisualizationItemCard
                key={vizItem.id}
                vizItemSourceId={vizItem.id}
                vizItemSourceName={vizItem.id}
                imageUrl={`xyz`}
                tiffUrl={`abc`}
                lon={vizItem.geometry.coordinates[0][0][0]}
                lat={vizItem.geometry.coordinates[0][0][1]}
                totalReleaseMass={vizItem.properties.releaseMass}
                colEnhancements={vizItem.properties.colEnhancements}
                startDatetime={vizItem.properties.startDatetime}
                endDatetime={vizItem.properties.endDatetime}
                duration={vizItem.properties.duration}
                handleSelectedVizItemCard={handleSelectedVizItem}
                hoveredVizItemId={hoveredVizLayerId}
                setHoveredVizItemId={setHoveredVizLayerId}
              />
            ))
          }
        />
      </div>
      {VMAX && (
        <ColorBar
          label={'Methane Column Enhancement (mol/m²)'}
          VMAX={VMAX}
          VMIN={VMIN}
          colormap={colormap}
          STEPSIZE={1}
        />
      )}
      {loadingData && <LoadingSpinner />}
    </Box>
  );
}

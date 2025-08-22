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
  ConfigurableColorBar,
  LoadingSpinner,
  PersistentDrawerRight,
  Title,
  MapControls,
  MapZoom,
  Search,
  FilterByDate,
  VizItemAnimation,
  VisualizationItemCard,
  VizItemTimeline,
} from '../../components/index.js';

import { VizItem } from '../../dataModel';
import { DataFactory } from '../../core/dataFactory';

const TITLE: string = 'Interface Template';
const DESCRIPTION: string = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book`;

const HorizontalLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`;

interface DashboardProps {
  dataFactory: React.MutableRefObject<DataFactory | null>;
  zoomLocation: number[];
  setZoomLocation: React.Dispatch<React.SetStateAction<number[]>>;
  zoomLevel: number | null;
  setZoomLevel: React.Dispatch<React.SetStateAction<number | null>>;
  loadingData: boolean;
}

export function Dashboard({
  dataFactory,
  zoomLocation,
  setZoomLocation,
  zoomLevel,
  setZoomLevel,
  loadingData,
}: DashboardProps) {
  // states for data
  const [selectedVizItems, setSelectedVizItems] = useState<VizItem[]>([]); // all visualization items for the selected region (marker)
  const [hoveredVizLayerId, setHoveredVizLayerId] = useState<string>(''); // vizItem_id of the visualization item which was hovered over
  const [filteredVizItems, setFilteredVizItems] = useState<VizItem[]>([]); // visualization items for the selected region with the filter applied

  const [vizItemsForAnimation, setVizItemsForAnimation] = useState<VizItem[]>(
    []
  ); // list of subdaily_visualization_item used for animation
  const [visualizationLayers, setVisualizationLayers] = useState<VizItem[]>([]);

  //color map
  const [VMAX, setVMAX] = useState<number>(100);
  const [VMIN, setVMIN] = useState<number>(-92);
  const [colormap, setColormap] = useState<string>('magma');
  const [assets, setAssets] = useState<string>('rad');

  // states for components/controls
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // ref. to scroll to the hovered card within the drawer
  const cardRef = useRef<HTMLDivElement>(null);

  // handler functions
  const handleSelectedVizItem = (vizItemId: string) => {
    if (!vizItemId) return;
    if (!dataFactory) return;
    let vizItems =
      dataFactory.current?.getVizItemsOnMarkerClicked(vizItemId) || [];

    setVisualizationLayers(vizItems);
    let location = [
      Number(vizItems[0]?.geometry.coordinates[0][0][0]),
      Number(vizItems[0]?.geometry.coordinates[0][0][1]),
    ];
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
    setOpenDrawer(true);
  };

  const handleSelectedVizLayer = (vizItemId: string) => {
    if (!vizItemId) return;
    let vizItems =
      dataFactory.current?.getVizItemsOnMarkerClicked(vizItemId) || [];
    let location = [
      Number(vizItems[0]?.geometry.coordinates[0][0][0]),
      Number(vizItems[0]?.geometry.coordinates[0][0][1]),
    ];
    setZoomLocation(location);
    handleSelectedVizItemSearch(vizItemId);
    handleAnimationReady(vizItemId);
    setZoomLevel(null); // take the default zoom level
  };

  const handleAnimationReady = (vizItemId: string) => {
    if (!vizItemId) return;
    // Provide a sorted list of (by start date) items for animation
    const vizItemsForAnimation: VizItem[] = selectedVizItems.slice(0, 10);
    setVizItemsForAnimation(vizItemsForAnimation);
  };

  const handleSelectedVizItemSearch = (vizItemId: string) => {
    // will focus on the visualization item along with its visualization item metadata card
    // will react to update the metadata on the sidedrawer
    if (!vizItemId) return;
    const vizItems =
      dataFactory.current?.getVizItemsOnMarkerClicked(vizItemId) || [];
    const location = vizItems[0]?.geometry?.coordinates[0][0];
    setSelectedVizItems(vizItems);
    setOpenDrawer(true);
    setZoomLocation(location.map((coord) => Number(coord)));
    setZoomLevel(null); // take the default zoom level
    setVizItemsForAnimation([]); // to reset the previous animation
  };

  const handleResetHome = () => {
    let vizItemdForMarker = dataFactory.current?.getVizItemForMarker() || [];
    setHoveredVizLayerId('');
    setSelectedVizItems(vizItemdForMarker);
    setVizItemsForAnimation([]);
    setOpenDrawer(false);
    setZoomLevel(4);
    setZoomLocation([-98.771556, 32.967243]);
  };

  // Component Effects
  useEffect(() => {
    if (!dataFactory.current) return;

    // Mocked data initialization for the application.
    setSelectedVizItems(dataFactory.current?.getVizItemForMarker() || []);

    // also few extra things for the application state. We can receive it from collection json.
    const VMIN = 0;
    const VMAX = 0.4;
    const colormap: string = 'magma';
    setVMIN(VMIN);
    setVMAX(VMAX);
    setColormap(colormap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataFactory.current]);

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
                  vizItems={selectedVizItems}
                  onSelectedVizItemSearch={handleSelectedVizItemSearch}
                  placeHolderText={'Search by vizItem ID and substring'}
                ></Search>
              </HorizontalLayout>
              <HorizontalLayout>
                <FilterByDate
                  vizItems={selectedVizItems}
                  onFilteredVizItems={setFilteredVizItems}
                />
              </HorizontalLayout>
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
            vizItems={filteredVizItems}
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
          cardRef={cardRef}
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
        <ConfigurableColorBar
          id='configurable-color-bar'
          VMAXLimit={100}
          VMINLimit={-92}
          colorMap={colormap}
          setVMIN={setVMIN}
          setVMAX={setVMAX}
          setColorMap={setColormap}
        />
      )}
      {loadingData && <LoadingSpinner />}
    </Box>
  );
}

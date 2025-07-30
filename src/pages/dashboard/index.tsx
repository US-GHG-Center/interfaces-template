/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import styled from 'styled-components';

import {
  MainMap,
  MarkerFeature,
  VisualizationLayers,
  ConfigurableColorBar,
  LoadingSpinner,
  PersistentDrawerRight,
  Title,
  MapControls,
  MapZoom,
  Dropdown,
  VizItemTimeline,
  SamInfoCard,
} from '../../components/index.js';

import { SAM, VizItem } from '../../dataModel';
import { Oco3DataFactory } from '../../oco3DataFactory';

import './index.css';

const TITLE: string = 'OCO3 SAMS';
const DESCRIPTION: string = `OCO-3, aboard the ISS, uses an agile pointing mirror to quickly collect 80x80km "Snapshot Area Maps" (SAMs) and target observations. These datasets, including XCO2 and SIF, help study carbon sources and plant health.`;

const HorizontalLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`;

interface DashboardProps {
  dataFactory: React.MutableRefObject<Oco3DataFactory | null>;
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
  const [targets, setTargets] = useState<VizItem[]>([]);
  const [hoveredVizLayerId, setHoveredVizLayerId] = useState<string>(''); // vizItem_id of the visualization item which was hovered over
  const [filteredVizItems, setFilteredVizItems] = useState<VizItem[]>([]); // visualization items for the selected region with the filter applied
  const [visualizationLayers, setVisualizationLayers] = useState<VizItem[]>([]); //all visualization items for the selected region (marker) // TODO: make it take just one instead of a list.
  const [selectedSams, setSelectedSams] = useState<VizItem[]>([]); // this represents the sams, when a target is selected.
  //color map
  const [VMAX, setVMAX] = useState<number>(420);
  const [VMIN, setVMIN] = useState<number>(400);
  const [colormap, setColormap] = useState<string>('viridis');
  const [assets, setAssets] = useState<string>('xco2');
  // targets based on target type
  const [targetTypes, setTargetTypes] = useState<string[]>(['all']);
  const [selectedTargetType, setSelectedTargetType] = useState<string>('all');

  // states for components/controls
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // ref. to scroll to the hovered card within the drawer
  const cardRef = useRef<HTMLDivElement>(null);

  // callback handler functions
  // Note: these callback handler function needs to be initilaized only once.
  // so using useCallback hook.
  const handleSelectedMarker = useCallback((vizItemId: string) => {
    if (!vizItemId || !dataFactory.current) return;
    let targetId: string =
      dataFactory.current?.getTargetIdFromStacIdSAM(vizItemId);
    let candidateSams: SAM[] =
      dataFactory.current?.getVizItemsOnMarkerClicked(targetId) || [];

    let placeHolderSam: SAM = candidateSams[0];
    placeHolderSam.geometry.coordinates = [
      [placeHolderSam.properties.target_location.coordinates],
    ];

    setVisualizationLayers([placeHolderSam]);
    setSelectedSams(candidateSams);
    let location: number[] = [
      Number(candidateSams[0].geometry.coordinates[0][0][0]),
      Number(candidateSams[0].geometry.coordinates[0][0][1]),
    ];
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
    setOpenDrawer(true);
    setHoveredVizLayerId(vizItemId);
  }, []);

  const handleSelectedVizLayer = useCallback((vizItemId: string) => {
    if (!vizItemId) return;
    // currently no functionality needed.
  }, []);

  const handleResetHome = useCallback(() => {
    if (!dataFactory.current) return;
    // Get all Targets. Here everything is wrt vizItem/SAM, so get a representational SAM.
    let repTargets: SAM[] = dataFactory.current?.getVizItemForMarker() || [];
    setTargets(repTargets);
    setVisualizationLayers([]);
    setSelectedSams([]);
    setFilteredVizItems(repTargets);
    setHoveredVizLayerId('');
    setOpenDrawer(false);
    setZoomLevel(4);
    setZoomLocation([-98.771556, 32.967243]);
  }, []);

  const handleSelectedTargetType = useCallback((targetType: string) => {
    setSelectedTargetType(targetType);

    if (targetType === 'all') {
      let repTargets: SAM[] = dataFactory.current?.getVizItemForMarker() || [];
      setTargets(repTargets);
      return;
    }

    if (!dataFactory.current) return;
    let repTargets: SAM[] =
      dataFactory.current?.getVizItemForMarkerByTargetType(targetType) || [];
    setTargets(repTargets);
  }, []);

  const handleTimelineTimeChange = useCallback((vizItemId: string) => {
    if (!dataFactory.current) return;
    // from the vizItemId, find the target id.
    let changedVizItem: VizItem | undefined =
      dataFactory.current?.getVizItemByVizId(vizItemId);
    if (changedVizItem) setVisualizationLayers([changedVizItem]);
    setHoveredVizLayerId(vizItemId);
  }, []);

  const handleHoverOverSelectedSams = useCallback((vizItemId: string) => {
    setHoveredVizLayerId(vizItemId);
  }, []);

  // Component Effects
  useEffect(() => {
    if (!dataFactory.current) return;
    // Get all Targets. Here everything is wrt vizItem/SAM, so get a representational SAM.
    let repTargets: SAM[] = dataFactory.current?.getVizItemForMarker() || [];
    setTargets(repTargets);

    let targetTypesLocal: string[] =
      dataFactory?.current.getTargetTypes() || [];
    setTargetTypes(['all', ...targetTypesLocal]);

    // also few extra things for the application state. We can receive it from collection json.
    const VMIN = 415;
    const VMAX = 420;
    const colormap: string = 'plasma';
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
            {selectedSams.length ? (
              <HorizontalLayout>
                {/* <div className={"sandesh"} style={{ margin: '0 0.9rem' }}> */}
                <VizItemTimeline
                  vizItems={selectedSams}
                  onVizItemSelect={handleTimelineTimeChange}
                  activeItemId={hoveredVizLayerId}
                  onVizItemHover={handleHoverOverSelectedSams}
                  title=''
                />
                {/* </div> */}
              </HorizontalLayout>
            ) : (
              <></>
            )}
          </Paper>

          <MapZoom zoomLocation={zoomLocation} zoomLevel={zoomLevel} />
          <MapControls
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            handleResetHome={handleResetHome}
            handleResetToSelectedRegion={() => {}}
          />
          <MarkerFeature
            vizItems={targets}
            onClickOnMarker={handleSelectedMarker}
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
        <Dropdown
          items={targetTypes}
          onSelection={handleSelectedTargetType}
          selectedItemId={selectedTargetType}
        ></Dropdown>
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
                SAMs
              </Typography>
              <Typography
                variant='h6'
                component='div'
                fontWeight='bold'
                className='drawer-head-content'
              >
                {visualizationLayers.length &&
                  visualizationLayers[0].properties.target_name}
              </Typography>
            </>
          }
          body={
            !!selectedSams.length &&
            selectedSams.map((vizItem: VizItem) => (
              <SamInfoCard
                stacItem={vizItem}
                onClick={handleTimelineTimeChange}
                onHover={handleHoverOverSelectedSams}
                hovered={false} //hovered from inside
                clicked={false}
                hoveredVizid={hoveredVizLayerId}
                VMAX={VMAX}
                VMIN={VMIN}
                assets={assets}
                colorMap={colormap}
                cardRef={
                  vizItem?.id === hoveredVizLayerId ? cardRef : undefined
                }
              />
            ))
          }
        />
      </div>
      {VMAX && (
        <div style={{ position: 'absolute', right: 10, bottom: 18 }}>
          <ConfigurableColorBar
            id='coolcolor'
            VMAXLimit={430}
            VMINLimit={420}
            colorMap={colormap}
            setColorMap={setColormap}
            setVMIN={setVMIN}
            setVMAX={setVMAX}
            unit='Parts per million (ppm)'
          />
        </div>
      )}
      {loadingData && <LoadingSpinner />}
    </Box>
  );
}

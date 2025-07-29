/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useCallback, useRef } from 'react';
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
  Dropdown,
  VizItemTimeline,
  MapLegend
} from '../../components/index.js';

import { SamInfoCard } from '../../components/ui/card/samInfoCard';

import { DataTree, Target, SAM, SamsTargetDict } from '../../dataModel';

import { getTargetIdFromStacIdSAM } from '../dashboardContainer/helper';

interface VizItem extends SAM { }

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
  /**
   * The dataTree refers to the STACItems(/vizItems), structured in certain way
   * inorder to fullfill the application needs (refers. data Interfaces).
   * Example 1: Here, its simple map between STACItem.id and STACItem.
   * Example 2: Complex application needs might ask for somekind of complex dataTree
   * - representing one to many relationships - hence requiring n-tree instead of simple dictionary.
   */
  dataTree: React.MutableRefObject<DataTree | null>;
  samsTargetDict: React.MutableRefObject<SamsTargetDict | null>;
  zoomLocation: number[];
  setZoomLocation: React.Dispatch<React.SetStateAction<number[]>>;
  zoomLevel: number | null;
  setZoomLevel: React.Dispatch<React.SetStateAction<number | null>>;
  loadingData: boolean;
}

export function Dashboard({
  dataTree,
  samsTargetDict,
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
  const [colormap, setColormap] = useState<string>('magma');
  const [assets, setAssets] = useState<string>('xco2');
  // targets based on target type
  const [targetTypes, setTargetTypes] = useState<string[]>([]);
  const [selectedTargetType, setSelectedTargetType] = useState<string[]>([]);

  // states for components/controls
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);

  // ref. to scroll to the hovered card within the drawer
  const cardRef = useRef<HTMLDivElement>(null);

  // callback handler functions
  // Note: these callback handler function needs to be initilaized only once.
  // so using useCallback hook.
  const handleSelectedMarker = useCallback((vizItemId: string) => {
    if (!vizItemId || !dataTree.current) return;
    let targetId: string = getTargetIdFromStacIdSAM(vizItemId);
    let target: Target | undefined = dataTree.current?.[targetId];

    // instead get the sam with the provided vizItemId
    let sam: SAM | undefined = target?.getRepresentationalSAM();
    let candidateSams: SAM[] = target ? target.getSortedSAMs() : [];
    if (!sam) return;
    setVisualizationLayers([sam]);
    setSelectedSams(candidateSams);
    let location: number[] = [
      Number(sam.geometry.coordinates[0][0][0]),
      Number(sam.geometry.coordinates[0][0][1]),
    ];
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
    setOpenDrawer(true);
  }, []);

  const handleSelectedVizLayer = useCallback((vizItemId: string) => {
    if (!vizItemId) return;
    let targetId: string = getTargetIdFromStacIdSAM(vizItemId);
    let target: Target | undefined = dataTree.current?.[targetId];

    let vizItem: SAM | undefined = target?.getRepresentationalSAM();
    if (!vizItem) return;

    // set vizItem to be rendered.
    // enable the timeline component.

    let location = [
      Number(vizItem.geometry.coordinates[0][0][0]),
      Number(vizItem.geometry.coordinates[0][0][1]),
    ];
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
  }, []);

  const handleSelectedVizItemSearch = useCallback((vizItemId: string) => {
    // will focus on the visualization item along with its visualization item metadata card
    // will react to update the metadata on the sidedrawer
    if (!vizItemId) return;
    // const vizItem = vizItemsDict[vizItemId];
    // const location = vizItem?.geometry?.coordinates[0][0];
    // setTargets([vizItem]);
    // setOpenDrawer(true);
    // setZoomLocation(location.map((coord) => Number(coord)));
    // setZoomLevel(null); // take the default zoom level
  }, []);

  const handleResetHome = useCallback(() => {
    if (!dataTree.current) return;
    // Get all Targets. Here everything is wrt vizItem/SAM, so get a representational SAM.
    let targets: Target[] = getTargetsFromDataTree(dataTree.current);
    let repTargets: SAM[] = getSamRepOfTarget(targets);
    setTargets(repTargets);
    setVisualizationLayers([]);
    setSelectedSams([]);
    setFilteredVizItems(repTargets);
    setHoveredVizLayerId('');
    setOpenDrawer(false);
    setZoomLevel(4);
    setZoomLocation([-98.771556, 32.967243]);
  }, []);

  const handleSelectedTargetType = useCallback((targetType: string[]) => {
    setSelectedTargetType(targetType);

    if (!targetType || targetType.length === 0) {
      if (!dataTree.current) return;
      let targets: Target[] = getTargetsFromDataTree(dataTree.current);
      let repTargets: SAM[] = getSamRepOfTarget(targets);
      setTargets(repTargets);
      return;
    }

    if (!samsTargetDict.current) return;
    let targets: Target[] = targetType.flatMap(
      type => samsTargetDict.current![type]?.targets || []
    );
    let repTargets: SAM[] = getSamRepOfTarget(targets);
    setTargets(repTargets);
  }, []);

  const handleTimelineTimeChange = useCallback((vizItemId: string) => {
    if (!dataTree.current) return;
    // from the vizItemId, find the target id.
    const targetId: string = getTargetIdFromStacIdSAM(vizItemId);
    const target: Target = dataTree.current[targetId];
    // using the targetId, find the necessary sam.
    const changedVizItem: VizItem | undefined = target.getSAMbyId(vizItemId);
    if (changedVizItem) setVisualizationLayers([changedVizItem]);
  }, []);

  const handleHoverOverSelectedSams = useCallback((vizItemId: string) => {
    setHoveredVizLayerId(vizItemId);
  }, []);

  // helpers
  const getSamRepOfTarget = (targets: Target[]): SAM[] => {
    if (!dataTree) return [];
    const repTargets: SAM[] = [];
    targets.forEach((target: Target) => {
      if (!target) {
        return undefined;
      }
      let repTarget: SAM = target.getRepresentationalSAM();
      // use the location in the target.
      repTarget.geometry.coordinates = [[target.location]];
      repTargets.push(target.getRepresentationalSAM());
    });
    return repTargets;
  };

  const getTargetsFromDataTree = (dataTree: DataTree): Target[] => {
    if (!dataTree) return [];
    let targets: Target[] = Object.values(dataTree);
    return targets;
  };

  // Component Effects
  useEffect(() => {
    if (!dataTree.current) return;

    // Get all Targets. Here everything is wrt vizItem/SAM, so get a representational SAM.
    let targets: Target[] = getTargetsFromDataTree(dataTree.current);
    let repTargets: SAM[] = getSamRepOfTarget(targets);
    setTargets(repTargets);

    // also few extra things for the application state. We can receive it from collection json.
    const VMIN = 415;
    const VMAX = 420;
    const colormap: string = 'plasma';
    setVMIN(VMIN);
    setVMAX(VMAX);
    setColormap(colormap);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTree.current]);

  useEffect(() => {
    if (!samsTargetDict.current) return;
    const targetTypesLocal = Object.keys(samsTargetDict.current);
    setTargetTypes([...targetTypesLocal]);
  }, [samsTargetDict.current]);

  // JSX
  return (
    <Box className='fullSize'>
      <div id='dashboard-map-container'>
        <MainMap>
          <MapZoom zoomLocation={zoomLocation} zoomLevel={zoomLevel} />
          <MapControls
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            handleResetHome={handleResetHome}
            handleResetToSelectedRegion={() => { }}
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

        <div className="flex-left-column">
          <Paper className='title-container'>
            <Title title={TITLE} description={DESCRIPTION} />
            {/* <div className='title-content'>
                  <HorizontalLayout>
                    <Search
                      vizItems={targets}
                      onSelectedVizItemSearch={handleSelectedVizItemSearch}
                      placeHolderText={'Search by vizItem ID and substring'}
                    ></Search>
                  </HorizontalLayout>
                  <HorizontalLayout>
                    <FilterByDate
                      vizItems={targets}
                      onFilteredVizItems={setFilteredVizItems}
                    />
                  </HorizontalLayout>
                </div> */}
            <div className='title-content'>
              {selectedSams.length ? (
                <HorizontalLayout>
                  {/* <div className={"sandesh"} style={{ margin: '0 0.9rem' }}> */}
                  <VizItemTimeline
                    vizItems={selectedSams}
                    onVizItemSelect={handleTimelineTimeChange}
                    activeItemId={hoveredVizLayerId}
                    onVizItemHover={handleHoverOverSelectedSams}
                    hoveredItemId={hoveredVizLayerId}
                    title='Timeline'
                  />
                  {/* </div> */}
                </HorizontalLayout>
              ) : (
                <></>
              )}
            </div>
          </Paper>
          <div className='legend-container'>
            {targetTypes.length > 0 && (
              <MapLegend
                title={'Marker Categories'}
                description={'Click one or more categories to filter the markers on the map.'}
                items={targetTypes}
                onSelect={handleSelectedTargetType}
              />
            )}
            {VMAX && (
              <ConfigurableColorBar
                id='coolcolor'
                VMAXLimit={420}
                VMINLimit={400}
                colorMap={colormap}
                setColorMap={setColormap}
                setVMIN={setVMIN}
                setVMAX={setVMAX}
                unit='Measurement Unit'
              />
            )}
          </div>
        </div>

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

      {loadingData && <LoadingSpinner />}
    </Box>
  );
}

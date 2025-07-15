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

interface CollectionMeta {
  renders?: {
    dashboard?: {
      colormap_name?: string;
      rescale?: number[][][];
    };
  };
}

interface VizItemMetaData {
  [key: string]: any;
}
 
interface VizItemDict {
  [key: string]: VizItem
}

interface DashboardProps {
  data: VizItem[];
  dataTree: React.MutableRefObject<{ [key: string]: any } | null>;
  metaDataTree: { [key: string]: any };
  collectionMeta: CollectionMeta | undefined;
  vizItemMetaData: VizItemMetaData | undefined;
  zoomLocation: number[];
  setZoomLocation: React.Dispatch<React.SetStateAction<number[]>>;
  zoomLevel: number | null;
  setZoomLevel: React.Dispatch<React.SetStateAction<number | null>>;
  loadingData: boolean;
}

export function Dashboard({
  data,
  dataTree,
  metaDataTree,
  collectionMeta,
  vizItemMetaData,
  zoomLocation,
  setZoomLocation,
  zoomLevel,
  setZoomLevel,
  loadingData,
}: DashboardProps) {
  // states for data
  const [regions, setRegions] = useState<string[]>([]); // store all available regions
  const [vizItemsDict, setVizItemsDict] = useState<VizItemDict>({}); // store all available visualization items
  const [selectedRegionId, setSelectedRegionId] = useState<string>(''); // region_id of the selected region (marker)
  const prevSelectedRegionId = useRef<string>(''); // to be able to restore to previously selected region.
  const [selectedVizItems, setSelectedVizItems] = useState<VizItem[]>([]); // all visualization items for the selected region (marker)
  const [hoveredVizLayerId, setHoveredVizLayerId] = useState<string>(''); // vizItem_id of the visualization item which was hovered over
  const [filteredVizItems, setFilteredVizItems] = useState<VizItem[]>([]); // visualization items for the selected region with the filter applied

  const [vizItemIds, setVizItemIds] = useState<string[]>([]); // list of vizItem_ids for the search feature.
  const [vizItemsForAnimation, setVizItemsForAnimation] = useState<VizItem[]>([]); // list of subdaily_visualization_item used for animation
  const [showVisualizationLayers, setShowVisualizationLayers] = useState<boolean>(true);
  const [showMarkerFeature, setShowMarkerFeature] = useState<boolean>(true);
  const [visualizationLayers, setVisualizationLayers] = useState<boolean>(true);

  //color map
  const [VMAX, setVMAX] = useState<number>(100);
  const [VMIN, setVMIN] = useState<number>(-92);
  const [colormap, setColormap] = useState<string>('default');
  const [assets, setAssets] = useState<string>('rad');

  // states for components/controls
  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  // console.log("data", data);
  // console.log({dataTree})

  // handler functions
  const handleSelectedVizItem = (vizItemId: string) => {
    if (
      !dataTree.current ||
      !Object.keys(dataTree.current).length ||
      !vizItemId
    )
      return;
    setShowVisualizationLayers(true); // all the available visualization items  layers should be visible when region is selected
    prevSelectedRegionId.current = vizItemId;
    const regionIdFromVizId = vizItemId?.split('_')[3];
    setSelectedRegionId(regionIdFromVizId); // an useEffect handles it further
    const region = dataTree.current[regionIdFromVizId];

    setZoomLocation(region.location);
    setZoomLevel(null); // take the default zoom level
    setOpenDrawer(true);
    setSelectedVizItems([]); // reset the visualization items shown, to trigger re-evaluation of selected visualization item
  };

  const handleSelectedVizLayer = (vizLayerId: string) => {
    if (!vizLayerId) return;
    // const vizItemsDict = vizItemsDict[vizLayerId];
    // const { location } = vizItem;
    // setZoomLocation(location);
    handleSelectedVizItemSearch(vizLayerId);
    handleAnimationReady(vizLayerId);
    setZoomLevel(null); // take the default zoom level
    setSelectedRegionId(''); //to reset the visualization item that was shown
  };

  const handleAnimationReady = (vizItemId: string) => {
    // will make the visualization item ready for animation.
    if (!vizItemId) return;

    const vizItems: VizItem[] = data.slice(0, 10);
    setVizItemsForAnimation(vizItems);
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
    setSelectedRegionId(''); //to reset the visualization item that was shown
    setVizItemsForAnimation([]); // to reset the previous animation
  };

  const handleResetHome = () => {
    setSelectedRegionId('');
    setHoveredVizLayerId('');
    setFilteredVizItems([]);
    setVizItemsForAnimation([]);
    setOpenDrawer(false);
    setZoomLevel(4);
    setZoomLocation([-98.771556, 32.967243]);
  };

  // const handleResetToSelectedRegion = () => {
  //   setHoveredVizItemId("");
  //   setVizItemsForAnimation([]);
  //   if (!prevSelectedRegionId.current) {
  //     return handleResetHome();
  //   }
  //   handleSelectedVizItem(prevSelectedRegionId.current);
  // }

  // Component Effects
  useEffect(() => {
    if (!dataTree.current) return;

    const vizItemsDict: VizItemDict = {}; // visualization_items[string] = visualization_item
    const regions: string[] = []; // string[]
    const vizItemIds: string[] = []; // string[] // for search
    const testData = data.slice(0, 10);
    testData.forEach((items) => {
      vizItemsDict[items.id] = items;
      vizItemIds.push(items.id);
    });
    // console.log({vizItemsDict})
    setVizItemsDict(vizItemsDict);
    setRegions(regions);
    setVizItemIds(vizItemIds); // for search
    // the reference to datatree is in current, so see changes with respect to that
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTree.current]);

  useEffect(() => {
    if (!dataTree.current || !selectedRegionId) return;
    const currentRegion = dataTree.current[selectedRegionId];
    const visualizationLayers = currentRegion.plumes.map(
      (region: any) => region.representationalPlume
    );
    setVisualizationLayers(visualizationLayers);
    setSelectedVizItems(visualizationLayers);
    setVizItemsForAnimation([]); // reset the animation
    setShowVisualizationLayers(true); // all the available visualization items layers should be visible when region is selected
    // the reference to datatree is in current, so see changes with respect to that
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTree.current, selectedRegionId]);

  useEffect(() => {
    const colormap = collectionMeta?.renders?.dashboard?.colormap_name;
    const rescaleValues = collectionMeta?.renders?.dashboard?.rescale;
    const VMIN = rescaleValues?.[0]?.[0];
    const VMAX = rescaleValues?.[0]?.[1];
    const aVMIN: number = VMIN !== undefined ? Number(VMIN) : 0;
    const aVMAX: number = VMAX !== undefined ? Number(VMAX) : 0;
    const aColormap: string = colormap !== undefined ? colormap : 'default';
    setVMIN(aVMIN);
    setVMAX(aVMAX);
    setColormap(aColormap);
  }, [collectionMeta]);

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
                  vizItems={Object.keys(vizItemsDict).map((key) => vizItemsDict[key])}
                  onSelectedVizItemSearch={handleSelectedVizItemSearch}
                ></Search>
              </HorizontalLayout>
              <HorizontalLayout>
                <FilterByDate
                  vizItems={Object.keys(vizItemsDict).map((key) => vizItemsDict[key])}
                  onFilteredVizItems={onFilteredVizItems}
                />
              </HorizontalLayout>
              <HorizontalLayout>
                <VizItemAnimation
                  VMIN={VMIN}
                  VMAX={VMAX}
                  colormap={colormap}
                  assets={assets}
                  vizItems={Object.keys(vizItemsDict).map((key) => vizItemsDict[key])}
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
          {/* <MarkerFeature
            vizItems={Object.keys(vizItemsDict).map((key) => vizItemsDict[key])}
            onSelectVizItem={handleSelectedVizItem}
          ></MarkerFeature> */}
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

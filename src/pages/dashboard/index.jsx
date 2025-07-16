import React, { useEffect, useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

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
  VizItemTimeline,
} from '@components';

import styled from 'styled-components';

import './index.css';

const TITLE = 'OCO-3 SAMs';
const DESCRIPTION =
  'OCO-3 uses the same instrument as OCO-2, but it has been adapted to work on the ISS. the OCO-3 instrument has an agile 2-D pointing mechanism, i.e., a Pointing Mirror Assembly (PMA) that allows for rapid transitions in pointing. The PMA is used to collect Snapshot Area Maps (SAMs) which are data collections over ~80km by 80km in 2 minutes.'
  
const HorizontalLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`;
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
}) {
  // states for data
  const [regions, setRegions] = useState([]); // store all available regions
  const [vizItems, setVizItems] = useState([]); // store all available visualization items
  const [selectedRegionId, setSelectedRegionId] = useState(''); // region_id of the selected region (marker)
  const prevSelectedRegionId = useRef(''); // to be able to restore to previously selected region.
  const [selectedVizItems, setSelectedVizItems] = useState([]); // all visualization items for the selected region (marker)
  const [hoveredVizLayerId, setHoveredVizLayerId] = useState(''); // vizItem_id of the visualization item which was hovered over
  const [filteredVizItems, setFilteredVizItems] = useState([]); // visualization items for the selected region with the filter applied

  const [vizItemIds, setVizItemIds] = useState([]); // list of vizItem_ids for the search feature.
  const [vizItemsForAnimation, setVizItemsForAnimation] = useState([]); // list of subdaily_visualization_item used for animation
  const [collectionMetadata, setCollectionMetadata] = useState({});
  const [showVisualizationLayers, setShowVisualizationLayers] = useState(true);
  const [showMarkerFeature, setShowMarkerFeature] = useState(true);
  const [visualizationLayers, setVisualizationLayers] = useState(true);

  //color map
  const [VMAX, setVMAX] = useState(100);
  const [VMIN, setVMIN] = useState(-92);
  const [colormap, setColormap] = useState('default');
  const [assets, setAssets] = useState('rad');

  // states for components/controls
  const [openDrawer, setOpenDrawer] = useState(false);
  // console.log("data", data);
  const collectionId = data[0]?.collection;
  // console.log({dataTree})

  // handler functions
  const handleSelectedVizItem = (vizItemId) => {
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

  const handleSelectedVizLayer = (vizLayerId) => {
    if (!vizItems || !vizLayerId) return;
    const vizItem = vizItems[vizLayerId];
    const { location } = vizItem;
    handleSelectedVizItemSearch(vizLayerId);
    handleAnimationReady(vizLayerId);
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
    setSelectedRegionId(''); //to reset the visualization item that was shown
  };

  const handleAnimationReady = (vizItemId) => {
    // will make the visualization item ready for animation.
    if (!vizItems || !vizItemId) return;

    const vizItem = vizItems[vizItemId];
    setVizItemsForAnimation(vizItem.subDailyPlumes);
    // just clear the previous visualization item layers and not the cards
    setShowVisualizationLayers(false);
  };

  const handleSelectedVizItemSearch = (vizItemId) => {
    // will focus on the visualization item along with its visualization item metadata card
    // will react to update the metadata on the sidedrawer
    if (!vizItems || !vizItemId) return;
    const vizItem = vizItems[vizItemId];
    const location = vizItem?.geometry?.coordinates[0][0];
    console.log({ location });
    setSelectedVizItems([vizItem]);
    setOpenDrawer(true);
    setZoomLocation(location);
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

    const vizItems = {}; // visualization_items[string] = visualization_item
    const regions = []; // string[]
    const vizItemIds = []; // string[] // for search
    const testData = data.slice(0, 10);
    // Object.keys(dataTree.current).forEach(region => {
    //   regions.push(dataTree.current[region]);
    //   dataTree.current[region].plumes.forEach(vizItem => {
    //     // check what visualization_item is in dataModels.ts
    //     vizItems[vizItem.id] = vizItem;
    //     vizItemIds.push(vizItem.id);
    //   });
    // });

    testData.forEach((items) => {
      vizItems[items.id] = items;
      vizItemIds.push(items.id);
    });
    // console.log({vizItems})
    setVizItems(vizItems);
    setRegions(regions);
    setVizItemIds(vizItemIds); // for search
    // the reference to datatree is in current, so see changes with respect to that
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataTree.current]);

  useEffect(() => {
    if (!dataTree.current || !selectedRegionId) return;
    const currentRegion = dataTree.current[selectedRegionId];
    const visualizationLayers = currentRegion.plumes.map(
      (layer) => layer.representationalPlume
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
    const VMIN = rescaleValues && rescaleValues[0][0];
    const VMAX = rescaleValues && rescaleValues[0][1];
    setVMIN(VMIN);
    setVMAX(VMAX);
    setColormap(colormap);
  }, [collectionMeta]);

  const onFilteredVizItems = (filteredVizItems) => {
    //   setFilteredVizItems(filteredVizItems);
    //   // console.log({ filteredVizItems });
  };
  // JSX
  return (
    <Box className='fullSize'>
      <div id='dashboard-map-container'>
        <MainMap>
          <Paper 
            className='title-container'
            sx={{
              backgroundColor: 'rgba(255, 255, 255, 0.85)',
              backdropFilter: 'blur(4px)',
              borderRadius: '16px',
            }}
          >
            <Title title={TITLE} description={DESCRIPTION} />
            <div className='title-content'>
              <HorizontalLayout>
                <Search
                  vizItems={Object.keys(vizItems).map((key) => vizItems[key])}
                  onSelectedVizItemSearch={handleSelectedVizItemSearch}
                ></Search>
              </HorizontalLayout>
              <HorizontalLayout>
                <FilterByDate
                  vizItems={Object.keys(vizItems).map((key) => vizItems[key])}
                  onFilteredVizItems={onFilteredVizItems}
                />
              </HorizontalLayout>
              <HorizontalLayout>
                <VizItemTimeline/>
              </HorizontalLayout>
            </div>
          </Paper>

          <MapZoom zoomLocation={zoomLocation} zoomLevel={zoomLevel} />
          <MapControls
            openDrawer={openDrawer}
            setOpenDrawer={setOpenDrawer}
            handleResetHome={handleResetHome}
            // handleResetToSelectedRegion={handleResetToSelectedRegion}
          />
          <MarkerFeature
            vizItems={Object.keys(vizItems).map((key) => vizItems[key])}
            onSelectVizItem={handleSelectedVizItem}
          ></MarkerFeature>
          <VisualizationLayers
            vizItems={visualizationLayers}
            VMIN={VMIN}
            VMAX={VMAX}
            colormap={colormap}
            assets={assets}
            handleLayerClick={handleSelectedVizLayer}
            hoveredVizLayerId={hoveredVizLayerId}
            setHoveredVizLayerId={setHoveredVizLayerId}
          />
        </MainMap>
        <PersistentDrawerRight
          open={openDrawer}
          setOpen={setOpenDrawer}
          selectedVizItems={filteredVizItems}
          vizItemMetaData={vizItemMetaData}
          metaDataTree={metaDataTree}
          collectionId={collectionId}
          vizItemsMap={vizItems}
          handleSelectedVizItems={handleSelectedVizLayer}
          hoveredVizItemId={hoveredVizLayerId}
          setHoveredVizItemId={setHoveredVizLayerId}
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
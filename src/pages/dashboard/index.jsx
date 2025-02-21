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
} from '@components';

import { getRegions } from '../dashboardContainer/helper/dataTransform';

import styled from 'styled-components';

import './index.css';

const TITLE = 'GOES Methane Plume Viewer';
const DESCRIPTION =
  'The Geostationary Operational Environmental Satellites collect \
images of the surface every 5 minutes. Only very large emission events can be detected, \
but plume expansion is easy to see over time. More plumes will be added soon.';

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
  const [visualizationLayers, setVisualizationLayers] = useState(true);

  //color map
  const [VMAX, setVMAX] = useState(100);
  const [VMIN, setVMIN] = useState(-92);
  const [colormap, setColormap] = useState('default');
  const [assets, setAssets] = useState('rad');

  // states for components/controls
  const [openDrawer, setOpenDrawer] = useState(false);
  const collectionId = data[0]?.collection;

  // handler functions
  const handleSelectedVizItem = (regionId) => {
    if (!regionId) return;
    setSelectedRegionId(regionId); // an useEffect handles it further
    const region = regions[regionId];
    const location = region?.geometry?.coordinates[0][0];
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
    setOpenDrawer(true);
    setSelectedVizItems([]); // reset the visualization items shown, to trigger re-evaluation of selected visualization item
  };

  const handleSelectedVizLayer = (vizItemId) => {
    const destructuredId = vizItemId.split('_');
    const [_, country, administrativeDivision, region, plumeId] =
      destructuredId;
    const regionId = `${country}_${administrativeDivision}_${region}_${plumeId}`;
    if (!regions || !regionId) return;
    const selectedRegion = regions[regionId];
    const location = selectedRegion?.geometry?.coordinates[0][0];
    handleSelectedVizItemSearch(regionId);
    handleAnimationReady(regionId);
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
    setSelectedRegionId(''); //to reset the visualization item that was shown
  };

  const handleAnimationReady = (regionId) => {
    // will make the visualization item ready for animation.
    if (!regionId) return;
    const region = regions[regionId];
    setVizItemsForAnimation(region.subDailyPlumes);
    // just clear the previous visualization item layers and not the cards
  };

  const handleSelectedVizItemSearch = (vizItemId) => {
    // will focus on the visualization item along with its visualization item metadata card
    // will react to update the metadata on the sidedrawer
    if (!vizItems || !vizItemId) return;
    const vizItem = vizItems[vizItemId];
    const location = vizItem?.geometry?.coordinates[0][0];
    setSelectedVizItems([vizItem]);
    setOpenDrawer(true);
    setZoomLocation(location);
    setZoomLevel(null); // take the default zoom level
    // setSelectedRegionId(''); //to reset the visualization item that was shown
    setVizItemsForAnimation([]); // to reset the previous animation
  };

  const handleResetHome = () => {
    setSelectedRegionId('');
    setHoveredVizLayerId('');
    setVisualizationLayers([]);
    setFilteredVizItems([]);
    setVizItemsForAnimation([]);
    setOpenDrawer(false);
    setZoomLevel(4);
    setZoomLocation([-98.771556, 32.967243]);
  };

  const handleResetToSelectedRegion = () => {
    // setHoveredVizItemId('');
    setVizItemsForAnimation([]);
    if (!prevSelectedRegionId.current) {
      return handleResetHome();
    }
    handleSelectedVizItem(prevSelectedRegionId.current);
  };

  // Component Effects
  useEffect(() => {
    if (!data.length) return;

    const vizItems = {}; // visualization_items[string] = visualization_item
    data.forEach((items) => {
      vizItems[items.id] = items;
    });
    const regions = getRegions(data);
    setVizItems(vizItems);
    setRegions(regions);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  useEffect(() => {
    if (!selectedRegionId) return;
    const currentRegion = regions[selectedRegionId];
    const visualizationLayers = currentRegion.representationalPlume;
    setVisualizationLayers([visualizationLayers]);
    setSelectedVizItems(visualizationLayers);
    setVizItemsForAnimation([]); // reset the animation
    // the reference to datatree is in current, so see changes with respect to that
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedRegionId]);

  useEffect(() => {
    const colormap = collectionMeta?.renders?.dashboard?.colormap_name;
    const rescaleValues = collectionMeta?.renders?.dashboard?.rescale;
    const VMIN = rescaleValues && rescaleValues[0][0];
    const VMAX = rescaleValues && rescaleValues[0][1];
    setVMIN(VMIN);
    setVMAX(VMAX);
    setColormap(colormap);
  }, [collectionMeta]);

  const handleHoveredVizLayer = (vizItemId) => {
    // console.log({ vizItemId });
  };

  const onFilteredVizItems = (filteredVizItems) => {
    //   setFilteredVizItems(filteredVizItems);
    //   // console.log({ filteredVizItems });
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
            handleResetToSelectedRegion={handleResetToSelectedRegion}
          />
          <MarkerFeature
            vizItems={Object.keys(regions).map((key) => regions[key])}
            onSelectVizItem={handleSelectedVizItem}
          ></MarkerFeature>
          {visualizationLayers.length && (
            <VisualizationLayers
              vizItems={visualizationLayers}
              VMIN={VMIN}
              VMAX={VMAX}
              colormap={colormap}
              assets={assets}
              onClickOnLayer={handleSelectedVizLayer}
              onHoverOverLayer={handleHoveredVizLayer}
            />
          )}
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
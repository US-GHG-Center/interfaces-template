import React, { useEffect, useState, useRef, useCallback } from 'react';
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
} from '@components';
import { useMapbox } from '../../components';
import styled from 'styled-components';
import { isFeatureWithinBounds } from './helper';
import './index.css';

const TITLE = 'EMIT Methane Plume Viewer';
const DESCRIPTION =
  'Using a special technique, the EMIT hyperspectral data\
   is used to visualize large methane plumes whenever the instrument \
   observes the surface. Due variations of the International Space Station orbit,\
   EMIT does not have a regular observation repeat cycle.';
const HorizontalLayout = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 12px;
`;
function Dashboard({
  plumes,
  collectionMeta,
  vizItemMetaData,
  zoomLocation,
  setZoomLocation,
  zoomLevel,
  setZoomLevel,
  collectionId,
  loadingData,
}) {
  // states for data
  const [vizItems, setVizItems] = useState([]); // store all available visualization items
  const [selectedRegionId, setSelectedRegionId] = useState(''); // region_id of the selected region (marker)
  const prevSelectedRegionId = useRef(''); // to be able to restore to previously selected region.
  const [selectedVizItems, setSelectedVizItems] = useState([]); // all visualization items for the selected region (marker)
  const [hoveredVizLayerId, setHoveredVizLayerId] = useState(''); // vizItem_id of the visualization item which was hovered over
  const [filteredVizItems, setFilteredVizItems] = useState([]); // visualization items for the selected region with the filter applied

  const [vizItemIds, setVizItemIds] = useState([]); // list of vizItem_ids for the search feature.
  const [vizItemsForAnimation, setVizItemsForAnimation] = useState([]); // list of subdaily_visualization_item used for animation

  const [showVisualizationLayers, setShowVisualizationLayers] = useState(true);
  const [visualizationLayers, setVisualizationLayers] = useState(true);

  // console.log('Rerendering dashboard');
  const { map } = useMapbox();
  // states for components/controls
  const [openDrawer, setOpenDrawer] = useState(false);

  //colormap states
  const [VMAX, setVMAX] = useState(100);
  const [VMIN, setVMIN] = useState(-92);
  const [colormap, setColormap] = useState('plasma');
  const [assets, setAssets] = useState('ch4-plume-emissions');
  
  // console.log({collectionMeta})

  //states for data

  // handler functions
  const handleSelectedVizItem = (vizItemId) => {
    if (!vizItemId) return;
    setShowVisualizationLayers(true);
    const vizItem = filteredVizItems[vizItemId];
    // console.log({ vizItem });
    const location = vizItem?.geometry?.coordinates[0][0];
    setVisualizationLayers([vizItem]);
    setZoomLocation(location);
    setZoomLevel(12); // take the default zoom level
    setOpenDrawer(true);
    setSelectedVizItems([]); // reset the visualization items shown, to trigger re-evaluation of selected visualization item
  };

  const handleSelectedVizLayer = (vizLayerId) => {
    if (!vizItems || !vizLayerId) return;
    // console.log({ vizLayerId });
  };

  const handleSelectedVizItemSearch = (vizItemId) => {
    // will focus on the visualization item along with its visualization item metadata card
    // will react to update the metadata on the sidedrawer
    if (!vizItems || !vizItemId) return;
    // console.log({ vizItemId });
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

  const handleResetToSelectedRegion = () => {
    // setHoveredVizItemId("");
    setVizItemsForAnimation([]);
    if (!prevSelectedRegionId.current) {
      return handleResetHome();
    }
    handleSelectedVizItem(prevSelectedRegionId.current);
  };

  const renderRasterOnZoomed = (map, filteredVizItems) => {
    const bounds = map.getBounds();
    const itemsInsideZoomedRegion = Object.values(filteredVizItems)?.filter(
      (value) => isFeatureWithinBounds(value?.polygonGeometry, bounds)
    );
    if (itemsInsideZoomedRegion.length > 0) {
      setVisualizationLayers(itemsInsideZoomedRegion);
      setOpenDrawer(true);
    } else {
      setVisualizationLayers([]);
    }
    // console.log({itemsInsideZoomedRegion})
  };

  const handleHoveredVizLayer = (vizItemId) => {
    // console.log({ HoveredItemDashboard: vizItemId });
    if (!map) return;
    // console.log({ layers: map.getStyle().layers });
    setHoveredVizLayerId(vizItemId);
  };

  const handleFilterVizItems = (result) => {
    const newItems = {};
    result.forEach((item) => {
      newItems[item?.id] = item;
    });
    setFilteredVizItems(newItems);
  };

  useEffect(() => {
    if (!map) return;
    const handleZoom = () => {
      const zoom = map.getZoom();
      if (zoom > 8) {
        renderRasterOnZoomed(map, filteredVizItems);
      } else {
        setVisualizationLayers([]);
      }
    };
    map.on('zoomend', handleZoom);
    map.on('dragend', handleZoom);
    return () => {
      map.off('zoomend', handleZoom);
    };
  }, [map, filteredVizItems]);

  useEffect(() => {
    if (!map) return;
    const zoom = map.getZoom();
    // console.log('Here i am', zoom);
    if (zoom > 8 && !!filteredVizItems) {
      renderRasterOnZoomed(map, filteredVizItems);
    }
  }, [map, filteredVizItems]);

  //

  // Component Effects
  useEffect(() => {
    if (!plumes) return;
    setVizItems(plumes);
    setFilteredVizItems(plumes);
  }, [plumes]);

  useEffect(() => {
    const colormap = collectionMeta?.renders?.dashboard?.colormap_name;
    const rescaleValues = collectionMeta?.renders?.dashboard?.rescale;
    const VMIN = rescaleValues && rescaleValues[0][0];
    const VMAX = rescaleValues && rescaleValues[0][1];
    setVMIN(VMIN);
    setVMAX(VMAX);
    setColormap(colormap);
  }, [collectionMeta]);

  return (
    <Box className='fullSize'>
      <div id='dashboard-map-container'>
        {/* <MainMap> */}
        <Paper className='title-container'>
          <Title title={TITLE} description={DESCRIPTION} />
          <div className='title-content'>
            <HorizontalLayout>
              <Search
                vizItems={Object.keys(filteredVizItems).map(
                  (key) => filteredVizItems[key]
                )}
                onSelectedVizItemSearch={handleSelectedVizItemSearch}
              ></Search>
            </HorizontalLayout>
            <HorizontalLayout>
              <FilterByDate
                vizItems={Object.keys(vizItems).map((key) => vizItems[key])}
                onFilteredItems={handleFilterVizItems}
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
          vizItems={Object.keys(filteredVizItems).map(
            (item) => filteredVizItems[item]
          )}
          onSelectVizItem={handleSelectedVizItem}
        ></MarkerFeature>
        <VisualizationLayers
          vizItems={visualizationLayers}
          VMIN={VMIN}
          VMAX={VMAX}
          colormap={colormap}
          assets={assets}
          highlightedLayer={hoveredVizLayerId}
          onClickOnLayer={handleSelectedVizLayer}
          onHoverOverLayer={handleHoveredVizLayer}
        />
        {/* </MainMap> */}
        <PersistentDrawerRight
          open={openDrawer}
          setOpen={setOpenDrawer}
          selectedVizItems={visualizationLayers}
          hoveredVizLayerId={hoveredVizLayerId}
          collectionId={collectionId}
          onSelectVizLayer={handleSelectedVizLayer}
          onHoverOnVizLayer={handleHoveredVizLayer}
        />
      </div>
      {VMAX && (
        <ColorBar
          label={'Methane Column Enhancement (mol/m²)'}
          VMAX={VMAX}
          VMIN={VMIN}
          colormap={colormap}
          STEPS={5}
        />
      )}
      {loadingData && <LoadingSpinner />}
    </Box>
  );
}

export function EmitDashboard({
  plumes,
  collectionMeta,
  zoomLocation,
  setZoomLocation,
  zoomLevel,
  setZoomLevel,
  collectionId,
  loadingData,
}) {
  return (
    <MainMap>
      <Dashboard
        plumes={plumes}
        zoomLocation={zoomLocation}
        zoomLevel={zoomLevel}
        setZoomLocation={setZoomLocation}
        setZoomLevel={setZoomLevel}
        collectionMeta={collectionMeta}
        collectionId={collectionId}
        loadingData={loadingData}
      />
    </MainMap>
  );
}

import React, { useEffect } from 'react';
import { useMapbox } from '../../../context/mapContext';
import { isFeatureWithinBounds } from '../utils/index';
export function MapViewPortComponent({
  filteredVizItems,
  setVisualizationLayers,
  setOpenDrawer,
}) {
  const { map } = useMapbox();

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
    // const handleMouseMove = () => {
    //   const layers = map.getStyle().layers;
    //   console.log({ layers });
    // };
    map.on('zoomend', handleZoom);
    map.on('dragend', handleZoom);

    // map.on('mousemove', handleMouseMove);

    return () => {
      map.off('zoomend', handleZoom);
      map.off('dragend', handleZoom);
      // map.off('mousemove', handleMouseMove);
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
  return <div>index</div>;
}

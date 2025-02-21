import { useEffect } from 'react';
import { useMapbox } from '../../../context/mapContext';
import {
  addSourceLayerToMap,
  getSourceId,
  getLayerId,
  layerExists,
  sourceExists,
} from '../utils';
import { addSourcePolygonToMap } from '../utils/index';

// eslint-disable-next-line prettier/prettier
export const VisualizationLayer = ({
  VMIN,
  VMAX,
  colormap,
  assets,
  vizItem,
  onClickOnLayer,
  onHoverOverLayer,
}) => {
  const { map } = useMapbox();
  const vizItemId = vizItem.id;

  useEffect(() => {
    if (!map || !vizItem) return;
    const feature = vizItem;
    const rasterSourceId = getSourceId('raster' + vizItemId);
    const rasterLayerId = getLayerId('raster' + vizItemId);
    const polygonSourceId = getSourceId('polygon' + vizItemId);
    const polygonLayerId = getLayerId('polygon' + vizItemId);

    addSourceLayerToMap(
      map,
      VMIN,
      VMAX,
      colormap,
      assets,
      feature,
      rasterSourceId,
      rasterLayerId
    );
    addSourcePolygonToMap(map, feature, polygonSourceId, polygonLayerId);

    const onClickHandler = (e) => {
      onClickOnLayer && onClickOnLayer(vizItemId);
    };

    const onHoverHandler = (e) => {
      onHoverOverLayer && onHoverOverLayer(vizItemId);
    };

    map.setLayoutProperty(rasterLayerId, 'visibility', 'visible');
    map.on('click', polygonLayerId, onClickHandler);
    map.on('mousemove', polygonLayerId, onHoverHandler);

    return () => {
      // cleanups
      if (map) {
        if (layerExists(map, rasterLayerId)) map.removeLayer(rasterLayerId);
        if (sourceExists(map, rasterSourceId)) map.removeSource(rasterSourceId);
        if (layerExists(map, polygonLayerId)) map.removeLayer(polygonLayerId);
        if (sourceExists(map, polygonSourceId))
          map.removeSource(polygonSourceId);
        map.off('click', 'clusters', onClickHandler);
      }
    };
  }, [
    vizItem,
    map,
    vizItemId,
    onClickOnLayer,
    onHoverOverLayer,
    VMIN,
    VMAX,
    colormap,
    assets,
  ]);

  return null;
};
/*
      Add layers of visualization components on top of map
      
      @param {number} VMIN - minimum value of the color index
      @param {number} VMAX - maximum value of the color index
      @param {string} colormap - name of the colormap
      @param {string} assets - name of the asset of the color
      @param {STACItem} vizItems   - An array of STACitems which are to be displayed
      @param {function} onHoverOverlayer - function to execute when mouse is hovered on layer. will provide vizItemId as a parameter to the callback
      @param {function} onClickOnlayer - function to execute when layer is clicked. will provide vizItemId as a parameter to the callback
*/

export const VisualizationLayers = ({
  VMIN,
  VMAX,
  colormap,
  assets,
  vizItems,
  onHoverOverLayer,
  onClickOnLayer,
}) => {
  const { map } = useMapbox();
  if (!map || !vizItems.length) return;

  return (
    <>
      {vizItems.length &&
        vizItems.map((vizItem) => (
          <VisualizationLayer
            key={vizItem.id}
            vizItem={vizItem}
            onClickOnLayer={onClickOnLayer}
            onHoverOverLayer={onHoverOverLayer}
            VMIN={VMIN}
            VMAX={VMAX}
            colormap={colormap}
            assets={assets}
          />
        ))}
    </>
  );
};

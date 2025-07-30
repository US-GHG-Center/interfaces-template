import { PopularMapMarkerColors } from "./constants";
import { stringToNumberHash } from '../../../utils';

/*
      Get id for source

      @param {string} idx   - Name/identification of source
*/
export const getSourceId = (idx) => {
  return 'raster-source-' + idx;
};

/*
      Get id for layer

      @param {string} idx    - Name/identification of layer
*/
export const getLayerId = (idx) => {
  return 'raster-layer-' + idx;
};

/*
      Add source and layer on map
      @param {map object} map - instance of map 
      @param {number} VMIN - minimum value of the color index
      @param {number} VMAX - maximum value of the color index
      @param {string} colormap - name of the colormap
      @param {string} assets - name of the asset of the color
      @param {STACItem} feature - collection of features to add on map 
      @param {string} sourceId - id of the source to add
      @param {string} layerId - id of the layer to add source on 
*/
export const addSourceLayerToMap = (
  map,
  VMIN,
  VMAX,
  colormap,
  assets,
  feature,
  sourceId,
  layerId
) => {
  if (!map || (sourceExists(map, sourceId) && layerExists(map, layerId)))
    return;

  const collection = feature.collection; // feature.collection
  let itemId = feature.id;

  const TILE_URL =
    `${process.env.REACT_APP_RASTER_API_URL}/collections/${collection}/items/${itemId}/tiles/WebMercatorQuad/{z}/{x}/{y}@1x` +
    '?assets=' +
    assets +
    '&bidx=1' +
    '&colormap_name=' +
    colormap +
    '&rescale=' +
    VMIN +
    '%2C' +
    VMAX +
    '&nodata=nan';

  map.addSource(sourceId, {
    type: 'raster',
    tiles: [TILE_URL],
    tileSize: 256,
    bounds: feature.bbox,
  });

  map.addLayer({
    id: layerId,
    type: 'raster',
    source: sourceId,
    layout: {
      visibility: 'none', // Set the layer to be hidden initially
    },
    paint: {},
  });
};

/*
      Check if layer exists on map
      @param {map object} map - instance of map 
      @param {string} idx    - Name/identification of layer
     
*/
export function layerExists(map, layerId) {
  return !!map.getLayer(layerId);
}

/*
      Check if source exists on map
      @param {map object} map - instance of map 
      @param {string} idx    - Name/identification of source
     
*/
export function sourceExists(map, sourceId) {
  return !!map.getSource(sourceId);
}

/*
      Add source and layer of on map
      @param {map object} map - instance of map 
      @param {STACItem} feature -  polygon features to add on map 
      @param {string} polygonSourceId - id of the polygon source to add
      @param {string} polygonLayerId - id of the polygon layer to add source on 
*/
export const addSourcePolygonToMap = (
  map,
  feature,
  polygonSourceId,
  polygonLayerId
) => {
  if (
    !map ||
    (sourceExists(map, polygonSourceId) && layerExists(map, polygonLayerId))
  )
    return;

  map.addSource(polygonSourceId, {
    type: 'geojson',
    data: feature,
  });

  map.addLayer({
    id: polygonLayerId,
    type: 'fill',
    source: polygonSourceId,
    layout: {},
    paint: {
      'fill-outline-color': '#20B2AA',
      'fill-color': 'transparent',
    },
  });
};


/* Returns a color based on the category.
   Uses a hash function to map the category to an index in the PopularMapMarkerColors array
*/
export function getMarkerColor(category) {
  if (!category) return PopularMapMarkerColors[0]; // Default color if no category is provided
  const colorIdx = stringToNumberHash(category) % PopularMapMarkerColors.length;
  return PopularMapMarkerColors[colorIdx];
}

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
    VMAX;
  // "&nodata=-9999";

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

export function stringToNumberHash(str) {
  let hash = 0;
  // If the string is empty, return 0
  if (str.length === 0) {
    return hash;
  }

  // Iterate over each character in the string
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i); // Get the Unicode value of the character
    hash = ((hash << 5) - hash) + char; // A common hash algorithm (hash * 31 + char)
    hash |= 0; // Convert to a 32-bit integer (effectively a signed 32-bit integer)
  }

  // Return the absolute value to ensure it's always positive,
  // or you can leave it signed if your use case allows negative numbers.
  // Using Math.abs() to ensure it's positive, as colors or indices are usually positive.
  return Math.abs(hash);
}

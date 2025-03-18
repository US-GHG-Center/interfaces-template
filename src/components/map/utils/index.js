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
    `${process.env.REACT_APP_RASTER_API_URL}/collections/${collection}/tiles/WebMercatorQuad/{z}/{x}/{y}@1x?item=` +
    itemId +
    '&assets=' +
    assets +
    '&bidx=1' +
    '&colormap_name=' +
    colormap +
    '&rescale=' +
    VMIN +
    '%2C' +
    VMAX +
    '&nodata=-9999';

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
  polygonLayerId,
  width
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
    type: 'line',
    source: polygonSourceId,
    layout: {},
    paint: {
      'line-color': '#0098d7',
      'line-width': width,
    },
  });
};
/*
      Add source and layer of polygon fill layer on map
      @param {map object} map - instance of map 
      @param {STACItem} feature -  polygon features to add on map 
      @param {string} polygonSourceId - id of the polygon source to add
      @param {string} polygonLayerId - id of the polygon layer to add source on 
*/
export const addFillPolygonToMap = (
  map,
  feature,
  polygonFillSourceId,
  polygonFillLayerId
) => {
  if (
    !map ||
    (sourceExists(map, polygonFillSourceId) &&
      layerExists(map, polygonFillLayerId))
  )
    return;

  map.addSource(polygonFillSourceId, {
    type: 'geojson',
    data: feature,
  });

  map.addLayer({
    id: polygonFillLayerId,
    type: 'fill',
    source: polygonFillSourceId,
    layout: {},
    paint: {
      'fill-opacity': 0,
    },
  });
};

export const addCoveragePolygon = (
  map,
  polygonSourceId,
  polygonLayerId,
  polygonFeature
) => {
  if (!map.isStyleLoaded()) {
    map.once('style.load', () =>
      addCoveragePolygon(map, polygonSourceId, polygonLayerId, polygonFeature)
    );
    return;
  }

  if (!map.getSource(polygonSourceId)) {
    map.addSource(polygonSourceId, {
      type: 'geojson',
      data: polygonFeature,
    });
  }

  if (!map.getLayer(polygonLayerId)) {
    map.addLayer({
      id: polygonLayerId,
      type: 'fill',
      source: polygonSourceId,
      layout: {},
      paint: {
        'fill-outline-color': '#1E90FF',
        'fill-color': 'rgba(173, 216, 230, 0.4)',
      },
    });

    // Ensure coverage layer stays below rasters
    const layers = map.getStyle().layers;
    // console.log({ layers });
    const rasterLayers = layers.filter((layer) =>
      layer.id.startsWith('raster-')
    );
    if (rasterLayers.length > 0) {
      const firstRasterLayerId = rasterLayers[0].id;
      map.moveLayer(polygonLayerId, firstRasterLayerId);
    }
  }
};

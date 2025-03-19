import {
  Features,
  Metadata,
  STACItem,
  Plume,
  PointGeometry,
  Geometry,
  Properties,
  CoverageData,
  CoverageFeature,
  CoverageGeoJsonData,
} from '../../../dataModel';

import {
  getAllLocation,
  getResultArray,
  UNKNOWN,
  fetchLocationFromEndpoint,
} from '../../../services/api';

const reverseGeocoding = async (
  allLocation: Record<string, string>,
  feature: Features
) => {
  const id = feature?.properties['Plume ID'];
  const locationFromLookup = allLocation[id];
  if (locationFromLookup !== undefined && locationFromLookup !== UNKNOWN) {
    return locationFromLookup;
  } else {
    const lat = feature.properties['Latitude of max concentration'];
    const lon = feature.properties['Longitude of max concentration'];
    const location = await fetchLocationFromEndpoint(lat, lon);
    // console.log({ location });
    return location;
  }
};

export const transformMetadata = async (
  metadata: Metadata,
  stacData: STACItem[]
) => {
  const metaFeatures = getResultArray(metadata);
  const allLocation: Record<string, string> = await getAllLocation();

  const polygonLookup = new Map<string, Features>();
  let pointLookup = new Map<string, Features>();

  for (const feature of metaFeatures) {
    const id = feature.properties['Data Download']
      .split('/')
      .pop()
      .split('.')[0];

    if (feature.geometry.type === 'Polygon') {
      polygonLookup.set(id, feature);
    } else if (feature.geometry.type === 'Point') {
      pointLookup.set(id, feature);
    }
  }
  const sortedData = stacData.sort((prev: STACItem, next: STACItem): number => {
    const prev_date = new Date(prev.properties.datetime).getTime();
    const next_date = new Date(next.properties.datetime).getTime();
    return prev_date - next_date;
  });
  // for test purposes only 
  // stacData = sortedData.slice(0, 200);
  // Transform stac data to markers with associated data
  const plumes: Record<string, Plume> = {};
  stacData.forEach(async (item: STACItem) => {
    const id = item.id;
    const pointInfo:Features = pointLookup.get(id) as Features;
    const polygonInfo:Features = polygonLookup.get(id) as Features;
    const location = await reverseGeocoding(allLocation, pointInfo as Features);
    const properties: Properties = {
      longitudeOfMaxConcentration:
        pointInfo?.properties['Longitude of max concentration'],
      latitudeOfMaxConcentration:
        pointInfo?.properties['Latitude of max concentration'],
      plumeId: pointInfo?.properties['Plume ID'],
      concentrationUncertanity:
        pointInfo?.properties['Concentration Uncertainty (ppm m)'],
      maxConcentration:
        pointInfo?.properties['Max Plume Concentration (ppm m)'],
      orbit: Number(pointInfo?.properties['Orbit']),
      utcTimeObserved: pointInfo?.properties['UTC Time Observed'],
      pointStyle: pointInfo?.properties['style'],
      polygonStyle: polygonInfo?.properties['style'],
      plumeCountNumber: pointInfo?.properties?.plume_complex_count,
      assetLink: pointInfo?.properties['Data Download'],
      dcid: pointInfo?.properties?.DCID,
      daacSceneNumber: pointInfo?.properties['DAAC Scene Numbers'],
      sceneFID: pointInfo?.properties['Scene FIDs'],
      mapEndTime: pointInfo?.properties?.map_endtime,
      location: location as string,
    };
    const lon =
      pointInfo?.geometry?.type === 'Point'
        ? (pointInfo.geometry.coordinates as number[])[0]
        : undefined;
    const lat =
      pointInfo?.geometry?.type === 'Point'
        ? (pointInfo.geometry.coordinates as number[])[1]
        : undefined;
    plumes[id] = {
      id: item.id,
      bbox: item.bbox,
      type: item.type,
      lat: lat,
      lon: lon,
      links: item.links,
      assets: item.assets,
      geometry: item.geometry,
      collection: item.collection,
      properties: item.properties,
      plumeProperties: properties,
      pointGeometry: pointInfo?.geometry as PointGeometry,
      polygonGeometry: polygonInfo?.geometry as Geometry,
      stac_version: item.stac_version,
      stac_extensions: item.stac_extensions,
    };
  });

  return {
    data: plumes,
  };
};

const roundCoordinates = (geometry: Geometry) => {
  if (geometry && geometry.coordinates) {
    geometry.coordinates = geometry.coordinates.map((polygon) =>
      polygon.map(
        (coord) => coord.map((value) => Math.round(value * 100) / 100) // Round to 2 decimal places
      )
    );
  }
  return geometry;
};

export function createIndexedCoverageData(coverageData: CoverageData) {
  const coverageFeatures: CoverageFeature[] = coverageData.features;
  const processedCoverages = coverageFeatures.map((feature) => {
    const processedFeature: CoverageFeature = {
      properties: {
        start_time: feature.properties['start_time'],
        end_time: feature.properties['end_time'],
      },
      geometry: roundCoordinates(feature.geometry),
    } as CoverageFeature;
    return processedFeature;
  });

  // Create sorted array of features by date for binary search
  const sortedFeatures: CoverageFeature[] = [...processedCoverages].sort(
    (a, b) => {
      const dateA = new Date(
        a.properties.start_time || a.properties.start_time || 0
      );
      const dateB = new Date(
        b.properties.start_time || b.properties.start_time || 0
      );
      return dateA.getTime() - dateB.getTime();
    }
  );
  const result: CoverageGeoJsonData = {
    type: 'FeatureCollection',
    features: sortedFeatures,
  };

  return result;
}

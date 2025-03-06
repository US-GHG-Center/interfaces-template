const fs = require('fs');
const GEOAPIFY_KEY = process.env.REACT_APP_GEOAPIFY_APIKEY;
const LOCATION_LOOKUP = './src/lookups/plumeIdLocation.json';
const UNKNOWN = 'unknown';
const fetchData = async (endpoint) => {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Error('Error in Network');
    }
    return await response.json();
  } catch (err) {
    console.error('Error while getting data');
    return null;
  }
};

const fetchCollectionMetadata = async (collectionUrl) => {
  try {
    const metaData = await fetchData(collectionUrl);
    return metaData;
  } catch (err) {
    console.error('Error fetching data: ', err);
  }
};

const writeLookupLocationToFile = async (location) => {
  try {
    fs.writeFileSync(LOCATION_LOOKUP, JSON.stringify(location, null, 2));
  } catch (err) {
    console.log('Error while updating location lookup');
    return false;
  }
  return true;
};

const processLocation = async (features) => {
  const lookup_location = await require(LOCATION_LOOKUP);
  // console.log({ lookup_location });
  let change_lookup = false;
  let writeResponse = true;
  for (const feature of features) {
    const lat = feature.properties['Latitude of max concentration'];
    const lon = feature.properties['Longitude of max concentration'];
    const id = feature.properties['Plume ID'];
    if (lookup_location[id] === undefined || lookup_location[id] === UNKNOWN) {
      const location = await fetchLocationFromEndpoint(lat, lon);
      lookup_location[id] = location;
      change_lookup = true;
    }
  }
  if (change_lookup) {
    writeResponse = await writeLookupLocationToFile(lookup_location);
  }
  return writeResponse;
};

const fetchLocationFromEndpoint = async (lat, lon) => {
  let location = '';
  try {
    const endpoint = `${process.env.REACT_APP_LAT_LON_TO_COUNTRY_ENDPOINT}?lat=${lat}&lon=${lon}&&apiKey=${GEOAPIFY_KEY}`;
    const location_data = await fetchData(endpoint);
    let location_properties = location_data.features[0].properties;
    let sub_location =
      location_properties['city'] || location_properties['county'] || UNKNOWN;
    let state = location_properties['state']
      ? `${location_properties['state']}, `
      : '';
    let country = location_properties['country']
      ? location_properties['country']
      : '';
    location = `${sub_location}, ${state} ${country}`;
  } catch (error) {
    console.error(`Error fetching location for ${lat}, ${lon}:`, error);
    location = UNKNOWN;
  }
  return location;
};

async function main() {
  const collectionUrl = process.env.REACT_APP_METADATA_ENDPOINT;
  const methaneData = await fetchCollectionMetadata(collectionUrl);
  const features = methaneData?.features;
  const pointFeatures = features?.filter(
    (item) => item?.geometry.type === 'Point'
  );
  const result = await processLocation(pointFeatures);
  console.log('Finished Processing Locations', result);
  // console.log({ GEOAPIFY_KEY });
}

main();

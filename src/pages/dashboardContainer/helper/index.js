/**
 * The below code is for demonstration purpose only.
 * The transformation could be made inorder to consolidate data from many sources.
 * Also, concrete dataFactory implementation, for example, ExampleDataFactory,
 * could be formed during transformation.
 */

import { fetchAllFromFeaturesAPI } from '../../../services/api';

export const extractStationCollections = (
  collections,
  metadataDict,
  agency,
  ghg,
  dataCategory,
  region,
  sitecode
) => {
  // convention for station collection_id: <agency>_<data_category>_<region>_<sitecode>_<ghg>_<frequency>_concentrations
  // filter the stations that belong with respect to the query params
  let filteredCollection = collections
    .map((collection) => {
      if (
        collection &&
        collection.id &&
        collection.id.includes(agency) &&
        collection.id.includes(ghg) &&
        collection.id.includes(dataCategory) &&
        collection.id.includes(region)
      ) {
        // TODO: remove later after the functionality to add properties in collections is implemented in Features API directly.
        let stationId = getStationId(collection.id);
        collection['properties'] = { ...metadataDict[stationId] };
        return collection;
      }
      return null;
    })
    .filter((elem) => elem);
  return filteredCollection;
};

export const extractMetaData = async (collections) => {
  // convention for metadata collection_id: public.<agency>_<data_category>_<region>_metadata
  // example: public.nist_testbed_lam_metadata
  let metaCollection = collections
    .map((collection) => {
      if (collection && collection.id && collection.id.includes('metadata')) {
        return collection;
      }
      return null;
    })
    .filter((elem) => elem);
  let resultPromise = metaCollection.map((collection) => {
    let url = `${process.env.REACT_APP_STAC_API_URL}/collections/${collection.id}/items`;
    return fetchAllFromFeaturesAPI(url);
  });
  let metaDataCollectionItems = await Promise.all(resultPromise);
  let metaDataItems = metaDataCollectionItems.flat(Infinity);
  let metaDataProperties = metaDataItems
    .map(({ properties }) => properties)
    .filter((elem) => elem);
  return metaDataProperties;
};

export const getMetaDataDictionary = (collectionsMetaData) => {
  const Dict = {};
  collectionsMetaData.forEach((metaData) => {
    let stationCode = metaData['station_code'].toUpperCase();
    if (!(stationCode in Dict)) {
      Dict[stationCode] = { ...metaData };
    }
  });
  return Dict;
};

// helper
const getStationId = (collectionId) => {
  const stationId = collectionId.split('_')[3];
  return stationId.toUpperCase();
};

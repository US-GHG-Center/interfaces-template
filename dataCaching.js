// This service uses the api service to collect all the data and then create a json at the end.
// The reason behind this service is to eager load all the application data beforehand.
// The current implementation of STAC api doesnot allow parallelization to fetch the STAC items.
// It is because the pagination of current STAC API implementation needs the next and limit.
// Here, next dependent on its previous response.
// Hence, to speed up the process of collecting the STAC items for OCO3 collection,
// we have created this task. This runs before deployment (both preview and non-preview)
// It is also triggered on some frequency to update the data.

const dotenv = require('dotenv');
const fs = require('fs');

dotenv.config(); // Load environment variables from .env

async function downloadCache(collectionId) {
  try {
    // get all the collection items
    const collectionItemUrl = `${process.env.REACT_APP_STAC_API_URL}/collections/${collectionId}/items`;
    const data = await fetchAllFromSTACAPI(collectionItemUrl);
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    process.exit(1);
  }
}

function stacItemResponse(collectionId, features) {
  return {
    type: 'FeatureCollection',
    links: [
      {
        rel: 'collection',
        type: 'application/json',
        href: `${process.env.REACT_APP_STAC_API_URL}/collections/${collectionId}`,
      },
      {
        rel: 'parent',
        type: 'application/json',
        href: `${process.env.REACT_APP_STAC_API_URL}/collections/${collectionId}`,
      },
      {
        rel: 'root',
        type: 'application/json',
        href: `${process.env.REACT_APP_STAC_API_URL}/`,
      },
      {
        rel: 'self',
        type: 'application/geo+json',
        href: `https://staging.openveda.cloud/api/stac/collections/${collectionId}/items`,
      },
    ],
    features: features,
    numberMatched: features.length,
    numberReturned: features.length,
  };
}

(async function main() {
  try {
    let collectionId = process.argv.slice(2)[0] || 'oco3-co2-sams-daygrid-v11r';
    let data = await downloadCache(collectionId);
    let stacItems = stacItemResponse(collectionId, data);
    const jsonResponse = JSON.stringify(stacItems, null, 2);
    if (!fs.existsSync('./public')) {
      fs.mkdirSync('./public');
    }
    fs.writeFileSync(`./public/${collectionId}.json`, jsonResponse);
  } catch (error) {
    console.error('Error fetching data:', error);
    process.exit(1);
  }
})();

// helpers

async function fetchAllFromSTACAPI(STACApiUrl) {
  // it will fetch all collection items from all stac api.
  // do not provide offset and limits in the url
  try {
    return await apiCaller(STACApiUrl);
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
}

/**
 * Fetches data from a STAC API endpoint.
 *
 * @param {string} STACApiUrl The URL of the STAC API endpoint.
 * @returns {Promise<any>} A promise that resolves to the list of items fetched from the API.
 */
async function apiCaller(STACApiUrl) {
  let requiredResult = [];

  if (!STACApiUrl) return requiredResult;

  let urlWithLimit = STACApiUrl;

  if (!STACApiUrl.includes('limit') && STACApiUrl.includes('token')) {
    urlWithLimit = `${STACApiUrl}&limit=10000`;
  }
  if (!STACApiUrl.includes('limit') && !STACApiUrl.includes('token')) {
    urlWithLimit = `${STACApiUrl}?limit=10000`;
  }

  console.log('## fetching from --> ', urlWithLimit);
  const response = await fetch(urlWithLimit);
  if (!response.ok) {
    throw new Error('Error in Network');
  }
  const jsonResult = await response.json();
  requiredResult.push(...getResultArray(jsonResult));
  console.log('## fetching from --> ', urlWithLimit, ' Complete.');

  let next = '';
  jsonResult.links.forEach((link) => {
    if (link.rel === 'next') {
      next = link.href;
    }
  });

  // recursive call to fetch the data
  let subApiResult = await apiCaller(next);
  return [...requiredResult, ...subApiResult];
}

function getResultArray(result) {
  if ('features' in result) {
    // the result is for collection item
    return result.features;
  }
  if ('collections' in result) {
    // the result is for collection
    return result.collections;
  }
  return [];
}

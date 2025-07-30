export const fetchAllFromSTACAPI = async (STACApiUrl) => {
  // it will fetch all collection items from all stac api.
  // do not provide offset and limits in the url
  try {
    return await apiCaller(STACApiUrl);
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

/**
 * Fetches data from a STAC API endpoint.
 *
 * @param {string} STACApiUrl The URL of the STAC API endpoint.
 * @returns {Promise<any>} A promise that resolves to the list of items fetched from the API.
 */
const apiCaller = async (STACApiUrl) => {
  let requiredResult = [];

  if (!STACApiUrl) return requiredResult;

  let urlWithLimit = STACApiUrl;

  if (!STACApiUrl.includes('limit') && STACApiUrl.includes('token')) {
    urlWithLimit = `${STACApiUrl}&limit=10000`;
  }
  if (!STACApiUrl.includes('limit') && !STACApiUrl.includes('token')) {
    urlWithLimit = `${STACApiUrl}?limit=10000`;
  }

  const response = await fetch(urlWithLimit);
  if (!response.ok) {
    throw new Error('Error in Network');
  }
  const jsonResult = await response.json();
  requiredResult.push(...getResultArray(jsonResult));

  let next = '';
  jsonResult.links.forEach((link) => {
    if (link.rel === 'next') {
      next = link.href;
    }
  });

  // recursive call to fetch the data
  let subApiResult = await apiCaller(next);
  return [...requiredResult, ...subApiResult];
};

// // The following code is to parallize the stac download item download.
// const fetchAllDataSTAC = async (STACApiUrl, numberMatched) => {
//   // NOTE: STAC API doesnot accept offset as a query params. So, need to pull all the items using limit.
//   try {
//     console.log('++++', STACApiUrl);
//     const fullDataPromise = fetch(
//       addOffsetsToURL(STACApiUrl, 0, numberMatched)
//     );
//     let result = await fullDataPromise;
//     let jsonResult = await result.json();
//     let allResult = [...getResultArray(jsonResult)];
//     return allResult;
//   } catch (error) {
//     console.error('Error fetching data:', error);
//   }
// };

// helpers

// const addOffsetsToURL = (url, offset, limit) => {
//   if (url.includes('?')) {
//     return `${url}&limit=${limit}&offset=${offset}`;
//   } else {
//     return `${url}?limit=${limit}&offset=${offset}`;
//   }
// };

const getResultArray = (result) => {
  if ('features' in result) {
    // the result is for collection item
    return result.features;
  }
  if ('collections' in result) {
    // the result is for collection
    return result.collections;
  }
  return [];
};

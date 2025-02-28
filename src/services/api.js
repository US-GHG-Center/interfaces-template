
export const fetchData = async (endpoint) => {
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


export const fetchCollectionMetadata = async (collectionUrl) => {
  try {
    const metaData = await fetchData(collectionUrl)
    return   metaData;
  } catch (err) {
    console.error('Error fetching data: ', err)
  }
}

export const fetchAllFromSTACAPI = async (STACApiUrl) => {
  // it will fetch all collection items from all stac api.
  // do not provide offset and limits in the url
  // console.log({ STACApiUrl });
  try {
    let requiredResult = [];
    // fetch in the collection from the stac api
     const jsonResult = await fetchData(STACApiUrl);
    if (!jsonResult) return [];
    
    const initialResults = getResultArray(jsonResult);
    requiredResult.push(...initialResults);

    // need to pull in remaining data based on the pagination information
    const { matched, returned } = jsonResult.context;
    if (matched > returned) {
      let allData = await fetchAllDataSTAC(STACApiUrl, matched);
      requiredResult = [...allData];
    }
    // console.log({ requiredResult });
    return requiredResult;
  } catch (error) {
    console.error('Error fetching data:', error);
  }
};

const fetchAllDataSTAC = async (STACApiUrl, numberMatched) => {
  // NOTE: STAC API doesnot accept offset as a query params. So, need to pull all the items using limit.
  try {
    const url = addOffsetsToURL(STACApiUrl, 0, numberMatched)
    const jsonResult = await fetchData(url)
    if (!jsonResult) return [];
    return getResultArray(jsonResult);
  } catch (error) {
    console.error('Error fetching data:', error);
    return []
  }
};

// helpers
const addOffsetsToURL = (url, offset, limit) => {
  if (url.includes('?')) {
    return `${url}&limit=${limit}&offset=${offset}`;
  } else {
    return `${url}?limit=${limit}&offset=${offset}`;
  }
};

export const getResultArray = (result) => {
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




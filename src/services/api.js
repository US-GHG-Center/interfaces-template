export const fetchAllFromSTACAPI = async (STACApiUrl) => {
  // it will fetch all collection items from all stac api.
  // do not provide offset and limits in the url
  try {
    let requiredResult = [];
    // fetch in the collection from the stac api
    const response = await fetch(STACApiUrl);
    if (!response.ok) {
      throw new Error('Error in Network');
    }
    const jsonResult = await response.json();
    requiredResult.push(...getResultArray(jsonResult));

    // need to pull in remaining data based on the pagination information
    // TODO: use pagination or next to pull all the data.
    let { numberMatched: matched, numberReturned: returned } = jsonResult;
    if (matched > returned) {
      if (matched > 10000) matched = 10000;
      let allData = await fetchAllDataSTAC(STACApiUrl, matched);
      requiredResult = [...allData];
    }
    return requiredResult;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

const fetchAllDataSTAC = async (STACApiUrl, numberMatched) => {
  // NOTE: STAC API doesnot accept offset as a query params. So, need to pull all the items using limit.
  try {
    const fullDataPromise = fetch(
      addOffsetsToURL(STACApiUrl, 0, numberMatched)
    );
    let result = await fullDataPromise;
    let jsonResult = await result.json();
    let allResult = [...getResultArray(jsonResult)];
    return allResult;
  } catch (error) {
    console.error('Error fetching data:', error);
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

// Data structure: Keep features array and add date-based index

// Binary search to find index of first element >= minDate
function findLowerBound(arr, minDate) {
  const minDateObj = new Date(minDate);
  let low = 0;
  let high = arr.length - 1;
  let result = arr.length; // Default if no matching elements

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midDate = new Date(
      arr[mid].properties.start_time || arr[mid].properties.start_time || 0
    );

    if (midDate >= minDateObj) {
      result = mid;
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }

  return result;
}

// Binary search to find index of last element <= maxDate
function findUpperBound(arr, maxDate) {
  const maxDateObj = new Date(maxDate);
  let low = 0;
  let high = arr.length - 1;
  let result = -1; // Default if no matching elements

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    const midDate = new Date(
      arr[mid].properties.start_time || arr[mid].properties.start_time || 0
    );

    if (midDate <= maxDateObj) {
      result = mid;
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }

  return result;
}

// Filter function using binary search for efficient range queries
export function filterByDateRange(indexedData, dateRange) {
  const { features } = indexedData;
  const minDate = new Date(dateRange[0]);
  const maxDate = new Date(dateRange[1]);
  // Find boundaries using binary search
  const lowerBoundIndex = findLowerBound(features, minDate);
  const upperBoundIndex = findUpperBound(features, maxDate);

  // Extract the range
  const filteredFeatures =
    lowerBoundIndex <= upperBoundIndex
      ? features.slice(lowerBoundIndex, upperBoundIndex + 1)
      : [];

  return {
    type: 'FeatureCollection',
    features: filteredFeatures,
  };
}

// Usage example

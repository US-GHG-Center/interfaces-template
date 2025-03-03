import * as turf from '@turf/turf';

export function isFeatureWithinBounds(feature, bounds) { 

  // Create a bounding box feature from the map bounds
  const boundingBox = turf.bboxPolygon([
    bounds._sw.lng,
    bounds._sw.lat,
    bounds._ne.lng,
    bounds._ne.lat
  ]);

  // Check if the feature intersects with the bounding box
  return turf.booleanIntersects(feature, boundingBox);
}
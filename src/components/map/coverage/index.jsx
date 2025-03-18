import { useEffect } from 'react';
import { useMapbox } from '../../../context/mapContext';
import { addCoveragePolygon, layerExists, sourceExists } from '../utils';

export const CoverageLayers = ({ coverage }) => {
  const { map } = useMapbox();
  const layerId = 'coverage';
  useEffect(() => {
    if (!map || !coverage?.features?.length) return;

    addCoveragePolygon(map, layerId, layerId, coverage);
    return () => {
      if (map) {
        if (sourceExists(map, layerId)) map.removeSource(layerId);
        if (layerExists(map, layerId)) map.removeLayer(layerId);
      }
    };
  }, [map, coverage]);
  return null;
};

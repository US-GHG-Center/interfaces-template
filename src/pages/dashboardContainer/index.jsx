import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Dashboard } from '../dashboard';
import { fetchAllFromSTACAPI } from '../../services/api';
import {
  dataTransformationPlume,
  dataTransformationPlumeRegion,
  dataTransformationPlumeMeta,
  dataTransformationPlumeRegionMeta,
  metaDatetimeFix,
} from './helper/dataTransform';
import { PlumeMetas } from '../../assets/dataset/metadata.ts';

export function DashboardContainer() {
  // get the query params
  const [searchParams] = useSearchParams();
  const [zoomLocation, setZoomLocation] = useState(
    searchParams.get('zoom-location') || []
  ); // let default zoom location be controlled by map component
  const [zoomLevel, setZoomLevel] = useState(
    searchParams.get('zoom-level') || null
  ); // let default zoom level be controlled by map component
  const [collectionId] = useState(
    searchParams.get('collection-id') || 'goes-ch4plume-v1'
  );

  const dataTree = useRef(null);
  const [metaDataTree, setMetaDataTree] = useState({});
  const [vizItemMetaData, setVizItemMetaData] = useState({});

  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    setLoadingData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
      try {
        // get all the collection items
        const collectionItemUrl = `${process.env.REACT_APP_STAC_API_URL}/collections/${collectionId}/items`;
        const data = await fetchAllFromSTACAPI(collectionItemUrl);

        const vizItemsDict = {}; // visualization_items[string] = visualization_item
        const testSample = data.slice(0, 10);
        testSample.forEach((items) => {
          vizItemsDict[items.id] = items;
        });
        dataTree.current = vizItemsDict;

        // remove loading
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData().catch(console.error);
  }, []); // only on initial mount

  return (
    <Dashboard
      dataTree={dataTree}
      zoomLocation={zoomLocation}
      zoomLevel={zoomLevel}
      setZoomLocation={setZoomLocation}
      setZoomLevel={setZoomLevel}
      loadingData={loadingData}
    />
  );
}

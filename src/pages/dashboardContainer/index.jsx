import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Dashboard } from '../dashboard/index.jsx';

import { testData, testMetadata } from '../../assets/dataset/testData.js';

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

  const [collectionItems, setCollectionItems] = useState([]);
  const [collectionMeta, setCollectionMeta] = useState({});
  const dataTree = useRef(null);
  const [metaDataTree, setMetaDataTree] = useState({});
  const [vizItemMetaData, setVizItemMetaData] = useState({});

  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    setLoadingData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps

    const fetchData = async () => {
      try {
        // fetch in the collection from the features api
        //here both are test data
        setCollectionMeta(testMetadata);
        setCollectionItems(testData);

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
      data={collectionItems}
      zoomLocation={zoomLocation}
      zoomLevel={zoomLevel}
      setZoomLocation={setZoomLocation}
      setZoomLevel={setZoomLevel}
      collectionMeta={collectionMeta}
      dataTree={dataTree}
      metaDataTree={metaDataTree}
      vizItemMetaData={vizItemMetaData}
      collectionId={collectionId}
      loadingData={loadingData}
    />
  );
}
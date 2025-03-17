import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';
import { EmitDashboard } from '../dashboard/index.jsx';
import { Plumes } from '../../assets/dataset/testData.js';
import {
  fetchCollectionMetadata,
  fetchAllFromSTACAPI,
  fetchData,
  getCoverageData,
} from '../../services/api.js';
import { transformMetadata } from './helper/dataTransform.ts';
// import { coverages} from '../../dataset/coverages.js'

export function DashboardContainer() {
  // get the query params
  const [searchParams] = useSearchParams();
  const [coverage, setCoverage] = useState();
  const [zoomLocation, setZoomLocation] = useState(
    searchParams.get('zoom-location') || []
  ); // let default zoom location be controlled by map component
  const [zoomLevel, setZoomLevel] = useState(
    searchParams.get('zoom-level') || null
  ); // let default zoom level be controlled by map component
  const [collectionId] = useState(
    searchParams.get('collection-id') || 'emit-ch4plume-v1'
  );

  const [collectionMeta, setCollectionMeta] = useState({});
  const [plumes, setPlumes] = useState([]);
  const [loadingData, setLoadingData] = useState(true);

  useEffect(() => {
    setLoadingData(true);
    const init = async () => {
      try {
        // // fetch in the collection from the features api
        const collectionUrl = `${process.env.REACT_APP_BASE_STAC_API_URL}/collections/${collectionId}`;
        // // use this url to find out the data frequency of the collection
        const collectionMetadata = await fetchCollectionMetadata(collectionUrl);
        setCollectionMeta(collectionMetadata);
        // console.log({ coverage });

        // const metaDataEndpoint = `${process.env.REACT_APP_METADATA_ENDPOINT}`;
        // const stacAPIEndpoint = `${process.env.REACT_APP_STAC_API_URL}`;
        // get all the metadata items
        // const metadata = await fetchData(metaDataEndpoint);
        // get all the stac Items
        // const stacData = await fetchAllFromSTACAPI(stacAPIEndpoint);

        // console.log({ metadata, stacData });
        // transform the data
        // const { data } = await transformMetadata(metadata, stacData);
        // console.log({ data });
        // setPlumes(data);
        setPlumes(Plumes);
        // remove loading
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    init().catch(console.error);
  }, []); // only on initial mount

  // Fetch coverage separately in the background
  useEffect(() => {
    let isMounted = true;
    const fetchCoverage = async () => {
      try {
        const coverageUrl = process.env.REACT_APP_COVERAGE_URL;
        const coverageData = await getCoverageData(coverageUrl);
        if (isMounted) {
          setCoverage(coverageData);
        }
      } catch (error) {
        console.error('Error fetching coverage data:', error);
      }
    };

    fetchCoverage();
    return () => {
      isMounted = false; // Cleanup in case the component unmounts before fetch completes
    };
  }, []);

  return (
    <EmitDashboard
      plumes={plumes}
      coverage={coverage}
      zoomLocation={zoomLocation}
      zoomLevel={zoomLevel}
      setZoomLocation={setZoomLocation}
      setZoomLevel={setZoomLevel}
      collectionMeta={collectionMeta}
      collectionId={collectionId}
      loadingData={loadingData}
    />
  );
}

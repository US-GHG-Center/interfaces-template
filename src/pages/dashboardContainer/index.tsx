import React, { useEffect, useState, useRef } from 'react';
import { useSearchParams } from 'react-router-dom';

import { Dashboard } from '../dashboard';
import { fetchAllFromSTACAPI } from '../../services/api';
import { dataTransformation } from './helper/dataTransform';

import { STACItem, SAMMissingMetaData } from '../../dataModel';

import missingProperties from '../../assets/dataset/metadata.json';
import { Oco3DataFactory } from '../../oco3DataFactory';

export function DashboardContainer(): React.JSX.Element {
  // get the query params
  const [searchParams] = useSearchParams();

  const zoomLon: string = searchParams.get('Zoomlon') || '';
  const zoomLat: string = searchParams.get('Zoomlat') || '';
  const [zoomLocation, setZoomLocation] = useState<number[]>(
    zoomLat && zoomLon ? [Number(zoomLon), Number(zoomLat)] : []
  ); // let default zoom location be controlled by map component
  const [zoomLevel, setZoomLevel] = useState<number | null>(
    searchParams.get('zoom-level')
      ? Number(searchParams.get('zoom-level'))
      : null
  ); // let default zoom level be controlled by map component
  const [collectionId] = useState<string>(
    searchParams.get('collection-id') || 'oco3-co2-sams-daygrid-v11r'
  );
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const oco3DataFactory = useRef<Oco3DataFactory | null>(null);

  useEffect(() => {
    setLoadingData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
      try {
        // get all the collection items
        // const collectionItemUrl: string = `${process.env.REACT_APP_STAC_API_URL}/collections/${collectionId}/items`;
        const collectionItemUrl: string = `${process.env.PUBLIC_URL}/${collectionId}.json`; // This file is created and updated by a workflow task
        const data: STACItem[] = await fetchAllFromSTACAPI(collectionItemUrl);
        const filteredData: STACItem[] = data.filter(
          (item: STACItem) => !item.id.includes('unfiltered')
        );
        const missingData: SAMMissingMetaData[] = missingProperties.data;
        oco3DataFactory.current = dataTransformation(filteredData, missingData);
        // NOTE: incase we need metadata and other added information,
        // add that to the STAC Item Property

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
      dataFactory={oco3DataFactory}
      zoomLocation={zoomLocation}
      zoomLevel={zoomLevel}
      setZoomLocation={setZoomLocation}
      setZoomLevel={setZoomLevel}
      loadingData={loadingData}
    />
  );
}

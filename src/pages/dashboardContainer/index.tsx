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

import { STACItem } from '../../dataModel';

import { PlumeMetas } from '../../assets/dataset/metadata';

interface DataTree {
  [key: string]: STACItem;
}

export function DashboardContainer(): React.JSX.Element {
  // get the query params
  const [searchParams] = useSearchParams();

  const zoomLon:string = searchParams.get('Zoomlon') || ''; 
  const zoomLat:string = searchParams.get('Zoomlat') || ''; 
  const [zoomLocation, setZoomLocation] = useState<number[]>((zoomLat && zoomLon) ? [Number(zoomLon), Number(zoomLat)] : []); // let default zoom location be controlled by map component
  const [zoomLevel, setZoomLevel] = useState<number | null>(
    searchParams.get('zoom-level')? Number(searchParams.get('zoom-level')) : null
  ); // let default zoom level be controlled by map component
  const [collectionId] = useState<string>(
    searchParams.get('collection-id') || 'goes-ch4plume-v1'
  );
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const dataTree = useRef<DataTree | null>(null);

  useEffect(() => {
    setLoadingData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
      try {
        // get all the collection items
        const collectionItemUrl:string = `${process.env.REACT_APP_STAC_API_URL}/collections/${collectionId}/items`;
        const data: STACItem[] = await fetchAllFromSTACAPI(collectionItemUrl);

        const vizItemsDict: DataTree = {}; // visualization_items[string] = visualization_item
        const testSample: STACItem[] = data.slice(0, 10);
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

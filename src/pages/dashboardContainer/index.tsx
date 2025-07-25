import React, { useEffect, useState, useRef } from 'react';

import { useConfig } from '../../context/configContext';

import { Dashboard } from '../dashboard';
import { fetchAllFromSTACAPI } from '../../services/api';

import { STACItem } from '../../dataModel';

interface DataTree {
  [key: string]: STACItem;
}

interface DashboardContainerInterface {
  zoomLon: string;
  zoomLat: string;
  zoomLevel: number;
  collectionId: string;
}

export function DashboardContainer({
  zoomLon,
  zoomLat,
  zoomLevel,
  collectionId,
}: DashboardContainerInterface): React.JSX.Element {
  const { config } = useConfig();
  const [zoomLevelLocal, setZoomLevelLocal] = useState<number | null>(
    zoomLevel < 0 ? null : zoomLevel
  ); // let default zoom level be controlled by map component

  const [zoomLocation, setZoomLocation] = useState<number[]>(
    zoomLat && zoomLon ? [Number(zoomLon), Number(zoomLat)] : []
  ); // let default zoom location be controlled by map component
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const dataTree = useRef<DataTree | null>(null);

  useEffect(() => {
    if (!config || !Object.keys(config).length) return;
    setLoadingData(true);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const fetchData = async () => {
      try {
        // get all the collection items
        const collectionItemUrl: string = `${config.REACT_APP_STAC_API_URL}/collections/${collectionId}/items`;
        const data: STACItem[] = await fetchAllFromSTACAPI(collectionItemUrl);

        const vizItemsDict: DataTree = {}; // visualization_items[string] = visualization_item
        const testSample: STACItem[] = data.slice(0, 10);
        testSample.forEach((items) => {
          vizItemsDict[items.id] = items;
        });
        dataTree.current = vizItemsDict;

        // NOTE: incase we need metadata and other added information,
        // add that to the STAC Item Property

        // remove loading
        setLoadingData(false);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData().catch(console.error);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config]); // only on initial mount

  return (
    <Dashboard
      dataTree={dataTree}
      zoomLocation={zoomLocation}
      zoomLevel={zoomLevelLocal}
      setZoomLocation={setZoomLocation}
      setZoomLevel={setZoomLevelLocal}
      loadingData={loadingData}
    />
  );
}

import React from 'react';
import { useSearchParams } from 'react-router-dom';

import { InterfaceTemplateComponent } from '../../lib/interfaceTemplateComponent';

export function InterfaceTemplate(): React.JSX.Element {
  // get the query params
  const [searchParams] = useSearchParams();

  const zoomLon: string = searchParams.get('Zoomlon') || '';
  const zoomLat: string = searchParams.get('Zoomlat') || '';
  const zoomLevel: number = searchParams.get('zoom-level')
    ? Number(searchParams.get('zoom-level'))
    : -1;
  const collectionId: string =
    searchParams.get('collection-id') || 'goes-ch4plume-v1';
  return (
    <InterfaceTemplateComponent
      zoomLat={zoomLat}
      zoomLon={zoomLon}
      zoomLevel={zoomLevel}
      collectionId={collectionId}
    />
  );
}

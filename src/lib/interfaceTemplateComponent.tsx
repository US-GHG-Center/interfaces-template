import { ConfigProvider } from '../context/configContext';
import { ComponentConfig } from '../context/configContext/types';
import { DashboardContainer } from '../pages/dashboardContainer';

// This will be a wrapper of dashboard container.

export interface InterfaceTemplateComponentProps {
  config?: ComponentConfig; // if not provided, it takes from the .env
  zoomLon: string;
  zoomLat: string;
  zoomLevel: number;
  collectionId: string;
}

// Note: change the name to your desired exported module name
export function InterfaceTemplateComponent({
  config,
  zoomLon,
  zoomLat,
  zoomLevel,
  collectionId,
}: InterfaceTemplateComponentProps) {
  return (
    <ConfigProvider>
      <DashboardContainer
        zoomLon={zoomLon}
        zoomLat={zoomLat}
        zoomLevel={zoomLevel}
        collectionId={collectionId}
      ></DashboardContainer>
    </ConfigProvider>
  );
}

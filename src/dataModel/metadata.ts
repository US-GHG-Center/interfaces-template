import { PointGeometry, Style } from './plumes';
import { Geometry } from './plumes';
export interface Metadata {
  crs: CRS;
  features: Features[];
  name: string;
  type: string;
}

export interface Features {
  geometry: PointGeometry | Geometry;
  properties: Properties;
  type: string;
}

interface Properties {
  'Concentration Uncertainty (ppm m)': number;
  'DAAC Scene Numbers': string[];
  DCID: string;
  'Data Download': string;
  'Latitude of max concentration': number;
  'Longitude of max concentration': number;
  'Max Plume Concentration (ppm m)': number;
  Orbit: string;
  'Plume ID': string;
  'Scene FIDs': string[];
  'UTC Time Observed': string;
  map_endtime: string;
  style: Style;
  plume_complex_count: number;
}
export interface CRS {
  properties: {
    name: string;
  };
  type: string;
}

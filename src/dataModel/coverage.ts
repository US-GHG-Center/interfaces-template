export interface Geometry {
  type: string;
  coordinates: number[][][];
}

export interface CoverageFeatureProperties {
  start_time: string;
  end_time: string;
}

export interface CoverageFeature {
  type: 'Feature';
  properties: CoverageFeatureProperties;
  geometry: Geometry;
}

export interface CoverageGeoJsonData {
  type: string;
  features: CoverageFeature[];
}

export interface CoverageData {
  type: string;
  name: string;
  crs: {
    properties: {
      name: string;
    };
    type: string;
  };
  features: CoverageFeature[];
}

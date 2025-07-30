// Stac Item defination
export interface STACItem {
  id: string;
  bbox: number[];
  type: string;
  links: Link[];
  assets: {
    [key: string]: Asset;
  };
  geometry: Geometry;
  collection: string;
  properties: Properties;
  stac_version: string;
  stac_extensions: string[];
}

interface Properties {
  [key: string]: any;
}

export interface LocationMeta {
  type: string;
  coordinates: number[];
}

export interface Link {
  rel: string;
  type: string;
  href: string;
  title?: string;
}

export interface Asset {
  href: string;
  type: string;
  roles?: string[];
  title: string;
  'proj:bbox'?: number[];
  'proj:epsg'?: number;
  'proj:wkt2'?: string;
  'proj:shape'?: number[];
  description?: string;
  'raster:bands'?: RasterBand[];
  'proj:geometry'?: Geometry;
  'proj:projjson'?: ProjJSON;
  'proj:transform'?: number[];
}

interface RasterBand {
  scale: number;
  nodata: string;
  offset: number;
  sampling: string;
  data_type: string;
  histogram: Histogram;
  statistics: Statistics;
}

interface Histogram {
  max: number;
  min: number;
  count: number;
  buckets: number[];
}

interface Statistics {
  mean: number;
  stddev: number;
  maximum: number;
  minimum: number;
  valid_percent: number;
}

export interface Geometry {
  type: string;
  coordinates: number[][][];
}

interface ProjJSON {
  id: {
    code: number;
    authority: string;
  };
  name: string;
  type: string;
  datum: {
    name: string;
    type: string;
    ellipsoid: {
      name: string;
      semi_major_axis: number;
      inverse_flattening: number;
    };
  };
  $schema: string;
  coordinate_system: {
    axis: Axis[];
    subtype: string;
  };
}

interface Axis {
  name: string;
  unit: string;
  direction: string;
  abbreviation: string;
}

export type DateTime = string;
export type Lon = number;
export type Lat = number;

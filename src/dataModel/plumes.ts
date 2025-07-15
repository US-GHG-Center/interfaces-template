import { STACItem, DateTime, Lon, Lat } from './core';

export type SubDailyPlume = STACItem; // This is the smallest working unit of data. Format: <country>_<state>_<region>_<plume_id>_<datetime>. e.g. "GOES-CH4_Mexico_Durango_BV1_BV1-2_2019-05-21T17:31:00Z"

export interface Plume {
  id: string; // Format: <country>_<state>_<region>_<plume_id>. e.g. Mexico_Durango_BV1_BV1-1
  region: string;
  representationalPlume: SubDailyPlume;
  location: [Lon, Lat]; // [lon, lat]
  startDate: DateTime;
  endDate: DateTime;
  subDailyPlumes: SubDailyPlume[];
}

export interface PlumeRegion {
  id: string; // Format: <region>. e.g. BV1
  location: [Lon, Lat]; // [lon, lat]
  startDate: DateTime;
  endDate: DateTime;
  plumes: Plume[];
}

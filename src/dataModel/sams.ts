import { STACItem, DateTime, Lon, Lat } from './core';

/**
 * **SAMS**: Snapshot Area Maps
	- are data_collections/images over 80x80 km in 2 mins.
	- are collected by PMA (Pointing Mirror Assembly) of OCO3
 */
export interface SAM extends STACItem {}

export interface Target {
  id: string;  //Format: <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>. e.g. "oco3-co2_volcano0010_2025-03-30T232216Z_unfiltered_xco2"
  siteName: string;
  location: [Lon, Lat];
  startDate: DateTime;
  endDate: DateTime;
  sams: SAM[]
}

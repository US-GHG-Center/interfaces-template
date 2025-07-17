import { start } from 'repl';
import { STACItem, DateTime, Lon, Lat, Geometry, LocationMeta } from './core';
import moment from 'moment';

export interface SAMMissingMetaData {
  target_id: string;
  target_name: string;
  target_location: LocationMeta;
  spatial_region: Geometry;
  target_altitude: string;
  target_type: string;
}

export interface SAMProperties extends SAMMissingMetaData {
  start_date: string;
  end_date: string;
}

export interface STACItemSAM extends STACItem {
  properties: SAMProperties;
}

/**
 * **SAMS**: Snapshot Area Maps
	- are data_collections/images over 80x80 km in 2 mins.
	- are collected by PMA (Pointing Mirror Assembly) of OCO3
 */
export interface SAM extends STACItemSAM {} // This is the smallest working unit of data.

export interface Target {
  id: string; //Format: <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>. e.g. "oco3-co2_volcano0010_2025-03-30T232216Z_unfiltered_xco2"
  siteName: string;
  location: [Lon, Lat];
  startDate: DateTime;
  endDate: DateTime;
  sams: SAM[];

  // methods
  getRepresentationalSAM(): SAM;
  addSAM(sam: SAM): void;
}

// Implementation

export class SamsTarget implements Target {
  id: string; //Format: <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>. e.g. "oco3-co2_volcano0010_2025-03-30T232216Z_unfiltered_xco2"
  siteName: string;
  location: [Lon, Lat];
  startDate: DateTime;
  endDate: DateTime;
  sams: SAM[];

  constructor(id: string, siteName: string, location: [Lon, Lat], sam: SAM) {
    this.id = id;
    this.siteName = siteName;
    this.location = location;
    this.startDate = '';
    this.endDate = '';
    this.sams = [];
    this.addSAM(sam);
  }

  getRepresentationalSAM(): SAM {
    return this.sams[0];
  }

  addSAM(sam: SAM): void {
    // update startDate and endDate based on the new sam.
    let { start_date: startDate, end_date: endDate } = sam.properties;
    if (!this.startDate) this.startDate = startDate;
    if (!this.endDate) this.endDate = endDate;

    // let mStartDate = moment(startDate);
    // let mEndDate = moment(endDate);
    // // check if the current sam start/end datetime is different than the one in the
    // if (mStartDate.isBefore(moment(this.startDate))) this.startDate = startDate;
    // if (mEndDate.isAfter(moment(this.endDate))) this.endDate = endDate;
    this.startDate = startDate;
    this.endDate = endDate;
  }

  getSortedSAMs(): SAM[] {
    const sortedSAMS: SAM[] = [...this.sams];
    sortedSAMS.sort(
      (prev: SAM, next: SAM) =>
        moment(prev.properties.start_date).valueOf() -
        moment(next.properties.start_date).valueOf()
    );
    return sortedSAMS;
  }
}

export interface DataTree {
  [key: string]: Target;
}

import { STACItem, DateTime, Lon, Lat, Geometry, LocationMeta } from './core';
import moment from 'moment';

// TODO: change the properties to camelCase for consistency.
// Its left at it is as the incoming data is snakecase.
export interface SAMMissingMetaData {
  target_id: string;
  target_name: string;
  target_location: LocationMeta;
  spatial_region: Geometry;
  target_altitude: string;
  target_type: string;
}

export interface SAMProperties extends SAMMissingMetaData {
  start_datetime: string;
  end_datetime: string;
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
  startDatetime: DateTime;
  endDatetime: DateTime;
  sams: SAM[];

  // methods
  getRepresentationalSAM(): SAM;
  getSortedSAMs(): SAM[];
  addSAM(sam: SAM): void;
}

// Implementation

export class SamsTarget implements Target {
  id: string; //Format: <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>. e.g. "oco3-co2_volcano0010_2025-03-30T232216Z_unfiltered_xco2"
  siteName: string;
  location: [Lon, Lat];
  startDatetime: DateTime;
  endDatetime: DateTime;
  sams: SAM[];

  constructor(id: string, siteName: string, location: [Lon, Lat]) {
    this.id = id;
    this.siteName = siteName;
    this.location = location;
    this.startDatetime = '';
    this.endDatetime = '';
    this.sams = [];
  }

  getRepresentationalSAM(): SAM {
    return this.sams[0];
  }

  addSAM(sam: SAM): void {
    if (!this.sams.length) {
      this.startDatetime = sam.properties.start_datetime;
      this.endDatetime = sam.properties.end_datetime;
    }

    // update startDatetime and endDatetime based on the new sam.
    this.sams.push(sam);

    return;
    let { start_datetime: startDate, end_datetime: endDatetime } = sam.properties;
    if (!this.startDatetime) this.startDatetime = startDate;
    if (!this.endDatetime) this.endDatetime = endDatetime;

    let mStartDate = moment(startDate);
    let mEndDate = moment(endDatetime);
    if (mStartDate.isBefore(moment(this.startDatetime))) this.startDatetime = startDate;
    if (mEndDate.isAfter(moment(this.endDatetime))) this.endDatetime = endDatetime;
    this.startDatetime = startDate;
    this.endDatetime = endDatetime;
  }

  getSortedSAMs(): SAM[] {
    const sortedSAMS: SAM[] = [...this.sams];
    sortedSAMS.sort(
      (prev: SAM, next: SAM) =>
        moment(prev.properties.start_datetime).valueOf() -
        moment(next.properties.start_datetime).valueOf()
    );
    return sortedSAMS;
  }
}

export interface DataTree {
  [key: string]: Target;
}

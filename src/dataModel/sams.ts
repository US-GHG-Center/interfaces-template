import { STACItem, DateTime, Lon, Lat, Geometry, LocationMeta } from './core';
import moment from 'moment';

// TODO: change the properties to camelCase for consistency.
// Its left at it is as the incoming data is snakecase.
export interface SAMMissingMetaData {
  target_id: string;
  target_name: string;
  target_location: LocationMeta;
  spatial_region: Geometry;
  target_altitude: string | null;
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
  getSAMbyId(id: string): SAM | undefined;
}

export interface TargetTypeInterface {
  name: string;
  targets: Target[];
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
    this.sams.push(sam);

    // TODO: check why the datetime is not updating
    // update startDatetime and endDatetime based on the new sam.
    if (!this.sams.length) {
      this.startDatetime = sam.properties.start_datetime;
      this.endDatetime = sam.properties.end_datetime;
      return;
    }

    let { start_datetime: startDateTime, end_datetime: endDatetime } =
      sam.properties;
    let mStartDate = moment(startDateTime);
    let mEndDate = moment(endDatetime);
    if (mStartDate.isBefore(moment(this.startDatetime))) {
      this.startDatetime = startDateTime;
    }
    if (mEndDate.isAfter(moment(this.endDatetime))) {
      this.endDatetime = endDatetime;
    }
  }

  getSortedSAMs(): SAM[] {
    const sortedSAMS: SAM[] = [...this.sams];
    sortedSAMS.sort((prev: SAM, next: SAM) => {
      const prevTime = prev.properties.start_datetime
        ? moment(prev.properties.start_datetime).valueOf()
        : Number.MAX_VALUE;
      const nextTime = next.properties.start_datetime
        ? moment(next.properties.start_datetime).valueOf()
        : Number.MAX_VALUE;

      return prevTime - nextTime;
    });
    return sortedSAMS;
  }

  getSAMbyId(id: string): SAM | undefined {
    for (let i = 0; i <= this.sams.length; i++) {
      if (this.sams[i].id === id) {
        return this.sams[i];
      }
    }
    return undefined;
  }
}

// TODO: when we put this in here, it does not work!
// Error message: Error fetching data: TypeError: _dataModel__WEBPACK_IMPORTED_MODULE_0__.TargetType is not a constructor
// Currently is put directly in index.ts. Fix it!!
// export class TargetType implements TargetTypeInterface {
//   name: string;
//   targets: Target[];

//   constructor(name: string) {
//     this.name = name;
//     this.targets = [];
//   }

//   addTarget(target: Target) {
//     this.targets.push(target);
//   }
// }

// export interface SamsTargetDict {
//   [key: string]: TargetType;
// }

export interface DataTree {
  [key: string]: Target;
}

import {
  STACItem,
  DateTime,
  Lon,
  Lat,
  Geometry,
  LocationMeta,
  Link,
  Asset,
} from './core';
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
  This is the smallest working unit of data.
 */
export interface SAM extends STACItemSAM {
  // id: is in Format: <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>. e.g. "oco3-co2_volcano0010_2025-03-30T232216Z_unfiltered_xco2"
  // however, the <target_id> can sometimes have _ separator. Hence, index 1 doesnot always represent the full target_id
  // solution: lets work with the semi_target_id always, i.e. target_id will be always target_id_old.split('_')[0]
  getTargetId: () => string;
}

//implementation

export class SAMImpl implements SAM {
  properties: SAMProperties;
  id: string;
  bbox: number[];
  type: string;
  links: Link[];
  assets: { [key: string]: Asset };
  geometry: Geometry;
  collection: string;
  stac_version: string;
  stac_extensions: string[];

  constructor(stacItem: STACItemSAM) {
    this.properties = stacItem.properties;
    this.id = stacItem.id;
    this.bbox = stacItem.bbox;
    this.type = stacItem.type;
    this.links = stacItem.links;
    this.assets = stacItem.assets;
    this.geometry = stacItem.geometry;
    this.collection = stacItem.collection;
    this.stac_version = stacItem.stac_version;
    this.stac_extensions = stacItem.stac_extensions;
  }

  getTargetId = (): string => {
    /**
     * Note: there's a problem with target_id provided.
     * the vizItem.id has target_id embedded into it.
     * it should map directly to the vizItem.properties.targetId
     * However, when parsing the vizItem.id to get target_id,
     * due to naming inconsistencies, we face a problem.
     * check. SAM defination.
     * id: is in Format: <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>. e.g. "oco3-co2_volcano0010_2025-03-30T232216Z_unfiltered_xco2"
     */
    if (!this.id) return '';
    return this.id.split('_')[1];
  };
}

export interface Target {
  id: string;
  siteName: string;
  location: [Lon, Lat];
  startDatetime: DateTime;
  endDatetime: DateTime;
  sams: SAM[];

  // methods
  getTargetId(): string; // To have uniformity in target_id: ref. SAM.getTargetId
  getRepresentationalSAM(): SAM;
  addSAM(sam: SAM): void;
  getAllSAM(): SAM[];
  getSAMbyId(id: string): SAM | undefined;
  sortSAM(): void;
}

// Implementation

export class SamsTarget implements Target {
  id: string;
  siteName: string;
  location: [Lon, Lat];
  startDatetime: DateTime;
  endDatetime: DateTime;
  sams: SAM[]; // it is considered to be always sorted, before use.
  private isSamSorted: boolean = false;

  constructor(id: string, siteName: string, location: [Lon, Lat]) {
    this.id = id;
    this.siteName = siteName;
    this.location = location;
    this.startDatetime = '';
    this.endDatetime = '';
    this.sams = [];
  }

  getTargetId(): string {
    /**
     * Note: there's a problem with target_id provided.
     * the vizItem.id has target_id embedded into it.
     * it should map directly to the vizItem.properties.targetId
     * However, when parsing the vizItem.id to get target_id,
     * due to naming inconsistencies, we face a problem.
     * check. SAM defination.
     */
    if (!this.id) return '';
    return this.id.split('_')[0];
  }

  getRepresentationalSAM(): SAM {
    if (!this.isSamSorted) {
      this.inplaceSort(this.sams);
    }
    return this.sams[0];
  }

  addSAM(sam: SAM): void {
    if (!this.sams.length) {
      this.startDatetime = sam.properties.start_datetime;
      this.endDatetime = sam.properties.end_datetime;
      this.sams.push(sam);
      return;
    }

    this.sams.push(sam);

    // update startDatetime and endDatetime START.
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
    // update startDatetime and endDatetime END
  }

  sortSAM(): void {
    // inplace sort: use it after all the sams are added to the target for best result
    this.inplaceSort(this.sams);
    this.isSamSorted = true;
  }

  private inplaceSort(items: SAM[]): SAM[] {
    return items.sort((prev: SAM, next: SAM) => {
      const prevTime = prev.properties.start_datetime
        ? moment(prev.properties.start_datetime).valueOf()
        : Number.MAX_VALUE;
      const nextTime = next.properties.start_datetime
        ? moment(next.properties.start_datetime).valueOf()
        : Number.MAX_VALUE;

      return prevTime - nextTime;
    });
  }

  getAllSAM(): SAM[] {
    if (this.isSamSorted) return this.sams;
    const sortedSAMS: SAM[] = [...this.sams];
    return this.inplaceSort(sortedSAMS);
  }

  getSAMbyId(id: string): SAM | undefined {
    for (let i = 0; i < this.sams.length; i++) {
      if (this.sams[i].id === id) {
        return this.sams[i];
      }
    }
    return undefined;
  }
}

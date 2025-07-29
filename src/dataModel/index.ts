import { STACItem, DateTime, Lon, Lat, LocationMeta, Geometry } from './core';
import { PlumeMeta, PlumeRegionMeta } from './plumeMeta';

import { PlumeRegion, Plume, SubDailyPlume } from './plumes';

import {
  SAM,
  Target,
  STACItemSAM,
  DataTree,
  SAMMissingMetaData,
  SAMProperties,
  // SamsTargetDict,
  TargetTypeInterface,
} from './sams';

// logically Plume and Target are analogous.

export type {
  PlumeRegion,
  Plume,
  SubDailyPlume,
  DateTime,
  Lon,
  Lat,
  LocationMeta,
  Geometry,
  STACItem,
  PlumeMeta,
  PlumeRegionMeta,
  SAM,
  Target,
  DataTree,
  SAMMissingMetaData,
  SAMProperties,
  STACItemSAM,
  // SamsTargetDict,
};

export { SamsTarget } from './sams';
// export { TargetType } from './sams';

export class TargetType implements TargetTypeInterface {
  name: string;
  targets: Target[];

  constructor(name: string) {
    this.name = name;
    this.targets = [];
  }

  addTarget(target: Target) {
    this.targets.push(target);
  }
}

export interface SamsTargetDict {
  [key: string]: TargetType;
}

export interface VizItem extends STACItem {}

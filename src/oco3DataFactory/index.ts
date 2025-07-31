import { DataFactory } from '../core/dataFactory';
import { VizItem, SAM, Target, Lon, Lat } from '../dataModel';

import { SAMImpl, SamsTarget } from '../dataModel/sams';

import { getTargetIdFromStacIdSAM } from '../pages/dashboardContainer/helper';

export class Oco3DataFactory extends DataFactory {
  private static instance: Oco3DataFactory;
  private constructor() {
    super();
    this.targetDict = {};
    this.targetTypeDict = {};
  }

  private targetDict: { [targetId: string]: Target };
  private targetTypeDict: { [targetType: string]: Target[] };

  public static getInstance(): Oco3DataFactory {
    if (!Oco3DataFactory.instance) {
      Oco3DataFactory.instance = new Oco3DataFactory();
    }
    return Oco3DataFactory.instance;
  }

  getVizItemForMarker(): VizItem[] {
    return Object.values(this.targetDict).map(
      (target: Target): SAM => target.getRepresentationalSAM()
    );
  }

  getVizItemsOnMarkerClicked(key: string): VizItem[] {
    if (!(key in this.targetDict)) return [];
    const target: Target = this.targetDict[key];
    // just show the first choronological SAM when the target marker is clicked
    // return [target.getRepresentationalSAM()];
    return target.getAllSAM();
  }

  getVizItemsOnLayerClicked(key: string): VizItem[] {
    // we do not need to do anything when the sam is clicked
    return [];
  }

  addVizItem(vizItem: SAM): void {
    let siteName: string = vizItem.properties.target_name;
    let targetType: string = vizItem.properties.target_type;
    let location: [Lon, Lat] = [
      vizItem.properties.target_location.coordinates[0],
      vizItem.properties.target_location.coordinates[1],
    ];
    const vizItemSam: SAMImpl = new SAMImpl(vizItem);
    const vizItemTargetId: string = vizItemSam.getTargetId();
    if (!(targetType in this.targetTypeDict)) {
      this.targetTypeDict[targetType] = [];
    }
    if (!(vizItemTargetId in this.targetDict)) {
      // a new target.
      this.targetDict[vizItemTargetId] = new SamsTarget(
        vizItemTargetId,
        siteName,
        location
      );
      this.targetTypeDict[targetType].push(this.targetDict[vizItemTargetId]);
    }
    this.targetDict[vizItemTargetId]?.addSAM(vizItemSam);
  }

  getTargetTypes(): string[] {
    if (!this.targetTypeDict) return [];
    return Object.keys(this.targetTypeDict);
  }

  getVizItemForMarkerByTargetType(key: string): VizItem[] {
    if (!this.targetTypeDict && !(key in this.targetTypeDict)) return [];
    return this.targetTypeDict[key].map(
      (target: Target): VizItem => target.getRepresentationalSAM()
    );
  }

  getVizItemByVizId(key: string): VizItem | undefined {
    const targetId = this.getTargetIdFromStacIdSAM(key);
    const target: Target = this.targetDict[targetId];
    return target.getSAMbyId(key);
  }

  getTargetIdFromStacIdSAM = (stacItemId: string): string => {
    // check the SAM defination for explanation.
    return getTargetIdFromStacIdSAM(stacItemId);
  };

  sortAllSams(): void {
    Object.values(this.targetDict).forEach((target: Target) => {
      target.sortSAM();
    });
  }
}

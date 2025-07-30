import { DataFactory } from '../core/dataFactory';
import { VizItem, SAM, Target, TargetType, Lon, Lat } from '../dataModel';

import { SAMClass, SamsTarget } from '../dataModel/sams';

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
    return [target.getRepresentationalSAM()];
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

    /**
     * Note: there's a problem with target_id provided.
     * the vizItem.id has target_id embedded into it.
     * it should map directly to the vizItem.properties.targetId
     * However, when parsing the vizItem.id to get target_id,
     * due to naming inconsistencies, we face a problem.
     * check. SAM defination.
     */

    const vizItemSam: SAMClass = new SAMClass(vizItem);
    const vizItemTargetId: string = vizItemSam.getTargetId();
    if (!(vizItemTargetId in this.targetDict)) {
      this.targetDict[vizItemTargetId] = new SamsTarget(
        vizItemTargetId,
        siteName,
        location
      );
    }
    this.targetDict[vizItemTargetId]?.addSAM(vizItemSam);

    if (!(targetType in this.targetTypeDict)) {
      this.targetTypeDict[targetType] = [];
    }
    this.targetTypeDict[targetType].push(this.targetDict[vizItemTargetId]);
  }
}

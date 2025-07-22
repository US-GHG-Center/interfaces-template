import {
  STACItem,
  STACItemSAM,
  SamsTarget,
  DataTree,
  SAMMissingMetaData,
  SAMProperties,
  Lon,
  Lat,
  SamsTargetDict,
  TargetType,
} from '../../../dataModel';

import { getTargetIdFromStacIdSAM } from '.';

export interface DataTransformationResult {
  DATA_TREE: DataTree;
  samsTargetDict: SamsTargetDict;
}

export function dataTransformation(
  stacItems: STACItem[],
  missingSamsProperties: SAMMissingMetaData[]
): DataTransformationResult {
  interface SAMMissingMetaDataDict {
    [key: string]: SAMMissingMetaData;
  }
  const samMissingMetaDataDict: SAMMissingMetaDataDict = {};

  missingSamsProperties.forEach((missingSamsProp: SAMMissingMetaData) => {
    samMissingMetaDataDict[missingSamsProp.target_id] = missingSamsProp;
  });

  const fullStacItems: STACItemSAM[] = [];
  stacItems.forEach((item: STACItem) => {
    //for SAMOCO3, stac_item_id format is: <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>
    const stacItemId = item.id;
    const targetId = getTargetIdFromStacIdSAM(stacItemId);

    if (!(targetId in samMissingMetaDataDict)) {
      // if missing properties are not available for target_id, we ignore whole SamSTACItem.
      return;
    }

    let addedProperties: SAMProperties = {
      ...samMissingMetaDataDict[targetId],
      start_datetime: item.properties.start_datetime,
      end_datetime: item.properties.end_datetime,
    };
    fullStacItems.push({
      ...item,
      properties: addedProperties,
    });
  });

  const DATA_TREE: DataTree = {};
  const samsTargetDict: SamsTargetDict = {};

  fullStacItems.forEach((stacItem: STACItemSAM): void => {
    let targetId: string = stacItem.properties.target_id;
    let siteName: string = stacItem.properties.target_name;
    let targetType: string = stacItem.properties.target_type;
    let location: [Lon, Lat] = [
      stacItem.properties.target_location.coordinates[0],
      stacItem.properties.target_location.coordinates[1],
    ];
    if (!(targetId in DATA_TREE)) {
      let st = new SamsTarget(targetId, siteName, location);
      DATA_TREE[targetId] = st;
      // create the SamsTargetDict and link the reference of target.
      if (!(targetType in samsTargetDict)) {
        let tt = new TargetType(targetType);
        samsTargetDict[targetType] = tt;
      }
      samsTargetDict[targetType].addTarget(st);
    }
    DATA_TREE[targetId].addSAM(stacItem);
  });

  return { DATA_TREE, samsTargetDict };
}

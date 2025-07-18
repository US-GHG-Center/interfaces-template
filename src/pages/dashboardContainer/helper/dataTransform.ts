import {
  STACItem,
  STACItemSAM,
  SamsTarget,
  DataTree,
  SAMMissingMetaData,
  SAMProperties,
  Lon,
  Lat,
} from '../../../dataModel';

export function dataTransformation(
  stacItems: STACItem[],
  missingSamsProperties: SAMMissingMetaData[]
): DataTree {
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
    const targetId = stacItemId.split('_')[1];

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
      properties: addedProperties
    });
  });

  const DATA_TREE: DataTree = {};

  fullStacItems.forEach((stacItem: STACItemSAM): void => {
    let targetId: string = stacItem.properties.target_id;
    let siteName: string = stacItem.properties.target_name;
    let location: [Lon, Lat] = [
      stacItem.properties.target_location.coordinates[0],
      stacItem.properties.target_location.coordinates[1],
    ];
    if (!(targetId in DATA_TREE)) {
      DATA_TREE[targetId] = new SamsTarget(targetId, siteName, location);
    }
    DATA_TREE[targetId].addSAM(stacItem);
  });

  return DATA_TREE;
}

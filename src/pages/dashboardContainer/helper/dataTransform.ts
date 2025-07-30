import {
  STACItem,
  STACItemSAM,
  SAMMissingMetaData,
  SAMProperties,
} from '../../../dataModel';

import { getTargetIdFromStacIdSAM } from '.';
import { Oco3DataFactory } from '../../../oco3DataFactory';
import { SAMImpl } from '../../../dataModel/sams';

export function dataTransformation(
  stacItems: STACItem[],
  missingSamsProperties: SAMMissingMetaData[]
): Oco3DataFactory {
  interface SAMMissingMetaDataDict {
    [key: string]: SAMMissingMetaData;
  }
  const samMissingMetaDataDict: SAMMissingMetaDataDict = {};

  missingSamsProperties.forEach((missingSamsProp: SAMMissingMetaData) => {
    let target_id: string = missingSamsProp.target_id.split('_')[0];
    samMissingMetaDataDict[target_id] = missingSamsProp;
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

  let oco3DataFactory: Oco3DataFactory = Oco3DataFactory.getInstance();

  fullStacItems.forEach((stacItem: STACItemSAM): void => {
    let stacItemSam = new SAMImpl(stacItem);
    oco3DataFactory.addVizItem(stacItemSam);
  });

  // For now, sort at the end.
  // TODO: In Target implementation, use an Treap instead of array to collect Sam.
  oco3DataFactory.sortAllSams();

  return oco3DataFactory;
}

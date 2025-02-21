import { PlumeMetas } from '../../../assets/dataset/metadata';
export const getRegions = (vizItems) => {
  const regions = {};

  // sort by data by time
  const sortedData = vizItems.sort((prev, next) => {
    const prev_date = new Date(prev.properties.datetime).getTime();
    const next_date = new Date(next.properties.datetime).getTime();
    return prev_date - next_date;
  });
  // create a plumemap
  sortedData.forEach((item) => {
    const itemId = item.id;
    const destructuredId = itemId.split('_');
    // goes-ch4_<country>_<administrativeDivision>_<plumeSourceId>_<plumeId>_<datetime>
    const [_, country, administrativeDivision, region, plumeId] =
      destructuredId;
    const newPlumeId = `${country}_${administrativeDivision}_${region}_${plumeId}`;
    if (!(newPlumeId in regions)) {
      const plumeMeta = PlumeMetas.find((item) => item?.id === newPlumeId);
      let { lon, lat } = plumeMeta?.id && plumeMeta;
      const plume = {
        id: newPlumeId,
        region: region,
        representationalPlume: item,
        geometry: {
          coordinates: [[[lon, lat]]],
        },
        startDate: item.properties.datetime,
        endDate: item.properties.datetime,
        subDailyPlumes: [],
      };
      regions[newPlumeId] = plume;
    }
    regions[newPlumeId].subDailyPlumes.push(item);
  });
  return regions;
};

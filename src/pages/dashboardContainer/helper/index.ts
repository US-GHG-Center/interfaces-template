export const getTargetIdFromStacIdSAM = (stacItemId: string): string => {
  /**
   * Extracts the target ID from a STAC item ID, assuming a specific naming convention used by the SAMs dataset.
   * The STAC item ID is expected to follow a pattern where the target ID is embedded within it, separated by an underscore.
   *
   * Note: stacItemId: is in Format: <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>. e.g. "oco3-co2_volcano0010_2025-03-30T232216Z_unfiltered_xco2"
   * however, the <target_id> can sometimes have _ separator. Hence, index 1 doesnot always represent the full target_id
   * solution: the target_id on the metadata is correct. we just need a mechanism to find out the correct target_id from the stac_item_id
   *
   * @param {string} stacItemId - The STAC item ID string.
   * @returns {string} The extracted target ID for SAMs.
   */

  // <data-type>_<target_id>_<datetime>_<filter-status>_<ghg-type>
  let splittedStacItemId: string[] = stacItemId.split('_');
  // remove the first one.
  splittedStacItemId = splittedStacItemId.slice(1, splittedStacItemId.length);
  // remove hte last three.
  splittedStacItemId = splittedStacItemId.slice(
    0,
    splittedStacItemId.length - 3
  );
  let targetId: string = splittedStacItemId.join('_');
  return targetId;
};

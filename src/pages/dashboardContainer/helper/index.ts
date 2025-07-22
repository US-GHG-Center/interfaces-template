export const getTargetIdFromStacIdSAM = (stacItemId: string): string => {
  /**
   * Extracts the target ID from a STAC item ID, assuming a specific naming convention used by the SAMs dataset.
   * The STAC item ID is expected to follow a pattern where the target ID is embedded within it, separated by an underscore.
   *
   * @param {string} stacItemId - The STAC item ID string.
   * @returns {string} The extracted target ID for SAMs.
   */
  let targetId: string = stacItemId.split('_')[1];
  return targetId;
};

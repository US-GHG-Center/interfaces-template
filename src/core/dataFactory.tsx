import { VizItem } from '../dataModel';
/**
 * This is the bare minimum that the dashboard application will need to function.
 * During the concrete implementation of this base class, add in the necessary functions
 * as per the useCase.
 *
 * Note: VizItem is synonym used for STACItem
 */
export abstract class DataFactory {
  /**
   * Adds a visualization item to the data factory internal dataTree implementation.
   * @param vizItem The visualization item to add.
   * The implementation is expected to have O(1) complexity.
   */
  abstract addVizItem(vizItem: VizItem): void;
  /**
   * Gets the VizItems. The VizItems will be used to plot the markers.
   * @returns VizItem[] - araray of vizItems that is needed to plot the markers.
   * The implementation is expected to have O(k) complexity. where 'k' is the number of markers.
   */
  abstract getVizItemForMarker(): VizItem[];
  /**
   * Gets the VizItems. The VizItems will be used for Vizualization when clicked on the marker.
   * @param key Representing the vizItem.id of the clicked marker
   * @returns VizItem[] - array of vizItems that is needed to plot the markers.
   * Note: If there is only one layer needed when marker is clicked, just return [vizItem]
   * The implementation is expected to have O(1) complexity.
   */
  abstract getVizItemsOnMarkerClicked(key: string): VizItem[];
}

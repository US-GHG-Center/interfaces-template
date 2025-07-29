import { DataFactory } from '../core/dataFactory';
import { VizItem } from '../dataModel';

export class ExampleDataFactory extends DataFactory {
  private static instance: ExampleDataFactory;
  private constructor() {
    super();
    this.dataTree = {};
  }
  /**
   * The dataTree refers to the STACItems(/vizItems), structured in certain way
   * inorder to fullfill the application needs (refers. data Interfaces).
   * Example 1: Here, its simple map between STACItem.id and STACItem.
   * Example 2: Complex application needs might ask for somekind of complex dataTree
   * - representing one to many relationships - hence requiring n-tree instead of simple dictionary.
   */
  private dataTree: { [itemId: string]: VizItem };

  public static getInstance(): ExampleDataFactory {
    if (!ExampleDataFactory.instance) {
      ExampleDataFactory.instance = new ExampleDataFactory();
    }
    return ExampleDataFactory.instance;
  }

  getVizItemForMarker(): VizItem[] {
    return Object.values(this.dataTree);
  }

  getVizItemsOnMarkerClicked(key: string): VizItem[] {
    if (key in this.dataTree) {
      return [this.dataTree[key]];
    }
    return [];
  }

  getVizItemsOnLayerClicked(key: string): VizItem[] {
    return Object.values(this.dataTree).slice(0, 5);
  }

  addVizItem(vizItem: VizItem): void {
    let key = vizItem.id;
    this.dataTree[key] = vizItem;
  }
}

import {FlowchartyNode} from "./node";

export class FlowchartyMap {

  constructor(private _map: (FlowchartyNode)[][]) {
  }

  /**
   * get column count
   * @returns {number}
   */
  public getColumnCount(): number {
    return Math.max.apply(this, this._map.map((nodes) => (nodes.length)));
  }

  /**
   * get row count
   * @returns {number}
   */
  public getRowCount(): number {
    return this._map.length;
  }

  /**
   * get all rows
   * @returns {FlowchartyNode[][]}
   */
  public getRows(): (FlowchartyNode)[][] {
    return this._map;
  }

}
import {FlowchartyNode} from "./node";

export class FlowchartyMap {

  constructor(private _map: (FlowchartyNode)[][]) {
  }

  public getColumnCount(): number {
    return Math.max.apply(this._map.map((nodes) => (nodes.length)));
  }

  public getRowCount(): number {
    return this._map.length;
  }

  public getRows(): (FlowchartyNode)[][] {
    return this._map;
  }

}
import {FlowchartyNode} from "./node";

export class FlowchartyMap {
  private map: (FlowchartyNode|null)[][];

  constructor(map: (FlowchartyNode|null)[][]) {
    this.map = map;
  }

  public getColumnCount(): number {
    return Math.max.apply(this.map.map((nodes) => (nodes.length)));
  }

  public getRowCount(): number {
    return this.map.length;
  }

  public getRows(): (FlowchartyNode|null)[][] {
    return this.map;
  }

}
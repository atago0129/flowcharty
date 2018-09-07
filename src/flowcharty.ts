import * as d3 from "d3";
import {FlowchartySettings} from "./settings";
import {FlowchartyCanvas} from "./canvas";
import {FlowchartyElements} from "./elements";

export class Flowcharty {

  private _canvas: FlowchartyCanvas;

  constructor(target: string|d3.Selection<d3.BaseType, any, d3.BaseType, any>) {
    let svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    if (typeof target === "string") {
      svg = d3.select(target);
    } else {
      svg = target;
    }
    this._canvas = new FlowchartyCanvas(svg, new FlowchartySettings());
  }

  public render(data: {
      nodes: {id: string, name: string}[],
      map: string[][],
      links: {source: string, target: string, label?: {name: string, positionType?: string}, linkType?: string}[]
  }): void {
    this._canvas.render(new FlowchartyElements(data));
  }

}
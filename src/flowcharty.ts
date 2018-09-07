import * as d3 from "d3";
import {FlowchartySettings} from "./settings";
import {FlowchartyCanvas} from "./canvas";
import {FlowchartyElements} from "./elements";
import {BaseType} from "d3-selection";

export class Flowcharty {

  private _canvas: FlowchartyCanvas;

  constructor(target: string|d3.Selection<BaseType, any, BaseType, any>) {
    let svg: d3.Selection<BaseType, any, BaseType, any>;
    if (typeof target === "string") {
      svg = d3.select(target);
    } else {
      svg = target;
    }
    this._canvas = new FlowchartyCanvas(svg, new FlowchartySettings());
    this._canvas.init();
  }

  set settings(settings: FlowchartySettings) {
    this._canvas.setSettings(settings);
    this._canvas.init();
  }

  public render(data: {
      nodes: {id: string, name: string}[],
      map: string[][],
      links: {source: string, target: string, label?: {name: string, positionType?: string}, arrowType?: string}[]
  }): void {
    this._canvas.render(new FlowchartyElements(data));
  }

}
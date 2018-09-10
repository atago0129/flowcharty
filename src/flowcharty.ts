import * as d3 from "d3";
import {FlowchartySettings} from "./settings";
import {FlowchartyCanvas} from "./canvas";
import {FlowchartyElements} from "./elements";

export class Flowcharty {

  /**
   * @param {FlowchartySettings} _settings
   */
  constructor(private _settings: FlowchartySettings = new FlowchartySettings()) {
  }

  /**
   * render flowchart to "target" svg element
   * @param {string | d3.Selection} target
   * @param {object} data
   */
  public render(target: string|d3.Selection<d3.BaseType, any, d3.BaseType, any>, data: {
      nodes: {id: string, label: {name: string, dx?: number, dy?: number, textAnchor?: "start"|"middle"|"end"}}[],
      map: string[][],
      links: {source: string, target: string, label?: {name: string, positionType?: string}, linkType?: "direct"|"marge"}[]
  }): void {
    let svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    if (typeof target === "string") {
      svg = d3.select(target);
    } else {
      svg = target;
    }
    const canvas = new FlowchartyCanvas(svg, this._settings);
    canvas.render(new FlowchartyElements(data));
  }

  /**
   * set default stroke color of circle node
   * @param {string} value
   */
  public set circleNodeStroke(value: string) {
    this._settings.nodeStrokeColor = value;
  }

  /**
   * set default stroke width of circle node
   * @param {number} value
   */
  public set circleNodeStrokeWidth(value: number) {
    this._settings.nodeStrokeWidth = value;
  }

  /**
   * set default radius of circle node
   * @param {number} value
   */
  public set circleNodeRadius(value: number) {
    this._settings.circleNodeRadius = value;
  }

  /**
   * set default fill color of circle node
   * @param {string} value
   */
  public set circleNodeFill(value: string) {
    this._settings.nodeFillColor = value;
  }

  /**
   * set default size of arrowhead
   * @param {number} value
   */
  public set arrowheadSize(value: number) {
    this._settings.arrowheadSize = value;
  }

  /**
   * set default stroke color of link
   * @param {string} value
   */
  public set linkStroke(value: string) {
    this._settings.linkStroke = value;
  }

}

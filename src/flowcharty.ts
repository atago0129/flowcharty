import * as d3 from "d3";
import {FlowchartySettings} from "./settings";
import {FlowchartyCanvas} from "./canvas";
import {FlowchartyElements} from "./elements";
import {FlowchartyNodeFactory} from "./node_factory";
import {FlowchartyLinkFactory} from "./link_factory";
import {FlowchartyMap} from "./map";

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
      nodes: {
        id: string,
        style?: {
          shape?: "circle"|"rect",
          width?: number,
          height?: number,
          strokeWidth?: number,
          strokeColor?: string,
          fillColor?: string
        },
        label: {
          name: string,
          dx?: number,
          dy?: number,
          textAnchor?: "start"|"middle"|"end",
          color?: string,
          fontSize?: string,
          fontFamily?: string
        }
      }[],
      map: string[][],
      links: {
        source: string,
        target: string,
        style?: {
          connectionType?: "direct"|"marge",
          curveType?: "default"|"stepBefore"|"stepAfter",
          color?: string,
          strokeWidth?: number,
          headType?: "arrow"|"none",
          arrowheadSize?: number
        },
        label?: {
          name?: string,
          dx?: number,
          dy?: number,
          color?: string,
          fontSize?: string,
          fontFamily?: string
        }
      }[]
  }): void {
    let svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>;
    if (typeof target === "string") {
      svg = d3.select(target);
    } else {
      svg = target;
    }

    const nodeFactory = new FlowchartyNodeFactory(this._settings);
    const linkFactory = new FlowchartyLinkFactory(this._settings);
    const canvas = new FlowchartyCanvas(
      svg,
      new FlowchartyElements(
        data.nodes.map(node => nodeFactory.create(node)),
        data.links.map(link => linkFactory.create(link)),
        new FlowchartyMap(data.map)
      ),
      this._settings);
    canvas.render();
  }

  // /**
  //  * set default stroke color of circle node
  //  * @param {string} value
  //  */
  // public set circleNodeStroke(value: string) {
  //   this._settings.nodeStrokeColor = value;
  // }
  //
  // /**
  //  * set default stroke width of circle node
  //  * @param {number} value
  //  */
  // public set circleNodeStrokeWidth(value: number) {
  //   this._settings.nodeStrokeWidth = value;
  // }
  //
  // /**
  //  * set default radius of circle node
  //  * @param {number} value
  //  */
  // public set circleNodeRadius(value: number) {
  //   this._settings.circleNodeRadius = value;
  // }
  //
  // /**
  //  * set default fill color of circle node
  //  * @param {string} value
  //  */
  // public set circleNodeFill(value: string) {
  //   this._settings.nodeFillColor = value;
  // }
  //
  // /**
  //  * set default size of arrowhead
  //  * @param {number} value
  //  */
  // public set arrowheadSize(value: number) {
  //   this._settings.arrowheadSize = value;
  // }
  //
  // /**
  //  * set default stroke color of link
  //  * @param {string} value
  //  */
  // public set linkStroke(value: string) {
  //   this._settings.linkStroke = value;
  // }

}

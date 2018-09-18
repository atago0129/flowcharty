import * as d3 from "d3";
import {FlowchartySettings} from "./settings";
import {FlowchartyCanvas} from "./canvas";
import {FlowchartyElements} from "./elements";
import {FlowchartyNodeFactory} from "./node_factory";
import {FlowchartyLinkFactory} from "./link_factory";
import {FlowchartyMap} from "./map";

export default class Flowcharty {

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
          textAnchor?: "start"|"middle"|"end",
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
      )
    );
    canvas.render();
  }

  /**
   * set default node shape
   * @param {"circle" | "rect" | "nothing"} value
   */
  set shape(value: "circle"|"rect"|"nothing") {
    this._settings.shape = value;
  }

  /**
   * set default rectangle node width
   * @param {number} value
   */
  set nodeWidth(value: number) {
    this._settings.nodeWidth = value;
  }

  /**
   * set default rectangle node height
   * @param {number} value
   */
  set nodeHeight(value: number) {
    this._settings.nodeHeight = value;
  }

  /**
   * set default horizontal radius of circle(ellipse) node
   * or, set default  horizontal radius of rounded rect node's corner
   * @param {number} value
   */
  set nodeRX(value: number) {
    this._settings.nodeRX = value;
  }

  /**
   * set default vertical radius of circle(ellipse) node
   * or, set default vertical radius of rounded rect node's corner
   * @param {number} value
   */
  set nodeRY(value: number) {
    this._settings.nodeRY = value;
  }

  /**
   * set default stroke color of circle node
   * @param {string} value
   */
  set nodeStrokeColor(value: string) {
    this._settings.nodeStrokeColor = value;
  }

  /**
   * set default stroke width of circle node
   * @param {number} value
   */
  set nodeStrokeWidth(value: number) {
    this._settings.nodeStrokeWidth = value;
  }

  /**
   * set default fill color of circle node
   * @param {string} value
   */
  set nodeFillColor(value: string) {
    this._settings.nodeFillColor = value;
  }

  /**
   * set default shift of node label along the x-axis on the position
   * - the center of the node as (0, 0)
   * @param {number} value
   */
  set nodeLabelDX(value: number) {
    this._settings.nodeLabelDX = value;
  }

  /**
   * set default shift of node label along the y-axis on the position
   * - the center of the node as (0, 0)
   * @param {number} value
   */
  set nodeLabelDY(value: number) {
    this._settings.nodeLabelDY = value;
  }

  /**
   * set default text anchor of node name
   * @param {"start" | "middle" | "end"} value
   */
  set nodeLabelTextAnchor(value: "start" | "middle" | "end") {
    this._settings.nodeLabelTextAnchor = value;
  }

  /**
   * set default text color of node name
   * @param {string} value
   */
  set nodeLabelColor(value: string) {
    this._settings.nodeLabelColor = value;
  }

  /**
   * set default font size of node name
   * @param {string} value
   */
  set nodeLabelFontSize(value: string) {
    this._settings.nodeLabelFontSize = value;
  }

  /**
   * set default font family of node name
   * @param {string} value
   */
  set nodeLabelFontFamily(value: string) {
    this._settings.nodeLabelFontFamily = value;
  }

  /**
   * set default connection type of link path
   * - direct: link connect to node directly
   * - marge: link connect to a little above the node
   * @param {"direct" | "marge"} value
   */
  set linkConnectionType(value: "direct"|"marge") {
    this._settings.linkConnectionType = value;
  }

  /**
   * set default link curve type
   * - default: unspecified (it's is calculated by `source node` position and `target node` position on rendering)
   * - stepBefore: becomes stepBefore forcibly irrespective of position
   * - stepAfter: becomes stepAfter forcibly irrespective of position
   * @see https://bl.ocks.org/emmasaunders/f7178ed715a601c5b2c458a2c7093f78
   * @param {"default" | "stepBefore" | "stepAfter"} value
   */
  set linkCurveType(value: "default"|"stepBefore"|"stepAfter") {
    this._settings.linkCurveType = value;
  }

  /**
   * set default link color
   * @param {string} value
   */
  set linkColor(value: string) {
    this._settings.linkColor = value;
  }

  /**
   * set default link stroke width
   * @param {number} value
   */
  set linkWidth(value: number) {
    this._settings.linkWidth = value;
  }

  /**
   * set default link head type
   * - arrow: render arrowhead on link tip
   * - none: render nothing on link tip
   * @param {"arrow" | "none"} value
   */
  set linkHeadType(value: "arrow"|"none") {
    this._settings.linkHeadType = value;
  }

  /**
   * get default arrowhead size
   * - valid when headType is `arrow`
   * @param {number} value
   */
  set linkArrowheadSize(value: number) {
    this._settings.linkArrowheadSize = value;
  }

  /**
   * set default shift of link along the x-axis on the position
   * - the center of the link `source node` as (0, 0)
   * @param {number | undefined} value
   */
  set linkLabelDX(value: number|undefined) {
    this._settings.linkLabelDX = value;
  }

  /**
   * set default shift of link along the y-axis on the position
   * - the center of the link `source node` as (0, 0)
   * @param {number | undefined} value
   */
  set linkLabelDY(value: number|undefined) {
    this._settings.linkLabelDY = value;
  }

  /**
   * set default link label text-anchor type
   * @param value
   */
  set linkLabelTextAnchor(value: "start"|"middle"|"end"|undefined) {
    this._settings.linkLabelTextAnchor = value;
  }

  /**
   * set default color of link label
   * @param {string} value
   */
  set linkLabelColor(value: string) {
    this._settings.linkLabelColor = value;
  }

  /**
   * set default font size of link label
   * @param {string} value
   */
  set linkLabelFontSize(value: string) {
    this._settings.linkLabelFontSize = value;
  }

  /**
   * set default font family of link label
   * @param {string} value
   */
  set linkLabelFontFamily(value: string) {
    this._settings.linkLabelFontFamily = value;
  }

}

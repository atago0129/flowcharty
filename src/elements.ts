import {FlowchartyMap} from "./map";
import {FlowchartyLink, FlowchartyLinkLabel, FlowchartyLinkStyle} from "./link";
import {FlowchartyNode, FlowchartyNodeLabel, FlowchartyNodeStyle} from "./node";
import {style} from "d3-selection";
import {FlowchartySettings} from "./settings";

export class FlowchartyElements {

  private readonly _dummyNode: FlowchartyNode;

  private readonly _nodes: FlowchartyNode[];

  private readonly _links: FlowchartyLink[];

  /**
   * map parse by multi-dimensional array data
   * ex.)
   *  - data
   *    [
   *      ['A', 'B', 'C'],
   *      ['D', '', 'F'],
   *      ['G']
   *    ]
   *
   *  =>
   *    [
   *      [A-node, B-node, C-node],
   *      [D-node, DummyNode, F-node],
   *      [G-node, DummyNode, DummyNode]
   *    ]
   */
  private readonly _map: FlowchartyMap;

  /**
   * @param {object} data
   */
  constructor(settings: FlowchartySettings, data: {
    nodes: {
      id: string,
      style?: {
        shape?: "circle"|"rect",
        width?: number,
        height: number,
        strokeWidth: number,
        strokeColor: string,
        fillColor: string
      },
      label: {
        name: string,
        dx?: number,
        dy?: number,
        textAnchor?: "start"|"middle"|"end",
        color?: string,
        fontSize: string,
        fontFamily: string
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
        headType?: "arrow"|"none"
      },
      label?: {
        name: string, x?: number, y?: number
      }
    }[]
  }) {
    this._dummyNode = new FlowchartyNode("", "");
    this._nodes = data.nodes.map((node) => (this.createNode(node, settings)));
    this._map = new FlowchartyMap(data.map.map((nodeIds) => (nodeIds.map((nodeId) => (this.getNodeById(nodeId))))));
    this._links = data.links.map((link) => (this.createLink(link)));
  }

  private createNode(node: {
    id: string,
    style?: {
      shape?: "circle"|"rect",
      width?: number,
      height: number,
      strokeWidth: number,
      strokeColor: string,
      fillColor: string
    },
    label: {
      name: string,
      dx?: number,
      dy?: number,
      textAnchor?: "start"|"middle"|"end",
      color?: string,
      fontSize: string,
      fontFamily: string
    }
  }, settings: FlowchartySettings): FlowchartyNode {
    let style: FlowchartyNodeStyle;
    if (node.style) {
      style = new FlowchartyNodeStyle(
        node.style.shape !== undefined ? node.style.shape : settings.shape,
        node.style.width !== undefined ? node.style.width : settings.nodeWidth,
        node.style.height !== undefined ? node.style.height : settings.nodeHeight,
        node.style.strokeWidth !== undefined ? node.style.strokeWidth : settings.nodeStrokeWidth,
        node.style.strokeColor !== undefined ? node.style.strokeColor : settings.nodeStrokeColor,
        node.style.fillColor !== undefined ? node.style.fillColor : settings.nodeFillColor
      );
    } else {
      style = new FlowchartyNodeStyle(
        settings.shape,
        settings.nodeWidth,
        settings.nodeHeight,
        settings.nodeStrokeWidth,
        settings.nodeStrokeColor,
        settings.nodeFillColor
      );
    }
    const label: FlowchartyNodeLabel = new FlowchartyNodeLabel(
      node.label.name,
      node.label.dx !== undefined ? node.label.dx : settings.nodeLabelDX,
      node.label.dy !== undefined ? node.label.dy : settings.nodeLabelDY,
      node.label.textAnchor !== undefined ? node.label.textAnchor : settings.nodeLabelTextAnchor,
      node.label.color !== undefined ? node.label.color : settings.nodeLableColor,
      node.label.fontSize !== undefined ? node.label.fontSize : settings.nodeLabelFontSize,
      node.label.fontFamily !== undefined ? node.label.fontFamily : settings.nodeLabelFontFamily
    );

    return new FlowchartyNode(node.id, style, label);
  }

  private createLink(link: {
    source: string,
    target: string,
    style?: {
      connectionType?: "direct"|"marge",
      curveType?: "default"|"stepBefore"|"stepAfter",
      color?: string,
      strokeWidth?: number,
      headType?: "arrow"|"none"
    },
    label?: {
      name: string, x?: number, y?: number
    }
  }): FlowchartyLink {
    let linkStyle: FlowchartyLinkStyle;
    if (link.style) {
      linkStyle = new FlowchartyLinkStyle(
        link.style.connectionType, link.style.curveType, link.style.color, link.style.strokeWidth, link.style.headType
      );
    } else {
      linkStyle = new FlowchartyLinkStyle();
    }

    let linkLabel: FlowchartyLinkLabel;
    if (link.label) {
      linkLabel = new FlowchartyLinkLabel(link.label.name, link.label.x, link.label.y);
    } else {
      linkLabel = new FlowchartyLinkLabel();
    }

    return new FlowchartyLink(this.getNodeById(link.source), this.getNodeById(link.target), linkStyle, linkLabel);
  }

  /**
   * get all nodes
   * @returns {FlowchartyNode[]}
   */
  get nodes(): FlowchartyNode[] {
    return this._nodes;
  }

  /**
   * get node mapping
   * @returns {FlowchartyMap}
   */
  get map(): FlowchartyMap {
    return this._map;
  }

  /**
   * get all link paths
   * @returns {FlowchartyLink[]}
   */
  get links(): FlowchartyLink[] {
    return this._links;
  }

  /**
   * get a node instance by id
   * if id is not exist, return dummy node instance
   * @param {string} id
   * @returns {FlowchartyNode}
   */
  private getNodeById(id: string): FlowchartyNode {
    return this._nodes.filter((node) => (node.id === id)).pop() || this._dummyNode ;
  }

}

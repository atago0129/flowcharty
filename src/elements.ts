import {FlowchartyMap} from "./map";
import {FlowchartyLink, FlowchartyLinkLabel, FlowchartyLinkStyle} from "./link";
import {FlowchartyNode} from "./node";
import {style} from "d3-selection";

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
  constructor(data: {
    nodes: {id: string, label: {name: string, dx?: number, dy?: number, textAnchor?: "start"|"middle"|"end"}}[],
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
    this._nodes = data.nodes.map((nodeData) => (
      new FlowchartyNode(
        nodeData.id,
        nodeData.label.name,
        nodeData.label.dx,
        nodeData.label.dy,
        nodeData.label.textAnchor
      )
    ));
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
    label?: {
      name?: string,
      dx?: number,
      dy?: number,
      textAnchor?: "start"|"middle"|"end",
      color?: string,
      fontSize: string,
      fontFamily: string
    }
  }): FlowchartyNode {
    const style = new FlowchartyLinkStyle(
    )
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

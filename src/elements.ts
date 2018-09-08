import {FlowchartyMap} from "./map";
import {FlowchartyLink} from "./link";
import {FlowchartyNode} from "./node";

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
    nodes: {id: string, name: string}[],
    map: string[][],
    links: {source: string, target: string, label?: {name: string, positionType?: string}, linkType?: "direct"|"marge"}[]
  }) {
    this._dummyNode = new FlowchartyNode({id: "", name: ""});
    this._nodes = data.nodes.map((nodeData) => (new FlowchartyNode(nodeData)));
    this._map = new FlowchartyMap(data.map.map((nodeIds) => (nodeIds.map((nodeId) => (this.getNodeById(nodeId))))));
    this._links = data.links.map((link) => {
      return new FlowchartyLink(
        this.getNodeById(link.source),
        this.getNodeById(link.target),
        link.label,
        link.linkType
      );
    })
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
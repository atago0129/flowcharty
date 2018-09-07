import {FlowchartyMap} from "./map";
import {FlowchartyLink} from "./link";
import {FlowchartyNode} from "./node";

export class FlowchartyElements {

  private  _dummyNode: FlowchartyNode;

  private _nodes: FlowchartyNode[];

  private _links: FlowchartyLink[];

  private _map: FlowchartyMap;

  constructor(data: {
    nodes: {id: string, name: string}[],
    map: string[][],
    links: {source: string, target: string, label?: {name: string, positionType?: string}, arrowType?: string}[]
  }) {
    this._dummyNode = new FlowchartyNode({id: "", name: ""});
    this._nodes = data.nodes.map((nodeData) => (new FlowchartyNode(nodeData)));
    this._map = new FlowchartyMap(data.map.map((nodeIds) => (nodeIds.map((nodeId) => (this.getNodeById(nodeId))))));
    this._links = data.links.map((link) => {
      return new FlowchartyLink(
        this.getNodeById(link.source),
        this.getNodeById(link.target),
        link.label,
        link.arrowType
      );
    })

  }

  get nodes(): FlowchartyNode[] {
    return this._nodes;
  }

  get map(): FlowchartyMap {
    return this._map;
  }

  get links(): FlowchartyLink[] {
    return this._links;
  }

  public getNodeById(id: string): FlowchartyNode {
    return this._nodes.filter((node) => (node.id === id)).pop() || this._dummyNode ;
  }

}
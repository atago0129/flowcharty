import {FlowchartyMap} from "./map";
import {FlowchartyLink} from "./link";
import {FlowchartyNode} from "./node";

export class FlowchartyElements {
  private _nodes: FlowchartyNode[];

  private _links: FlowchartyLink[];

  private _map: FlowchartyMap;

  constructor(data: {
    nodes: {id: string, name: string}[],
    map: string[][],
    links: {source: string, target: string, label?: {name: string, positionType?: string}, arrowType?: string}[]
  }) {
    this._nodes = data.nodes.map((nodeData) => (new FlowchartyNode(nodeData)));
    this.parseMap(data.map);
    this.parseLink(data.links);
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

  public getNodeById(id: string): FlowchartyNode|null {
    return this._nodes.filter((node) => (node.id === id)).pop() || null;
  }

  private parseMap(map: string[][]) {
    this._map = new FlowchartyMap(map.map((nodeIds) => (nodeIds.map((nodeId) => (this.getNodeById(nodeId))))));
  }

  private parseLink(links: {source: string, target: string, label?: {name: string, positionType?: string}, arrowType?: string}[]) {
    this._links = links.map((link) => {
      return new FlowchartyLink(
        this.getNodeById(link.source),
        this.getNodeById(link.target),
        link.label ? link.label : null,
        link.arrowType ? link.arrowType : null
      );
    })
  }
}
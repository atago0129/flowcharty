import {FlowchartyMap} from "./map";
import {FlowchartyLink} from "./link";
import {FlowchartyNode, FlowchartyNodeLabel, FlowchartyNodeStyle} from "./node";

export class FlowchartyElements {

  private readonly _dummyNode: FlowchartyNode;

  /**
   * @param {FlowchartyNode[]} _nodes
   * @param {FlowchartyLink[]} _links
   * @param {FlowchartyMap} _map
   */
  constructor(private _nodes: FlowchartyNode[], private _links: FlowchartyLink[], private _map: FlowchartyMap) {
    const dummyStyle: FlowchartyNodeStyle = new FlowchartyNodeStyle("nothing", 0, 0, 0, 0, "#000", 0, "#000");
    const dummyLabel: FlowchartyNodeLabel = new FlowchartyNodeLabel("", 0, 0, "start", "#000", "0", "");
    this._dummyNode = new FlowchartyNode("", dummyStyle, dummyLabel);
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
  public getNodeById(id: string): FlowchartyNode {
    return this._nodes.filter((node) => (node.id === id)).pop() || this._dummyNode ;
  }

}

import {FlowchartyNode} from "./node";

export class FlowchartyLink {

  constructor(
    private _sourceNode: FlowchartyNode,
    private _targetNode: FlowchartyNode,
    private _label: {name: string, positionType?: string} = {name: ""},
    private _linkType: "direct"|"marge" = "direct",
    private _lineType: "default"|"stepBefore"|"stepAfter" = "default")
  {
  }

  /**
   * get source node instance of this link path
   * @returns {FlowchartyNode}
   */
  public get sourceNode(): FlowchartyNode {
    return this._sourceNode;
  }

  /**
   * get target node instance of this link path
   * @returns {FlowchartyNode}
   */
  public get targetNode(): FlowchartyNode {
    return this._targetNode;
  }

  /**
   * get label data
   *  - name: name of link path
   *  - positionType: [future]position of link path (ex. top, bottom, left, right)
   * @returns {object}
   */
  public get label(): { name: string; positionType?: string } {
    return this._label;
  }

  /**
   * get link type
   *  - "direct": directly connect to node
   *  - "marge": slide slightly off the node
   * @returns {"direct"|"marge"}
   */
  public get linkType(): string {
    return this._linkType;
  }

  /**
   * get line type
   * @returns {"default"|"stepBefore"|"stepAfter"}
   */
  public get lineType(): "default"|"stepBefore"|"stepAfter" {
    return this._lineType;
  }
}

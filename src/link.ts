import {FlowchartyNode} from "./node";

export class FlowchartyLink {

  constructor(
    private _sourceNode: FlowchartyNode,
    private _targetNode: FlowchartyNode,
    private _label: {name: string, positionType?: string} = {name: ""},
    private _linkType: string = "direct")
  {
  }

  public get sourceNode(): FlowchartyNode {
    return this._sourceNode;
  }

  public get targetNode(): FlowchartyNode {
    return this._targetNode;
  }

  public get label(): { name: string; positionType?: string } {
    return this._label;
  }

  public get linkType(): string {
    return this._linkType;
  }
}
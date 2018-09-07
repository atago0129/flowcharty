import {FlowchartyNode} from "./node";

export class FlowchartyLink {

  private _sourceNode: FlowchartyNode;

  private _targetNode: FlowchartyNode;

  private _label: {name: string|null, positionType?: string} = {name: ""};

  private _linkType: string|null;

  constructor(private _sourceNode: FlowchartyNode, private _targetNode: FlowchartyNode, private _label?: {name: string, positionType?: string}, private _linkType?: string) {
  }

  get sourceNode(): FlowchartyNode {
    return this._sourceNode;
  }

  get targetNode(): FlowchartyNode {
    return this._targetNode;
  }

  get label(): { name: string; positionType?: string } {
    return this._label;
  }

  get linkType(): string {
    return this._linkType;
  }
}
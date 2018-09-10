import {FlowchartyNode} from "./node";

export class FlowchartyLink {

  constructor(
    private _sourceNode: FlowchartyNode,
    private _targetNode: FlowchartyNode,
    private _style: FlowchartyLinkStyle,
    private _label: FlowchartyLinkLabel)
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
   * get link style
   * @returns {FlowchartyLinkStyle}
   */
  get style(): FlowchartyLinkStyle {
    return this._style;
  }

  /**
   * get link label
   * @returns {FlowchartyLinkLabel}
   */
  get label(): FlowchartyLinkLabel {
    return this._label;
  }
}

export class FlowchartyLinkStyle {
  constructor(
    private _connectionType: "direct"|"marge" = "direct",
    private _curveType: "default"|"stepBefore"|"stepAfter" = "default",
    private _color: string = "#000",
    private _strokeWidth: number = 2,
    private _headType: "arrow"|"none" = "arrow"){
  }

  get connectionType(): "direct" | "marge" {
    return this._connectionType;
  }

  get curveType(): "default" | "stepBefore" | "stepAfter" {
    return this._curveType;
  }

  get color(): string {
    return this._color;
  }

  get strokeWidth(): number {
    return this._strokeWidth;
  }

  get headType(): "arrow" | "none" {
    return this._headType;
  }
}

export class FlowchartyLinkLabel {
  constructor(private _name: string = "", private _x: number|undefined = undefined, private _y: number|undefined = undefined) {
  }

  get name(): string {
    return this._name;
  }

  get x(): number | undefined {
    return this._x;
  }

  get y(): number | undefined {
    return this._y;
  }
}

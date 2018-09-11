export class FlowchartyLink {

  constructor(
    private _sourceNodeId: string,
    private _targetNodeId: string,
    private _style: FlowchartyLinkStyle,
    private _label: FlowchartyLinkLabel)
  {
  }

  /**
   * get source node instance of this link path
   * @returns {string}
   */
  public get sourceNodeId(): string {
    return this._sourceNodeId;
  }

  /**
   * get target node instance of this link path
   * @returns {string}
   */
  public get targetNodeId(): string {
    return this._targetNodeId;
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
    private _connectionType: "direct"|"marge",
    private _curveType: "default"|"stepBefore"|"stepAfter",
    private _color: string,
    private _width: number,
    private _headType: "arrow"|"none",
    private _arrowheadSize: number){
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
    return this._width;
  }

  get headType(): "arrow" | "none" {
    return this._headType;
  }

  get arrowHeadSize(): number {
    return this._arrowheadSize;
  }
}

export class FlowchartyLinkLabel {
  constructor(
    private _name: string,
    private _dx: number|undefined,
    private _dy: number|undefined,
    private _color: string,
    private _fontSize: string,
    private _fontFamily: string) {
  }

  get name(): string {
    return this._name;
  }

  get dx(): number | undefined {
    return this._dx;
  }

  get dy(): number | undefined {
    return this._dy;
  }

  get color(): string {
    return this._color;
  }

  get fontSize(): string {
    return this._fontSize;
  }

  get fontFamily(): string {
    return this._fontFamily;
  }
}

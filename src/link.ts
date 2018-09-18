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
  get sourceNodeId(): string {
    return this._sourceNodeId;
  }

  /**
   * get target node instance of this link path
   * @returns {string}
   */
  get targetNodeId(): string {
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
    private _strokeWidth: number,
    private _headType: "arrow"|"none",
    private _arrowheadSize: number){
  }

  /**
   * get connection type of link path
   * - direct: link connect to node directly
   * - marge: link connect to a little above the node
   * @returns {"direct" | "marge"}
   */
  get connectionType(): "direct" | "marge" {
    return this._connectionType;
  }

  /**
   * get link curve type
   * - default: unspecified (it's is calculated by `source node` position and `target node` position on rendering)
   * - stepBefore: becomes stepBefore forcibly irrespective of position
   * - stepAfter: becomes stepAfter forcibly irrespective of position
   * @see https://bl.ocks.org/emmasaunders/f7178ed715a601c5b2c458a2c7093f78
   * @returns {"default" | "stepBefore" | "stepAfter"}
   */
  get curveType(): "default" | "stepBefore" | "stepAfter" {
    return this._curveType;
  }

  /**
   * get link color
   * @returns {string}
   */
  get color(): string {
    return this._color;
  }

  /**
   * get link stroke width
   * @returns {number}
   */
  get strokeWidth(): number {
    return this._strokeWidth;
  }

  /**
   * get link head type
   * - arrow: render arrowhead on link tip
   * - none: render nothing on link tip
   * @returns {"arrow" | "none"}
   */
  get headType(): "arrow" | "none" {
    return this._headType;
  }

  /**
   * get arrowhead size
   * - valid when headType is `arrow`
   * @returns {number}
   */
  get arrowHeadSize(): number {
    return this._arrowheadSize;
  }
}

export class FlowchartyLinkLabel {
  constructor(
    private _name: string,
    private _dx: number|undefined,
    private _dy: number|undefined,
    private _textAnchor: "start"|"middle"|"end"|undefined,
    private _color: string,
    private _fontSize: string,
    private _fontFamily: string) {
  }

  /**
   * get link label text
   * @returns {string}
   */
  get name(): string {
    return this._name;
  }

  /**
   * get a shift along the x-axis on the position
   * - the center of the link `source node` as (0, 0)
   * @returns {number | undefined}
   */
  get dx(): number | undefined {
    return this._dx;
  }

  /**
   * get a shift along the y-axis on the position
   * - the center of the link `source node` as (0, 0)
   * @returns {number | undefined}
   */
  get dy(): number | undefined {
    return this._dy;
  }

  /**
   * get link label text-anchor
   */
  get textAnchor(): "start"|"middle"|"end"|undefined {
    return this._textAnchor;
  }

  /**
   * get link label text color
   * @returns {string}
   */
  get color(): string {
    return this._color;
  }

  /**
   * get font size
   * @returns {string}
   */
  get fontSize(): string {
    return this._fontSize;
  }

  /**
   * get font family
   * @returns {string}
   */
  get fontFamily(): string {
    return this._fontFamily;
  }
}

export class FlowchartyNode {
  private _nodePosition: {x: number, y: number} = {x: 0, y: 0};

  constructor(private _id: string, private _style: FlowchartyNodeStyle, private _label: FlowchartyNodeLabel) {
  }

  /**
   * get node id
   * @returns {string}
   */
  get id(): string {
    return this._id;
  }

  /**
   * get node style
   * @returns {FlowchartyNodeStyle}
   */
  get style(): FlowchartyNodeStyle {
    return this._style;
  }

  /**
   * get node label
   * @returns {FlowchartyNodeLabel}
   */
  get label(): FlowchartyNodeLabel {
    return this._label;
  }

  /**
   * set node position "x"
   * @param {number} x
   */
  set x(x: number) {
    this._nodePosition.x = x;
  }

  /**
   * get node position "x"
   * @returns {number}
   */
  get x(): number {
    return this._nodePosition.x;
  }

  /**
   * set node position "y"
   * @param {number} y
   */
  set y(y: number) {
    this._nodePosition.y = y;
  }

  /**
   * get node position "y"
   * @returns {number}
   */
  get y(): number {
    return this._nodePosition.y;
  }
}

export class FlowchartyNodeStyle {
  constructor(
    private _shape: "circle"|"rect"|"nothing",
    private _width: number,
    private _height: number,
    private _rx: number,
    private _ry: number,
    private _strokeColor: string,
    private _strokeWidth: number,
    private _fillColor: string){
  }

  /**
   * get shape type
   * @returns {"circle" | "rect" | "nothing"}
   */
  get shape(): "circle"|"rect"|"nothing" {
    return this._shape;
  }

  /**
   * get width of rect node
   * @returns {number}
   */
  get width(): number {
    return this._width;
  }

  /**
   * get height of rect node
   * @returns {number}
   */
  get height(): number {
    return this._height;
  }

  /**
   * get horizontal radius of circle(ellipse) node
   * or, get horizontal radius of rounded rect node's corner
   * @returns {number}
   */
  get rx(): number {
    return this._rx;
  }

  /**
   * get vertical radius of circle(ellipse) node
   * or, get vertical radius of rounded rect node's corner
   * @returns {number}
   */
  get ry(): number {
    return this._ry;
  }

  /**
   * get color of stroke
   * @returns {string}
   */
  get strokeColor(): string {
    return this._strokeColor;
  }

  /**
   * get width of stroke
   * @returns {number}
   */
  get strokeWidth(): number {
    return this._strokeWidth;
  }

  /**
   * get color of fill
   * @returns {string}
   */
  get fillColor(): string {
    return this._fillColor;
  }

  /**
   * get horizontal length
   * - shape is `circle`: return horizontal diameter
   * - shape is `rect`: return width
   * - shape is `nothing`: return 0
   * @returns {number}
   */
  get horizontalLength(): number {
    if (this._shape === "circle") {
      return this._rx * 2;
    }
    if (this._shape === "rect") {
      return this._width;
    }
    return 0;
  }

  /**
   * get vertical length
   * - shape is `circle`: return vertical diameter
   * - shape is `rect`: return height
   * - shape is `nothing`: return 0
   * @returns {number}
   */
  get verticalLength(): number {
    if (this._shape === "circle") {
      return this._ry * 2;
    }
    if (this._shape === "rect") {
      return this._height;
    }
    return 0;
  }
}

export class FlowchartyNodeLabel {
  constructor(
    private _name: string,
    private _dx: number,
    private _dy: number,
    private _textAnchor: "start"|"middle"|"end",
    private _color: string,
    private _fontSize: string,
    private _fontFamily: string) {
  }

  /**
   * get label name text
   * @returns {string}
   */
  get name(): string {
    return this._name;
  }

  /**
   * get a shift along the x-axis on the position
   * - the center of the node as (0, 0)
   * @returns {number}
   */
  get dx(): number {
    return this._dx;
  }

  /**
   * get a shift along the y-axis on the position
   * - the center of the node as (0, 0)
   * @returns {number}
   */
  get dy(): number {
    return this._dy;
  }

  /**
   * get text anchor of name text
   * @returns {"start" | "middle" | "end"}
   */
  get textAnchor(): "start" | "middle" | "end" {
    return this._textAnchor;
  }

  /**
   * get text color
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

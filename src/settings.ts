export class FlowchartySettings {

  private _node: {
    style: {
      shape: "circle"|"rect"|"nothing",
      width: number,
      height: number,
      rx: number,
      ry: number,
      strokeColor: string,
      strokeWidth: number,
      fillColor: string
    },
    label: {
      dx: number,
      dy: number,
      textAnchor: "start"|"middle"|"end",
      color: string,
      fontSize: string,
      fontFamily: string
    }
  } = {
    style: {
     shape: "circle",
      width: 20,
      height: 20,
      rx: 5,
      ry: 5,
      strokeColor: "#000",
      strokeWidth: 2,
      fillColor: "#fff"
    },
    label: {
      dx: -10,
      dy: -10,
      textAnchor: "end",
      color: "#000",
      fontSize: "12px",
      fontFamily: "メイリオ"
    }
  };
  
  private _link: {
    style: {
      connectionType: "direct"|"marge",
      curveType: "default"|"stepBefore"|"stepAfter",
      color: string,
      width: number,
      headType: "arrow"|"none",
      arrowheadSize: number
    },
    label: {
      x: number|undefined,
      y: number|undefined,
      color: string,
      fontSize: string,
      fontFamily: string
    }
  } = {
    style: {
      connectionType: "direct",
      curveType: "default",
      color: "#000",
      width: 2,
      headType: "arrow",
      arrowheadSize: 6
    },
    label: {
      x: undefined,
      y: undefined,
      color: "#000",
      fontSize: "12px",
      fontFamily: "メイリオ"
    }
  };
  
  get shape(): "circle"|"rect"|"nothing" {
    return this._node.style.shape;
  }

  set shape(value: "circle"|"rect"|"nothing") {
    this._node.style.shape = value;
  }

  get nodeWidth(): number {
    return this._node.style.width;
  }

  set nodeWidth(value: number) {
    this._node.style.width = value;
  }

  get nodeHeight(): number {
    return this._node.style.height;
  }

  set nodeHeight(value: number) {
    this._node.style.height = value;
  }

  get nodeRX(): number {
    return this._node.style.rx;
  }

  set nodeRX(value: number) {
    this._node.style.rx = value;
  }

  get nodeRY(): number {
    return this._node.style.ry;
  }

  set nodeRY(value: number) {
    this._node.style.ry = value;
  }

  /**
   * get default stroke color of circle node
   * @returns {string}
   */
  public get nodeStrokeColor(): string {
    return this._node.style.strokeColor;
  }

  /**
   * set default stroke color of circle node
   * @param {string} value
   */
  public set nodeStrokeColor(value: string) {
    this._node.style.strokeColor = value;
  }

  /**
   * get default stroke width of circle node
   * @returns {number}
   */
  public get nodeStrokeWidth(): number {
    return this._node.style.strokeWidth;
  }

  /**
   * set default stroke width of circle node
   * @param {number} value
   */
  public set nodeStrokeWidth(value: number) {
    this._node.style.width = value;
  }

  /**
   * get default fill color of circle node
   * @returns {string}
   */
  public get nodeFillColor(): string {
    return this._node.style.fillColor;
  }

  /**
   * set default fill color of circle node
   * @param {string} value
   */
  public set nodeFillColor(value: string) {
    this._node.style.fillColor = value;
  }

  get nodeLabelDX(): number {
    return this._node.label.dx;
  }

  set nodeLabelDX(value: number) {
    this._node.label.dx = value;
  }

  get nodeLabelDY(): number {
    return this._node.label.dy;
  }

  set nodeLabelDY(value: number) {
    this._node.label.dy = value;
  }

  get nodeLabelTextAnchor(): "start" | "middle" | "end" {
    return this._node.label.textAnchor;
  }

  set nodeLabelTextAnchor(value: "start" | "middle" | "end") {
    this._node.label.textAnchor = value;
  }

  get nodeLabelColor(): string {
    return this._node.label.color;
  }

  set nodoLabelColor(value: string) {
    this._node.label.color = value;
  }

  get nodeLabelFontSize(): string {
    return this._node.label.fontSize;
  }

  set nodeLabelFontSize(value: string) {
    this._node.label.fontSize = value;
  }

  get nodeLabelFontFamily(): string {
    return this._node.label.fontFamily;
  }

  set nodeLabelFontFamily(value: string) {
    this._node.label.fontFamily = value;
  }

  get linkConnectionType(): "direct"|"marge" {
    return this._link.style.connectionType;
  }

  set linkConnectionType(value: "direct"|"marge") {
    this._link.style.connectionType = value;
  }

  get linkCurveType(): "default"|"stepBefore"|"stepAfter" {
    return this._link.style.curveType;
  }

  set linkCurveType(value: "default"|"stepBefore"|"stepAfter") {
    this._link.style.curveType = value;
  }

  get linkColor(): string {
    return this._link.style.color;
  }

  set linkColor(value: string) {
    this._link.style.color = value;
  }

  get linkWidth(): number {
    return this._link.style.width;
  }

  set linkWidth(value: number) {
    this._link.style.width = value;
  }

  get linkHeadType(): "arrow"|"none" {
    return this._link.style.headType;
  }

  set linkHeadType(value: "arrow"|"none") {
    this._link.style.headType = value;
  }

  get linkArrowheadSize(): number {
    return this._link.style.arrowheadSize;
  }

  set linkArrowheadSize(value: number) {
    this._link.style.arrowheadSize = value;
  }

  get linkLabelX(): number|undefined {
    return this._link.label.x;
  }

  set linkLabelX(value: number|undefined) {
    this._link.label.x = value;
  }

  get linkLabelY(): number|undefined {
    return this._link.label.y;
  }

  set linkLabelY(value: number|undefined) {
    this._link.label.y = value;
  }

  get linkLabelColor(): string {
    return this._link.label.color;
  }

  set linkLabelColor(value: string) {
    this._link.label.color = value;
  }

  get linkLabelFontSize(): string {
    return this._link.label.fontSize;
  }

  set linkLabelFontSize(value: string) {
    this._link.label.fontSize = value;
  }

  get linkLabelFontFamily(): string {
    return this._link.label.fontFamily;
  }

  set linkLabelFontFamily(value: string) {
    this._link.label.fontFamily = value;
  }
}

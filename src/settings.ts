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
      fontFamily: "sans-serif"
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
      dx: number|undefined,
      dy: number|undefined,
      textAnchor: "start"|"middle"|"end"|undefined,
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
      dx: undefined,
      dy: undefined,
      textAnchor: undefined,
      color: "#000",
      fontSize: "12px",
      fontFamily: "sans-serif"
    }
  };

  /**
   * get default node shape
   * @returns {"circle" | "rect" | "nothing"}
   */
  get shape(): "circle"|"rect"|"nothing" {
    return this._node.style.shape;
  }

  /**
   * set default node shape
   * @param {"circle" | "rect" | "nothing"} value
   */
  set shape(value: "circle"|"rect"|"nothing") {
    this._node.style.shape = value;
  }

  /**
   * get default rectangle node width
   * @returns {number}
   */
  get nodeWidth(): number {
    return this._node.style.width;
  }

  /**
   * set default rectangle node width
   * @param {number} value
   */
  set nodeWidth(value: number) {
    this._node.style.width = value;
  }

  /**
   * get default rectangle node height
   * @returns {number}
   */
  get nodeHeight(): number {
    return this._node.style.height;
  }

  /**
   * set default rectangle node height
   * @param {number} value
   */
  set nodeHeight(value: number) {
    this._node.style.height = value;
  }

  /**
   * get default horizontal radius of circle(ellipse) node
   * or, get default  horizontal radius of rounded rect node's corner
   * @returns {number}
   */
  get nodeRX(): number {
    return this._node.style.rx;
  }

  /**
   * set default horizontal radius of circle(ellipse) node
   * or, set default  horizontal radius of rounded rect node's corner
   * @param {number} value
   */
  set nodeRX(value: number) {
    this._node.style.rx = value;
  }

  /**
   * get default vertical radius of circle(ellipse) node
   * or, get default vertical radius of rounded rect node's corner
   * @returns {number}
   */
  get nodeRY(): number {
    return this._node.style.ry;
  }

  /**
   * set default vertical radius of circle(ellipse) node
   * or, set default vertical radius of rounded rect node's corner
   * @param {number} value
   */
  set nodeRY(value: number) {
    this._node.style.ry = value;
  }

  /**
   * get default stroke color of circle node
   * @returns {string}
   */
  get nodeStrokeColor(): string {
    return this._node.style.strokeColor;
  }

  /**
   * set default stroke color of circle node
   * @param {string} value
   */
  set nodeStrokeColor(value: string) {
    this._node.style.strokeColor = value;
  }

  /**
   * get default stroke width of circle node
   * @returns {number}
   */
  get nodeStrokeWidth(): number {
    return this._node.style.strokeWidth;
  }

  /**
   * set default stroke width of circle node
   * @param {number} value
   */
  set nodeStrokeWidth(value: number) {
    this._node.style.width = value;
  }

  /**
   * get default fill color of circle node
   * @returns {string}
   */
  get nodeFillColor(): string {
    return this._node.style.fillColor;
  }

  /**
   * set default fill color of circle node
   * @param {string} value
   */
  set nodeFillColor(value: string) {
    this._node.style.fillColor = value;
  }

  /**
   * get default shift of node label along the x-axis on the position
   * - the center of the node as (0, 0)
   * @returns {number}
   */
  get nodeLabelDX(): number {
    return this._node.label.dx;
  }

  /**
   * set default shift of node label along the x-axis on the position
   * - the center of the node as (0, 0)
   * @param {number} value
   */
  set nodeLabelDX(value: number) {
    this._node.label.dx = value;
  }

  /**
   * get default shift of node label along the y-axis on the position
   * - the center of the node as (0, 0)
   * @returns {number}
   */
  get nodeLabelDY(): number {
    return this._node.label.dy;
  }

  /**
   * set default shift of node label along the y-axis on the position
   * - the center of the node as (0, 0)
   * @param {number} value
   */
  set nodeLabelDY(value: number) {
    this._node.label.dy = value;
  }

  /**
   * get default text anchor of node name
   * @returns {"start" | "middle" | "end"}
   */
  get nodeLabelTextAnchor(): "start" | "middle" | "end" {
    return this._node.label.textAnchor;
  }

  /**
   * set default text anchor of node name
   * @param {"start" | "middle" | "end"} value
   */
  set nodeLabelTextAnchor(value: "start" | "middle" | "end") {
    this._node.label.textAnchor = value;
  }

  /**
   * get default text color of node name
   * @returns {string}
   */
  get nodeLabelColor(): string {
    return this._node.label.color;
  }

  /**
   * set default text color of node name
   * @param {string} value
   */
  set nodeLabelColor(value: string) {
    this._node.label.color = value;
  }

  /**
   * get default font size of node name
   * @returns {string}
   */
  get nodeLabelFontSize(): string {
    return this._node.label.fontSize;
  }

  /**
   * set default font size of node name
   * @param {string} value
   */
  set nodeLabelFontSize(value: string) {
    this._node.label.fontSize = value;
  }

  /**
   * get default font family of node name
   * @returns {string}
   */
  get nodeLabelFontFamily(): string {
    return this._node.label.fontFamily;
  }

  /**
   * set default font family of node name
   * @param {string} value
   */
  set nodeLabelFontFamily(value: string) {
    this._node.label.fontFamily = value;
  }

  /**
   * get default connection type of link path
   * - direct: link connect to node directly
   * - marge: link connect to a little above the node
   * @returns {"direct" | "marge"}
   */
  get linkConnectionType(): "direct"|"marge" {
    return this._link.style.connectionType;
  }

  /**
   * set default connection type of link path
   * - direct: link connect to node directly
   * - marge: link connect to a little above the node
   * @param {"direct" | "marge"} value
   */
  set linkConnectionType(value: "direct"|"marge") {
    this._link.style.connectionType = value;
  }

  /**
   * get default link curve type
   * - default: unspecified (it's is calculated by `source node` position and `target node` position on rendering)
   * - stepBefore: becomes stepBefore forcibly irrespective of position
   * - stepAfter: becomes stepAfter forcibly irrespective of position
   * @see https://bl.ocks.org/emmasaunders/f7178ed715a601c5b2c458a2c7093f78
   * @returns {"default" | "stepBefore" | "stepAfter"}
   */
  get linkCurveType(): "default"|"stepBefore"|"stepAfter" {
    return this._link.style.curveType;
  }

  /**
   * set default link curve type
   * - default: unspecified (it's is calculated by `source node` position and `target node` position on rendering)
   * - stepBefore: becomes stepBefore forcibly irrespective of position
   * - stepAfter: becomes stepAfter forcibly irrespective of position
   * @see https://bl.ocks.org/emmasaunders/f7178ed715a601c5b2c458a2c7093f78
   * @param {"default" | "stepBefore" | "stepAfter"} value
   */
  set linkCurveType(value: "default"|"stepBefore"|"stepAfter") {
    this._link.style.curveType = value;
  }

  /**
   * get default link color
   * @returns {string}
   */
  get linkColor(): string {
    return this._link.style.color;
  }

  /**
   * set default link color
   * @param {string} value
   */
  set linkColor(value: string) {
    this._link.style.color = value;
  }

  /**
   * get default link stroke width
   * @returns {number}
   */
  get linkWidth(): number {
    return this._link.style.width;
  }

  /**
   * set default link stroke width
   * @param {number} value
   */
  set linkWidth(value: number) {
    this._link.style.width = value;
  }

  /**
   * get default link head type
   * - arrow: render arrowhead on link tip
   * - none: render nothing on link tip
   * @returns {"arrow" | "none"}
   */
  get linkHeadType(): "arrow"|"none" {
    return this._link.style.headType;
  }

  /**
   * set default link head type
   * - arrow: render arrowhead on link tip
   * - none: render nothing on link tip
   * @param {"arrow" | "none"} value
   */
  set linkHeadType(value: "arrow"|"none") {
    this._link.style.headType = value;
  }

  /**
   * get default arrowhead size
   * - valid when headType is `arrow`
   * @returns {number}
   */
  get linkArrowheadSize(): number {
    return this._link.style.arrowheadSize;
  }

  /**
   * get default arrowhead size
   * - valid when headType is `arrow`
   * @param {number} value
   */
  set linkArrowheadSize(value: number) {
    this._link.style.arrowheadSize = value;
  }

  /**
   * get default shift of link along the x-axis on the position
   * - the center of the link `source node` as (0, 0)
   * @returns {number | undefined}
   */
  get linkLabelDX(): number|undefined {
    return this._link.label.dx;
  }

  /**
   * set default shift of link along the x-axis on the position
   * - the center of the link `source node` as (0, 0)
   * @param {number | undefined} value
   */
  set linkLabelDX(value: number|undefined) {
    this._link.label.dx = value;
  }

  /**
   * get default shift of link along the y-axis on the position
   * - the center of the link `source node` as (0, 0)
   * @returns {number | undefined}
   */
  get linkLabelDY(): number|undefined {
    return this._link.label.dy;
  }

  /**
   * set default shift of link along the y-axis on the position
   * - the center of the link `source node` as (0, 0)
   * @param {number | undefined} value
   */
  set linkLabelDY(value: number|undefined) {
    this._link.label.dy = value;
  }

  /**
   * get default link label text-anchor type
   */
  get linkLabelTextAnchor(): "start"|"middle"|"end"|undefined {
    return this._link.label.textAnchor;
  }

  /**
   * set default link label text-anchor type
   * @param value
   */
  set linkLabelTextAnchor(value: "start"|"middle"|"end"|undefined) {
    this._link.label.textAnchor = value;
  }

  /**
   * get default color of link label
   * @returns {string}
   */
  get linkLabelColor(): string {
    return this._link.label.color;
  }

  /**
   * set default color of link label
   * @param {string} value
   */
  set linkLabelColor(value: string) {
    this._link.label.color = value;
  }

  /**
   * get default font size of link label
   * @returns {string}
   */
  get linkLabelFontSize(): string {
    return this._link.label.fontSize;
  }

  /**
   * set default font size of link label
   * @param {string} value
   */
  set linkLabelFontSize(value: string) {
    this._link.label.fontSize = value;
  }

  /**
   * get default font family of link label
   * @returns {string}
   */
  get linkLabelFontFamily(): string {
    return this._link.label.fontFamily;
  }

  /**
   * set default font family of link label
   * @param {string} value
   */
  set linkLabelFontFamily(value: string) {
    this._link.label.fontFamily = value;
  }
}

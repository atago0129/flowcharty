export class FlowchartySettings {

  private _node: {
    style: {
     shape: "circle"|"rect",
      width: number,
      height: number,
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
      width: 5,
      height: 5,
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
      strokeWidth: number,
      headType: "arrow"|"none",
      arrowSize: number
    },
    label: {
      x: number,
      y: number,
      color: string,
      fontSize: string,
      fontFamily: string
    }
  } = {
    style: {
      connectionType: "direct",
      curveType: "default",
      color: "#000",
      strokeWidth: 2,
      headType: "arrow",
      arrowSize: 12
    },
    label: {
      x: 0,
      y: 0,
      color: "#000",
      fontSize: "12px",
      fontFamily: "メイリオ"
    }
  };
  
  get node(): {
    style: {
     shape: "circle"|"rect",
      width: number,
      height: number,
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
  } {
    return this._node;
  }
  
  private get link(): {
    style: {
      connectionType: "direct"|"marge",
      curveType: "default"|"stepBefore"|"stepAfter",
      color: string,
      strokeWidth: number,
      headType: "arrow"|"none",
      arrowSize: number
    },
    label: {
      x: number,
      y: number,
      color: string,
      fontSize: string,
      fontFamily: string
    }
  } {
    return this._link;
  }
  
  private _shape: "circle"|"rect" = "circle";

  private _nodeWidth: number = 5;

  private _nodeHeight: number = 5;

  private _nodeStrokeColor: string = "#000";

  private _nodeStrokeWidth: number = 2;

  private _circleNodeRadius: number = 2.5;

  private _nodeFillColor: string = "#fff";

  private _nodeLabelDX: number = -10;

  private _nodeLabelDY: number = -10;

  private _nodeLabelTextAnchor: "start"|"middle"|"end" = "end";

  private _nodeLableColor: string = "#000";

  private _nodeLabelFontSize: string = "10px";

  private _nodeLabelFontFamily: string = "メイリオ";

  private _arrowheadSize: number = 12;

  private _linkStroke: string = "#000";


  get shape(): "circle"|"rect" {
    return this._shape;
  }

  get nodeWidth(): number {
    return this._nodeWidth;
  }

  get nodeHeight(): number {
    return this._nodeHeight;
  }

  /**
   * get default stroke color of circle node
   * @returns {string}
   */
  public get nodeStrokeColor(): string {
    return this._nodeStrokeColor;
  }

  /**
   * set default stroke color of circle node
   * @param {string} value
   */
  public set nodeStrokeColor(value: string) {
    this._nodeStrokeColor = value;
  }

  /**
   * get default stroke width of circle node
   * @returns {number}
   */
  public get nodeStrokeWidth(): number {
    return this._nodeStrokeWidth;
  }

  /**
   * set default stroke width of circle node
   * @param {number} value
   */
  public set nodeStrokeWidth(value: number) {
    this._nodeStrokeWidth = value;
  }

  /**
   * get default radius of circle node
   * @returns {number}
   */
  public get circleNodeRadius(): number {
    return this._circleNodeRadius;
  }

  /**
   * set default radius of circle node
   * @param {number} value
   */
  public set circleNodeRadius(value: number) {
    this._circleNodeRadius = value;
  }

  /**
   * get default fill color of circle node
   * @returns {string}
   */
  public get nodeFillColor(): string {
    return this._nodeFillColor;
  }

  /**
   * set default fill color of circle node
   * @param {string} value
   */
  public set nodeFillColor(value: string) {
    this._nodeFillColor = value;
  }

  get nodeLabelDX(): number {
    return this._nodeLabelDX;
  }

  get nodeLabelDY(): number {
    return this._nodeLabelDY;
  }

  get nodeLabelTextAnchor(): "start" | "middle" | "end" {
    return this._nodeLabelTextAnchor;
  }

  get nodeLableColor(): string {
    return this._nodeLableColor;
  }

  get nodeLabelFontSize(): string {
    return this._nodeLabelFontSize;
  }

  get nodeLabelFontFamily(): string {
    return this._nodeLabelFontFamily;
  }

  /**
   * get default size of arrowhead
   * @returns {number}
   */
  public get arrowheadSize(): number {
    return this._arrowheadSize;
  }

  /**
   * set default size of arrowhead
   * @param {number} value
   */
  public set arrowheadSize(value: number) {
    this._arrowheadSize = value;
  }

  /**
   * get default stroke color of link
   * @returns {string}
   */
  public get linkStroke(): string {
    return this._linkStroke;
  }

  /**
   * set default stroke color of link
   * @param {string} value
   */
  public set linkStroke(value: string) {
    this._linkStroke = value;
  }
}

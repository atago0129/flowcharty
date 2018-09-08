export class FlowchartySettings {
  private _circleNodeStroke: string = "#000";

  private _circleNodeStrokeWidth: number = 2;

  private _circleNodeRadius: number = 2.5;

  private _circleNodeFill: string = "#fff";

  private _arrowheadSize: number = 12;

  private _linkStroke: string = "#000";

  /**
   * get default stroke color of circle node
   * @returns {string}
   */
  public get circleNodeStroke(): string {
    return this._circleNodeStroke;
  }

  /**
   * set default stroke color of circle node
   * @param {string} value
   */
  public set circleNodeStroke(value: string) {
    this._circleNodeStroke = value;
  }

  /**
   * get default stroke width of circle node
   * @returns {number}
   */
  public get circleNodeStrokeWidth(): number {
    return this._circleNodeStrokeWidth;
  }

  /**
   * set default stroke width of circle node
   * @param {number} value
   */
  public set circleNodeStrokeWidth(value: number) {
    this._circleNodeStrokeWidth = value;
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
  public get circleNodeFill(): string {
    return this._circleNodeFill;
  }

  /**
   * set default fill color of circle node
   * @param {string} value
   */
  public set circleNodeFill(value: string) {
    this._circleNodeFill = value;
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
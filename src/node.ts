export class FlowchartyNode {
  private _nodePosition: {x: number, y: number} = {x: 0, y: 0};

  private readonly _nameLabelPosition: {dx: number, dy:number, textAnchor: "start"|"middle"|"end"};

  constructor(private _id: string, private _name: string, dx: number = -10, dy: number = -10, textAnchor: "start"|"middle"|"end" = "end") {
    this._nameLabelPosition = {dx: dx, dy: dy, textAnchor: textAnchor};
  }

  /**
   * get node id
   * @returns {string}
   */
  get id(): string {
    return this._id;
  }

  /**
   * get node name
   * @returns {string}
   */
  get name(): string {
    return this._name;
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

  /**
   * get name label position
   *  - dx: position diff of "x"
   *  - dy: position diff of "y"
   * @returns {object}
   */
  get nameLabelPosition() {
    return this._nameLabelPosition;
  }
}

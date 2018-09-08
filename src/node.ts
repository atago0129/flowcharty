export class FlowchartyNode {
  private readonly _id: string;

  private readonly _name: string;

  private _nodePosition: {x: number, y: number} = {x: 0, y: 0};

  private _nameLabelPosition: {dx: number, dy: number, textAnchor: string} = {dx: -10, dy: -10, textAnchor: "end"};

  constructor(data: {id: string, name: string}) {
    this._id = data.id;
    this._name = data.name;
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

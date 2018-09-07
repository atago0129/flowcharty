export class FlowchartyNode {
  private readonly _id: string;

  private readonly _name: string;

  private _nodePosition: {x: number, y: number} = {x: 0, y: 0};

  private _nameLabelPosition: {dx: number, dy: number, textAnchor: string} = {dx: -10, dy: -10, textAnchor: "end"};

  constructor(data: {id: string, name: string}) {
    this._id = data.id;
    this._name = data.name;
  }

  get id(): string {
    return this._id;
  }

  get name(): string {
    return this._name;
  }

  set x(x: number) {
    this._nodePosition.x = x;
  }

  get x(): number {
    return this._nodePosition.x;
  }

  set y(y: number) {
    this._nodePosition.y = y;
  }

  get y(): number {
    return this._nodePosition.y;
  }

  get nameLabelPosition() {
    return this._nameLabelPosition;
  }
}

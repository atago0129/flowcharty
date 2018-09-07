export class FlowchartyNode {
  private readonly _id: string;

  private readonly _name: string;

  private nodePosition: {x: number, y: number};

  private nameLabelPosition: {dx: number, dy: number, textAnchor: string} = {dx: -10, dy: -10, textAnchor: "end"};

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
    this.nodePosition.x = x;
  }

  get x(): number {
    return this.nodePosition.x;
  }

  set y(y: number) {
    this.nodePosition.y = y;
  }

  get y(): number {
    return this.nodePosition.y;
  }

  public getNameLabelPosition() {
    return this.nameLabelPosition;
  }
}

export class FlowchartyNode {
  private id: string;

  private name: string;

  private position: {dx: number, dy: number, textAnchor: string} = {dx: -10, dy: -10, textAnchor: "end"};

  constructor(data: {id: string, name: string}) {
    this.id = data.id;
    this.name = data.name;
  }

  public getId(): string {
    return this.id;
  }

  public getName(): string {
    return this.name;
  }

  public setPosition(position: {dx: number, dy: number, textAnchor: string}) {
    this.position = position;
  }

  public getPosition() {
    return this.position;
  }
}

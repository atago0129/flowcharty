export class FlowchartyLink {

  private sourceNodeId: string;

  private targetNodeId: string;

  private label?: {name: string, positionType?: string};

  private arrowType?: string;

  constructor(data: {source: string, target: string, label?: {name: string, positionType?: string}, arrowType?: string}) {
    this.sourceNodeId = data.source;
    this.targetNodeId = data.target;
    this.label = data.label;
    this.arrowType = data.arrowType;
  }

}
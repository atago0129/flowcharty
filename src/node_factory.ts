import {FlowchartySettings} from "./settings";
import {FlowchartyNode, FlowchartyNodeLabel, FlowchartyNodeStyle} from "./node";

export class FlowchartyNodeFactory {
  constructor(private _settings: FlowchartySettings) {
  }

  public create(node: {
    id: string,
    style?: {
      shape?: "circle"|"rect",
      width?: number,
      height?: number,
      rx?: number,
      ry?: number,
      strokeWidth?: number,
      strokeColor?: string,
      fillColor?: string
    },
    label: {
      name: string,
      dx?: number,
      dy?: number,
      textAnchor?: "start"|"middle"|"end",
      color?: string,
      fontSize?: string,
      fontFamily?: string
    }
  }) {
    return new FlowchartyNode(node.id, this.createStyle(node.style), this.createLabel(node.label));
  }

  private createStyle(nodeStyle: {
    shape?: "circle"|"rect",
    width?: number,
    height?: number,
    rx?: number,
    ry?: number,
    strokeWidth?: number,
    strokeColor?: string,
    fillColor?: string
  }|undefined): FlowchartyNodeStyle {
    let style: FlowchartyNodeStyle;
    if (nodeStyle) {
      style = new FlowchartyNodeStyle(
        nodeStyle.shape !== undefined ? nodeStyle.shape : this._settings.shape,
        nodeStyle.width !== undefined ? nodeStyle.width : this._settings.nodeWidth,
        nodeStyle.height !== undefined ? nodeStyle.height : this._settings.nodeHeight,
        nodeStyle.rx !== undefined ? nodeStyle.rx : this._settings.nodeRX,
        nodeStyle.ry !== undefined ? nodeStyle.ry : this._settings.nodeRY,
        nodeStyle.strokeColor !== undefined ? nodeStyle.strokeColor : this._settings.nodeStrokeColor,
        nodeStyle.strokeWidth !== undefined ? nodeStyle.strokeWidth : this._settings.nodeStrokeWidth,
        nodeStyle.fillColor !== undefined ? nodeStyle.fillColor : this._settings.nodeFillColor
      );
    } else {
      style = new FlowchartyNodeStyle(
        this._settings.shape,
        this._settings.nodeWidth,
        this._settings.nodeHeight,
        this._settings.nodeRX,
        this._settings.nodeRY,
        this._settings.nodeStrokeColor,
        this._settings.nodeStrokeWidth,
        this._settings.nodeFillColor
      );
    }
    return style;
  }

  private createLabel(nodeLabel: {
    name: string,
    dx?: number,
    dy?: number,
    textAnchor?: "start"|"middle"|"end",
    color?: string,
    fontSize?: string,
    fontFamily?: string
  }): FlowchartyNodeLabel {
    return new FlowchartyNodeLabel(
      nodeLabel.name,
      nodeLabel.dx !== undefined ? nodeLabel.dx : this._settings.nodeLabelDX,
      nodeLabel.dy !== undefined ? nodeLabel.dy : this._settings.nodeLabelDY,
      nodeLabel.textAnchor !== undefined ? nodeLabel.textAnchor : this._settings.nodeLabelTextAnchor,
      nodeLabel.color !== undefined ? nodeLabel.color : this._settings.nodeLabelColor,
      nodeLabel.fontSize !== undefined ? nodeLabel.fontSize : this._settings.nodeLabelFontSize,
      nodeLabel.fontFamily !== undefined ? nodeLabel.fontFamily : this._settings.nodeLabelFontFamily
    );
  }
}

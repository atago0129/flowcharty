import {FlowchartySettings} from "./settings";
import {FlowchartyLink, FlowchartyLinkLabel, FlowchartyLinkStyle} from "./link";

export class FlowchartyLinkFactory {
  constructor(private _settings: FlowchartySettings) {
  }

  public create(link: {
    source: string,
    target: string,
    style?: {
      connectionType?: "direct"|"marge",
      curveType?: "default"|"stepBefore"|"stepAfter",
      color?: string,
      strokeWidth?: number,
      headType?: "arrow"|"none",
      arrowheadSize?: number
    },
    label?: {
      name?: string,
      dx?: number,
      dy?: number,
      textAnchor?: "start"|"middle"|"end"|undefined,
      color?: string,
      fontSize?: string,
      fontFamily?: string
    }
  }): FlowchartyLink {
    return new FlowchartyLink(link.source, link.target, this.createStyle(link.style), this.createLabel(link.label));
  }

  private createStyle(linkStyle: {
    connectionType?: "direct"|"marge",
    curveType?: "default"|"stepBefore"|"stepAfter",
    color?: string,
    strokeWidth?: number,
    headType?: "arrow"|"none",
    arrowheadSize?: number
  }|undefined): FlowchartyLinkStyle {
    let style: FlowchartyLinkStyle;
    if (linkStyle) {
      style = new FlowchartyLinkStyle(
        linkStyle.connectionType !== undefined ? linkStyle.connectionType : this._settings.linkConnectionType,
        linkStyle.curveType !== undefined ? linkStyle.curveType : this._settings.linkCurveType,
        linkStyle.color !== undefined ? linkStyle.color : this._settings.linkColor,
        linkStyle.strokeWidth !== undefined ? linkStyle.strokeWidth : this._settings.linkWidth,
        linkStyle.headType !== undefined ? linkStyle.headType : this._settings.linkHeadType,
        linkStyle.arrowheadSize !== undefined ? linkStyle.arrowheadSize : this._settings.linkArrowheadSize
      );
    } else {
      style = new FlowchartyLinkStyle(
        this._settings.linkConnectionType,
        this._settings.linkCurveType,
        this._settings.linkColor,
        this._settings.linkWidth,
        this._settings.linkHeadType,
        this._settings.linkArrowheadSize
      );
    }
    return style;
  }

  private createLabel(linkLabel: {
    name?: string,
    dx?: number,
    dy?: number,
    textAnchor?: "start"|"middle"|"end"|undefined,
    color?: string,
    fontSize?: string,
    fontFamily?: string
  }|undefined): FlowchartyLinkLabel {
    let label: FlowchartyLinkLabel;
    if (linkLabel) {
      label = new FlowchartyLinkLabel(
        linkLabel.name !== undefined ? linkLabel.name : "",
        linkLabel.dx,
        linkLabel.dy,
        linkLabel.textAnchor,
        linkLabel.color !== undefined ? linkLabel.color : this._settings.linkLabelColor,
        linkLabel.fontSize !== undefined ? linkLabel.fontSize : this._settings.linkLabelFontSize,
        linkLabel.fontFamily !== undefined ? linkLabel.fontFamily : this._settings.linkLabelFontFamily
      );
    } else {
      label = new FlowchartyLinkLabel(
        "",
        this._settings.linkLabelDX,
        this._settings.linkLabelDY,
        this._settings.linkLabelTextAnchor,
        this._settings.linkLabelColor,
        this._settings.linkLabelFontSize,
        this._settings.linkLabelFontFamily
      );
    }
    return label;
  }
}

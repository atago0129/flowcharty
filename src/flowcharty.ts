import "d3";
import {FlowchartyNode} from "./node";
import {FlowchartyMap} from "./map";
import {FlowchartyLink} from "./link";
import {FlowchartySettings} from "./settings";

export class Flowcharty {

  private svg: d3.Selection;

  private g: d3.Selection;

  private settings: FlowchartySettings;

  private nodes: FlowchartyNode[];

  private map: FlowchartyMap;

  private links: FlowchartyLink[];

  constructor(target: string|d3.Selection) {
    if (typeof target === "string") {
      this.svg = d3.select(target);
    } else {
      this.svg = target;
    }
    this.settings = new FlowchartySettings();
  }

  private init() {
    this.g = this.svg.append("g");
    // init arrowhead
    this.svg.append("defs").append("marker")
      .attr("id", "arrowhead")
      .attr("refX", this.settings.arrowHeadSize + this.settings.circleNodeStrokeWidth + this.settings.circleNodeRadius)
      .attr("refY", this.settings.arrowHeadSize / 2)
      .attr("markerWidth", this.settings.arrowHeadSize)
      .attr("markerHeight", this.settings.arrowHeadSize)
      .attr("orient", "auto")
      .append("path")
      .attr("d", ["M", "0,0", "V", this.settings.arrowHeadSize, "L", [this.settings.arrowHeadSize, this.settings.arrowHeadSize /2].join(","), "Z"].join(" "))
      .attr("fill", "#000");
    this.svg.append("defs").append("marker")
      .attr("id", "arrowhead_for_marge")
      .attr("refX", this.settings.arrowHeadSize)
      .attr("refY", this.settings.arrowHeadSize / 2)
      .attr("markerWidth", this.settings.arrowHeadSize)
      .attr("markerHeight", this.settings.arrowHeadSize)
      .attr("orient", "auto")
      .append("path")
      .attr("d", ["M", "0,0", "V", this.settings.arrowHeadSize, "L", [this.settings.arrowHeadSize, this.settings.arrowHeadSize /2].join(","), "Z"].join(" "))
      .attr("fill", "#000");
  }

  public render(data: {
      nodes: {id: string, name: string}[],
      map: string[][],
      links: {source: string, target: string, label?: {name: string, positionType?: string}, arrowType?: string}[]
  }): void {
    this.nodes = data.nodes.map((nodeData) => (new FlowchartyNode(nodeData)));
    this.links = data.links.map((linkData) => (new FlowchartyLink(linkData)));
    this.parseMap(data.map);
    this.renderNodes();
  }

  private getNodeById(id: string): FlowchartyNode|null {
    return this.nodes.filter((node) => (node.getId() === id)).pop() || null;
  }

  private parseMap(map: string[][]): void {
    this.map = new FlowchartyMap(map.map((nodeIds) => (nodeIds.map((nodeId) => (this.getNodeById(nodeId))))));
  }

  private renderNodes(): void {
    let widthInterval: number = this.svg.attr("width") / this.map.getColumnCount();
    let heightInterval: number = this.svg.attr("height") / this.map.getRowCount();

    this.map.getRows().map((row, rowIndex) => {
      let node = this.g.selectAll(".node").data(row);
      let enter = node.enter()
        .append("svg")
        .style("overflow", "visible")
        .attr("x", (d, i) => (widthInterval / 2 + widthInterval * i))
        .attr("y", (heightInterval / 2 + heightInterval * rowIndex))
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("class", (d) => (d === null ? "_should_remove_element" : ""));
      enter.append("circle")
        .attr("r", this.settings.circleNodeRadius)
        .attr("fill", this.settings.circleNodeFill)
        .attr("stroke", this.settings.circleNodeStroke)
        .attr("stroke-width", this.settings.circleNodeStrokeWidth);
      enter.append("text")
        .attr("dx", (d) => (d.getPosition().dx))
        .attr("dy", (d) => (d.getPosition().dy))
        .attr("text-anchor", (d) => (d.getPosition().textAnchor))
        .text((d) => (d.getName()));
    })
  }

  private renderLinks() {
    // TODO implements
  }

}
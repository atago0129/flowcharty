import {FlowchartyElements} from "./elements";
import {FlowchartySettings} from "./settings";

import * as d3 from "d3";

export class FlowchartyCanvas {

  private _g: d3.Selection<d3.BaseType, any, d3.BaseType, any>|undefined;

  private _widthInterval: number = 0;

  private _heightInterval: number = 0;

  /**
   * @param {d3.Selection} _svg
   * @param {FlowchartySettings} _settings
   */
  constructor(private _svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>, private _settings: FlowchartySettings) {
  }

  /**
   * render flowchart
   * @param {FlowchartyElements} elements
   */
  public render(elements: FlowchartyElements) {
    if (this._g !== undefined) {
      this._g.remove();
    }
    this._g = this._svg.append("g");
    this.init();
    this.renderNodes(elements);
    this.renderLinks(elements);
    d3.selectAll("._should_remove_element").remove();
  }

  /**
   * initialize
   *  - init arrowhead
   */
  private init() {
    // init arrowhead
    this._g.append("defs").append("marker")
      .attr("id", "arrowhead")
      .attr("refX", this._settings.arrowheadSize + this._settings.circleNodeStrokeWidth + this._settings.circleNodeRadius)
      .attr("refY", this._settings.arrowheadSize / 2)
      .attr("markerWidth", this._settings.arrowheadSize)
      .attr("markerHeight", this._settings.arrowheadSize)
      .attr("orient", "auto")
      .append("path")
      .attr("d", ["M", "0,0", "V", this._settings.arrowheadSize, "L", [this._settings.arrowheadSize, this._settings.arrowheadSize /2].join(","), "Z"].join(" "))
      .attr("fill", "#000");
    this._g.append("defs").append("marker")
      .attr("id", "arrowhead_for_marge")
      .attr("refX", this._settings.arrowheadSize)
      .attr("refY", this._settings.arrowheadSize / 2)
      .attr("markerWidth", this._settings.arrowheadSize)
      .attr("markerHeight", this._settings.arrowheadSize)
      .attr("orient", "auto")
      .append("path")
      .attr("d", ["M", "0,0", "V", this._settings.arrowheadSize, "L", [this._settings.arrowheadSize, this._settings.arrowheadSize /2].join(","), "Z"].join(" "))
      .attr("fill", "#000");
  }

  /**
   * render nodes by map
   * @param {FlowchartyElements} elements
   */
  private renderNodes(elements: FlowchartyElements) {
    this._widthInterval = Number(this._svg.attr("width")) / elements.map.getColumnCount();
    this._heightInterval = Number(this._svg.attr("height")) / elements.map.getRowCount();
    elements.map.getRows().map((row, rowIndex) => {
      let node = this._g.selectAll(".node").data(row);
      let enter = node.enter()
        .append("svg")
        .style("overflow", "visible")
        .attr("x", (d, i) => {
          if (d === null) return 0;
          d.x = this._widthInterval / 2 + this._widthInterval * i;
          return d.x;
        })
        .attr("y", (d) => {
          if (d === null) return 0;
          d.y = this._heightInterval / 2 + this._heightInterval * rowIndex;
          return d.y;
        })
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("class", (d) => (d.id === "" ? "_should_remove_element" : ""));
      enter.append("circle")
        .attr("r", this._settings.circleNodeRadius)
        .attr("fill", this._settings.circleNodeFill)
        .attr("stroke", this._settings.circleNodeStroke)
        .attr("stroke-width", this._settings.circleNodeStrokeWidth);
      enter.append("text")
        .attr("dx", (d) => (d.nameLabelPosition.dx))
        .attr("dy", (d) => (d.nameLabelPosition.dy))
        .attr("text-anchor", (d) => (d.nameLabelPosition.textAnchor))
        .text((d) => (d.name));
    })
  }

  /**
   * render link path by map & links
   * @param {FlowchartyElements} elements
   */
  private renderLinks(elements: FlowchartyElements) {
    let _this = this;
    let link = this._g.selectAll(".link").data(elements.links).attr("class", "link");
    let enter = link.enter().append("g");

    enter.append("path")
      .style("fill", "none")
      .style("stroke", this._settings.linkStroke)
      .attr("marker-end", (d) => {
        if (d.linkType === "marge") {
          return "url(#arrowhead_for_marge)";
        } else {
          return "url(#arrowhead)";
        }
      })
      .attr("d", (d) => {
        let margin = d.linkType === "marge" ? this._heightInterval / 5 : 0;
        let lineData = [
          {x: d.sourceNode.x, y: d.sourceNode.y},
          {x: d.targetNode.x, y: d.targetNode.y - margin},
        ];
        if (d.sourceNode.x === d.targetNode.x || d.sourceNode.y === d.targetNode.y) {
          return _this.line(lineData);
        } else if (d.sourceNode.x > d.targetNode.x) {
          return _this.lineStepBefore(lineData);
        } else {
          return _this.lineStepAfter(lineData);
        }
      })
      .attr("stroke-dasharray", function(d) {
        if (!(this instanceof SVGPathElement)) return "";
        if (d.linkType === "marge") {
          return [0, _this._settings.circleNodeRadius + _this._settings.circleNodeStrokeWidth, this.getTotalLength()].join(" ");
        } else {
          return [0, _this._settings.circleNodeRadius + _this._settings.circleNodeStrokeWidth, this.getTotalLength() - (_this._settings.circleNodeRadius + _this._settings.circleNodeStrokeWidth + _this._settings.arrowheadSize)].join(" ");
        }
      })
      .attr("stroke-dashoffset", 0);
    enter.append("text")
      .attr("class", (d) => (d.label.name === "" ? "_should_remove_element" : ""))
      .text((d) => (d.label.name))
      .attr("x", (d) => {
        if (d.sourceNode.x === d.targetNode.x) {
          return d.sourceNode.x - (_this._settings.circleNodeRadius * 2.5 + _this._settings.circleNodeStrokeWidth);
        } else {
          return d.sourceNode.x + (_this._settings.circleNodeRadius * 4 + _this._settings.circleNodeStrokeWidth);
        }
      })
      .attr("y", (d) => {
        if (d.sourceNode.x === d.targetNode.x) {
          return d.sourceNode.y + (_this._settings.circleNodeRadius * 5 + _this._settings.circleNodeStrokeWidth);
        } else {
          return d.sourceNode.y - (_this._settings.circleNodeRadius + _this._settings.circleNodeStrokeWidth);
        }
      })
      .attr("text-anchor", (d) => (d.sourceNode.x === d.targetNode.x ? "end" : "start"));
  }

  private line: d3.Line<{x: number, y:number}> = d3.line<{x: number, y:number}>()
    .x((d: {x: number, y:number}) => (d.x))
    .y((d: {x: number, y:number}) => (d.y));

  private lineStepBefore: d3.Line<{x: number, y:number}> = d3.line<{x: number, y:number}>()
      .curve(d3.curveStepBefore)
      .x((d: {x: number, y:number}) => (d.x))
      .y((d: {x: number, y:number}) => (d.y));

  private lineStepAfter: d3.Line<{x: number, y:number}> = d3.line<{x: number, y:number}>()
    .curve(d3.curveStepAfter)
    .x((d: {x: number, y:number}) => (d.x))
    .y((d: {x: number, y:number}) => (d.y));

}

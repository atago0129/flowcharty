import * as d3 from "d3";
import {FlowchartyNode} from "./node";
import {FlowchartyLink} from "./link";
import {FlowchartyElements} from "./elements";

export class FlowchartyCanvas {

  private _g: d3.Selection<d3.BaseType, any, d3.BaseType, any>|undefined;

  private _widthInterval: number = 0;

  private _heightInterval: number = 0;

  private _arrowheadIndex: number = 0;

  /**
   * @param {d3.Selection} _svg
   * @param {FlowchartyElements} _elements
   */
  constructor(
    private _svg: d3.Selection<d3.BaseType, any, d3.BaseType, any>,
    private _elements: FlowchartyElements,
    ) {
  }

  /**
   * render flowchart
   */
  public render() {
    if (this._g !== undefined) {
      this._g.remove();
    }
    this._g = this._svg.append("g").classed("flowchartyCanvas", true);
    this.renderNodes();
    this.renderLinks();
    d3.selectAll("._should_remove_element").remove();
  }

  /**
   * render nodes by map
   */
  private renderNodes() {
    const _this = this;
    this._widthInterval = Number(this._svg.attr("width")) / this._elements.map.getColumnCount();
    this._heightInterval = Number(this._svg.attr("height")) / this._elements.map.getRowCount();
    this._elements.map.getRows().map((row, rowIndex) => {
      const node = this._g.selectAll(".node").data(row);
      const enter = node.enter()
        .append("svg")
        .style("overflow", "visible")
        .attr("x", (d, i) => {
          if (d === null) return 0;
          this._elements.getNodeById(d).x = this._widthInterval / 2 + this._widthInterval * i;
          return this._elements.getNodeById(d).x;
        })
        .attr("y", d => {
          if (d === null) return 0;
          this._elements.getNodeById(d).y = this._heightInterval / 2 + this._heightInterval * rowIndex;
          return this._elements.getNodeById(d).y;
        })
        .attr("width", "100%")
        .attr("height", "100%")
        .attr("class", d => this._elements.getNodeById(d).id === "" ? "_should_remove_element" : "");
      enter.append("ellipse")
        .attr("class", d => this._elements.getNodeById(d).style.shape !== "circle" ? "_should_remove_element" : "")
        .attr("rx", d => this._elements.getNodeById(d).style.rx)
        .attr("ry", d => this._elements.getNodeById(d).style.ry)
        .attr("fill", d => this._elements.getNodeById(d).style.fillColor)
        .attr("stroke", d => this._elements.getNodeById(d).style.strokeColor)
        .attr("stroke-width", d => this._elements.getNodeById(d).style.strokeWidth);
      enter.append("rect")
        .attr("class", d => (this._elements.getNodeById(d).style.shape !== "rect" ? "_should_remove_element" : ""))
        .attr("width", d => this._elements.getNodeById(d).style.width)
        .attr("height", d => this._elements.getNodeById(d).style.height)
        .attr("rx", d => this._elements.getNodeById(d).style.rx)
        .attr("ry", d => this._elements.getNodeById(d).style.ry)
        .attr("x", d => - (this._elements.getNodeById(d).style.width / 2))
        .attr("y", d => - (this._elements.getNodeById(d).style.height / 2))
        .attr("fill", d => this._elements.getNodeById(d).style.fillColor)
        .attr("stroke", d => this._elements.getNodeById(d).style.strokeColor)
        .attr("stroke-width", d => this._elements.getNodeById(d).style.strokeWidth);
      enter.html(function (d) {
        return d3.select(this).html() + _this.getTextElementsWithLineBreak(_this._elements.getNodeById(d));
      });
    })
  }

  /**
   * get <text> elements for line break
   * @param {FlowchartyNode} node
   * @returns {string}
   */
  private getTextElementsWithLineBreak(node: FlowchartyNode): string {
    let html = "";
    const textArray = node.label.name.split(/\n/);
    textArray.reverse().forEach((t, i) => {
      html += `<text font-size="${node.label.fontSize}" fill="${node.label.color}" dx="${node.label.dx}" dy="${node.label.dy}" text-anchor="${node.label.textAnchor}" dominant-baseline="central" y="-${i}em">${t}</text>`;
    });
    return html;
  }

  /**
   * render link path by map & links
   */
  private renderLinks() {
    const _this = this;
    const link = this._g.selectAll(".link").data(this._elements.links).attr("class", "link");
    const enter = link.enter().append("g");

    enter.append("path")
      .style("fill", "none")
      .style("stroke", d => d.style.color)
      .style("stroke-width", d => d.style.strokeWidth)
      .attr("marker-end", d => d.style.headType === "arrow" ? `url(#${this.generateArrowhead(d)})` : "")
      .attr("d", d => {
        const margin = d.style.connectionType === "marge" ? this._heightInterval / 5 : 0;
        const lineData = [
          {x: this._elements.getNodeById(d.sourceNodeId).x, y: this._elements.getNodeById(d.sourceNodeId).y},
          {x: this._elements.getNodeById(d.targetNodeId).x, y: this._elements.getNodeById(d.targetNodeId).y - margin},
        ];
        return _this.decideLineType(d)(lineData);
      })
      .attr("stroke-dasharray", function(d) {
        if (!(this instanceof SVGPathElement)) return "";
        if (d.style.connectionType === "marge") {
          return [
            0,
            _this.decideLinkMargin(d, "from") + _this._elements.getNodeById(d.sourceNodeId).style.strokeWidth / 2,
            this.getTotalLength() - ((d.style.headType === "arrow" ? d.style.arrowHeadSize : 0) + _this._elements.getNodeById(d.sourceNodeId).style.strokeWidth / 2),
            this.getTotalLength()
          ].join(" ");
        } else {
          return [
            0,
            _this.decideLinkMargin(d, "from") + _this._elements.getNodeById(d.sourceNodeId).style.strokeWidth / 2,
            this.getTotalLength() - (_this.decideLinkMargin(d, "from") + _this.decideLinkMargin(d, "to") + (d.style.headType === "arrow" ? d.style.arrowHeadSize : 0) + _this._elements.getNodeById(d.sourceNodeId).style.strokeWidth / 2),
            this.getTotalLength()
          ].join(" ");
        }
      })
      .attr("stroke-dashoffset", 0);
    enter.append("text")
      .attr("class", d => (d.label.name === "" ? "_should_remove_element" : ""))
      .text(d => d.label.name)
      .style("fill", d => d.label.color)
      .attr("font-size", d => d.label.fontSize)
      .attr("x", d => this._elements.getNodeById(d.sourceNodeId).x)
      .attr("y", d => this._elements.getNodeById(d.sourceNodeId).y)
      .attr("dx", d => {
        if (d.label.dx) return d.label.dx;
        const source = this._elements.getNodeById(d.sourceNodeId);
        const target = this._elements.getNodeById(d.targetNodeId);
        const curveType = this.decideCurveType(d);
        if (source.x === target.x || curveType === "stepBefore") {
          return -10;
        }
        return 20;
      })
      .attr("dy", d => {
        if (d.label.dy) return d.label.dy;
        const source = this._elements.getNodeById(d.sourceNodeId);
        const target = this._elements.getNodeById(d.targetNodeId);
        const curveType = this.decideCurveType(d);
        if (source.x === target.x || curveType === "stepBefore") {
          return 20;
        }
        return -10;
      })
      .attr("text-anchor", d => {
        if (d.label.textAnchor !== undefined) {
          return d.label.textAnchor;
        }
        const source = this._elements.getNodeById(d.sourceNodeId);
        const target = this._elements.getNodeById(d.targetNodeId);
        const curveType = this.decideCurveType(d);
        if (source.x === target.x || curveType === "stepBefore") {
          return "end";
        }
        return "start";
      });
  }

  /**
   * generate arrowhead of link, and get it's DOM id
   * @param {FlowchartyLink} link
   * @returns {string}
   */
  private generateArrowhead(link: FlowchartyLink): string {
    const elementId = `arrowhead_${this._arrowheadIndex++}`;
    this._g.append("defs").append("marker")
      .attr("id", elementId)
      .attr("refX", (link.style.connectionType === "direct" ? this.decideLinkMargin(link, "to") : 0) / link.style.strokeWidth + link.style.arrowHeadSize)
      .attr("refY", link.style.arrowHeadSize / 2)
      .attr("markerUnits", "strokeWidth")
      .attr("markerWidth", link.style.arrowHeadSize)
      .attr("markerHeight", link.style.arrowHeadSize)
      .attr("orient", "auto")
      .append("path")
      .attr("d", ["M", "0,0", "V", link.style.arrowHeadSize, "L", [link.style.arrowHeadSize, link.style.arrowHeadSize / 2].join(","), "Z"].join(" "))
      .attr("fill", link.style.color);
    return elementId;
  }

  /**
   * calculate link margin from edge type, node position and link curve type
   * @param {FlowchartyLink} link
   * @param {"from" | "to"} edgeType
   * @returns {number}
   */
  private decideLinkMargin(link: FlowchartyLink, edgeType: "from"|"to") {
    const source: FlowchartyNode = this._elements.getNodeById(link.sourceNodeId);
    const target: FlowchartyNode = this._elements.getNodeById(link.targetNodeId);
    const edge = edgeType === "to" ? target : source;
    if (source.x === target.x) {
      return edge.style.verticalLength / 2;
    }
    if (source.y === target.y) {
      return edge.style.horizontalLength / 2;
    }
    if (this.decideCurveType(link) === "stepAfter") {
      if (edgeType === "to") {
        return edge.style.verticalLength / 2;
      } else {
        return edge.style.horizontalLength / 2;
      }
    } else {
      if (edgeType === "to") {
        return edge.style.horizontalLength / 2;
      } else {
        return edge.style.verticalLength / 2;
      }
    }
  }

  /**
   * @param link
   * @returns "strait"|"stepBefore"|"stepAfter"
   */
  private decideCurveType(link: FlowchartyLink): "strait"|"stepBefore"|"stepAfter" {
    const source: FlowchartyNode = this._elements.getNodeById(link.sourceNodeId);
    const target: FlowchartyNode = this._elements.getNodeById(link.targetNodeId);
    if (link.style.curveType === "default") {
      if (source.x === target.x || source.y === target.y) {
        return "strait";
      } else if (source.x > target.x) {
        return "stepBefore";
      } else {
        return "stepAfter";
      }
    }
    return link.style.curveType;
  }

  /**
   * decide link line type from curveType
   * @param {FlowchartyLink} link
   * @returns {function}
   */
  private decideLineType(link: FlowchartyLink) {
    const curveType = this.decideCurveType(link);
    switch (curveType) {
      case "stepBefore":
        return this.lineStepBefore;
      case "stepAfter":
        return this.lineStepAfter;
      case "strait":
      default:
        return this.lineStrait;
    }
  }

  private lineStrait: d3.Line<{x: number, y:number}> = d3.line<{x: number, y:number}>()
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

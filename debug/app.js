import Flowcharty from "../src/flowcharty";
import * as d3 from "d3";

var data = {
  nodes: [
    {id: 'start', label: {name: 'Which flowchart library should you use?'}, style: {fillColor: '#fff'}},
    {id: 'manually', label: {name: 'You want to draw manually?'}},
    {id: 'drawIo', label: {name: '<a href="https://www.draw.io/" target="_blank">draw.io</a>', dx: 0, dy: 0, textAnchor: 'middle'}, style: {shape: "rect", width: 100, height: 25, rx: 3, ry: 3, fillColor: 'rgb(241, 136, 8)', strokeColor: 'rgb(199, 113, 7)'}},
    {id: 'formal', label: {name: 'You want to draw a relatively formal chart?'}},
    {id: 'anotherChart', label: {name: 'You want to use not only for flowchart \nbut also another UML?'}},
    {id: 'mermaid', label: {name: '<a href="https://mermaidjs.github.io/" target="_blank">mermaid</a>', dx: 0, dy: 0, textAnchor: 'middle'}, style: {shape: "rect", width: 100, height: 25, rx: 3, ry: 3, fillColor: '#8dcf7c', strokeColor: '#72a964'}},
    {id: 'module', label: {name: 'You want to use as \n"npm" package.', dx: 10, textAnchor: 'start'}},
    {id: 'flowchartJS', label: {name: '<a href="http://flowchart.js.org/" target="_blank">flowchart.js</a>', dx: 0, dy: 0, textAnchor: 'middle'}, style: {shape: "rect", width: 100, height: 25, rx: 3, ry: 3, fillColor: '#2e7bcf', strokeColor: '#275da1'}},
    {id: 'dummyNode1', label: {name: ''}, style: {shape: 'nothing'}},
    {id: 'dummyNode2', label: {name: ''}, style: {shape: 'nothing'}},
    {id: 'bigDiamond', label: {name: 'You can avoid using a big diamond\nfor long sentence condition.', color: '#fff', dx: 0, dy: 5, textAnchor: 'middle'}, style: {shape: "rect", width: 230, height: 50, rx: 3, ry: 3, fillColor: '#706CAA', strokeColor: '#7152aa'}},
    {id: 'nodePosition', label: {name: 'You can put nodes to in a position you like.', color: '#fff', dx: 0, dy: 0, textAnchor: 'middle'}, style: {shape: "rect", width: 280, height: 25, rx: 3, ry: 3, fillColor: '#706CAA', strokeColor: '#7152aa'}},
    {id: 'decorate', label: {name: 'You can decorate nodes and links.', color: '#fff', dx: 0, dy: 0, textAnchor: 'middle'}, style: {shape: "rect", width: 230, height: 25, rx: 3, ry: 3, fillColor: '#706CAA', strokeColor: '#7152aa'}},
    {id: 'maintenance', label: {name: 'It is not difficult for you to maintain the chart.', color: '#fff', dx: 0, dy: 0, textAnchor: 'middle'}, style: {shape: "rect", width: 290, height: 25, rx: 3, ry: 3, fillColor: '#706CAA', strokeColor: '#7152aa'}},
    {id: 'flowcharty', label: {name: 'flowcharty', fontSize: '20px', color: '#fff', dx: 0, dy: 0, textAnchor: 'middle'}, style: {shape: "rect", width: 150, height: 40, rx: 3, ry: 3, fillColor: '#cf634b', strokeColor: '#a7533e'}},
  ],
  map: [
    ['', 'start'],
    ['', 'manually', 'drawIo'],
    ['', 'formal'],
    ['', '', '', 'anotherChart'],
    ['', 'dummyNode1'],
    ['', 'bigDiamond'],
    ['', 'nodePosition', 'dummyNode2'],
    ['', 'decorate', '', 'module'],
    ['', 'maintenance'],
    ['', 'flowcharty', '', 'flowchartJS', 'mermaid'],
  ],
  links: [
    {source: 'start', target: 'manually'},
    {source: 'manually', target: 'drawIo', label: {name: 'yes'}},
    {source: 'manually', target: 'formal', label: {name: 'no'}},
    {source: 'formal', target: 'anotherChart', label: {name: 'yes'}},
    {source: 'anotherChart', target: 'module', label: {name: 'no'}},
    {source: 'module', target: 'flowchartJS', label: {name: 'no', dx: 10, textAnchor: 'start'}},
    {source: 'module', target: 'dummyNode2', label: {name: 'yes (and compromise formally)', dx: -20, dy: 15, textAnchor: 'end', color: '#afafaf'}, style: {headType: 'none', curveType: 'stepAfter', color: '#afafaf'}},
    {source: 'dummyNode2', target: 'dummyNode1', style: {color: '#afafaf'}},
    {source: 'anotherChart', target: 'mermaid', label: {name: 'yes'}},
    {source: 'formal', target: 'bigDiamond', label: {name: 'no'}},
    {source: 'bigDiamond', target: 'nodePosition'},
    {source: 'nodePosition', target: 'decorate'},
    {source: 'decorate', target: 'maintenance'},
    {source: 'maintenance', target: 'flowcharty', style: {strokeWidth: 4, color: '#cf3933'}}
  ]
};

var flowcharty = new Flowcharty();
flowcharty.nodeRX = 7;
flowcharty.nodeRY = 7;
flowcharty.nodeFillColor = "#000";
flowcharty.render(d3.select("svg"), data);

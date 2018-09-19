# flowcharty
flowcharty is a JavaScript library for drawing flowchart.

This depends on [d3.js](https://d3js.org/)
 
![image](https://user-images.githubusercontent.com/998831/45760819-e6851400-bc65-11e8-9af7-150d4fcda07c.png)

## Debug
`npm run debug`

## Build
`npm run build`

## Usage
simple example

```javascript
  var data = {
    nodes: [
      {id: 'start', label: {name: 'Which flowchart library\nshould you use?'}},
      {id: 'manually', label: {name: 'You want to \ndraw manually?'}},
      {id: 'drawIo', label: {name: 'draw.io'}},
      {id: 'formal', label: {name: 'You want to draw \na relatively formal chart?'}},
      {id: 'anotherChart', label: {name: 'You want to use not only for flowchart \nbut also another UML?'}},
      {id: 'mermaid', label: {name: 'mermaid'}},
      {id: 'flowchartJS', label: {name: 'flowchart.js'}},
      {id: 'flowcharty', label: {name: 'flowcharty'}},
    ],
    map: [
      ['start'],
      ['manually', 'drawIo'],
      ['formal'],
      ['', 'anotherChart'],
      ['flowcharty', 'flowchartJS', 'mermaid'],
    ],
    links: [
      {source: 'start', target: 'manually'},
      {source: 'manually', target: 'drawIo', label: {name: 'yes'}},
      {source: 'manually', target: 'formal', label: {name: 'no'}},
      {source: 'formal', target: 'anotherChart', label: {name: 'yes'}},
      {source: 'anotherChart', target: 'flowchartJS', label: {name: 'no'}},
      {source: 'anotherChart', target: 'mermaid', label: {name: 'yes'}},
      {source: 'formal', target: 'flowcharty', label: {name: 'no'}}
    ]
  };

  var flowcharty = new Flowcharty.default();
  flowcharty.render(d3.select("svg"), data);
```

![image](https://user-images.githubusercontent.com/998831/45761803-ec7bf480-bc67-11e8-9484-ac2a17107c02.png)

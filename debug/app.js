import Flowcharty from "../src/flowcharty";
import * as d3 from "d3";

var data = {
  nodes: [
    {id: 'start', label: {name: 'スタート'}},
    {id: 'hoge', label: {name: '改行にも\n対応したよ', color: '#bb036a'}, style: {width: 20, height: 20, strokeWidth: 5, fillColor: "#3e3e3e"}},
    {id: 'fuga', label: {name: 'ふが'}},
    {id: 'piyo', label: {name: 'ぴよ'}},
    {id: 'hogehoge', label: {name: 'ほげほげ', dx: 0, dy: 0, textAnchor: "middle"}, style: {shape: "rect", width: 100, height: 50, fillColor: "#a5deab", strokeWidth: 6}},
    {id: 'piyopiyo', label: {name: 'ぴよぴよ'}},
    {id: 'goal', label: {name: 'ゴール'}}
  ],
  map: [
    ['start'],
    ['hoge'],
    ['piyo', '', 'fuga'],
    ['', 'piyopiyo'],
    ['hogehoge'],
    ['goal']
  ],
  links: [
    {source: 'start', target: 'hoge'},
    {source: 'hoge', target: 'fuga', label: {name: 'no'}},
    {source: 'hoge', target: 'piyo', label: {name: 'yes', color: '#bb036a'}, style: {color: '#bb036a'}},
    {source: 'piyo', target: 'piyopiyo', label: {name: 'yes'}},
    {source: 'piyo', target: 'hogehoge', label: {name: 'no'}},
    {source: 'fuga', target: 'goal', style: {connectionType: 'marge'}},
    {source: 'piyopiyo', target: 'hogehoge', style: {strokeWidth: 4}},
    {source: 'hogehoge', target: 'goal', style: {color: "#09f384"}}
  ]
};

var flowcharty = new Flowcharty();
flowcharty.render(d3.select("svg"), data);

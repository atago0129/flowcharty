import Flowcharty from "../src/flowcharty";
import * as d3 from "d3";

var data = {
  nodes: [
    {id: 'start', label: {name: 'スタート'}},
    {id: 'hoge', label: {name: '改行にも\n対応したよ'}},
    {id: 'fuga', label: {name: 'ふが'}},
    {id: 'piyo', label: {name: 'ぴよ'}},
    {id: 'hogehoge', label: {name: 'ほげほげ'}},
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
    {source: 'hoge', target: 'piyo', label: {name: 'yes'}},
    {source: 'piyo', target: 'piyopiyo', label: {name: 'yes'}},
    {source: 'piyo', target: 'hogehoge', label: {name: 'no'}},
    {source: 'fuga', target: 'goal', style: {connectionType: 'marge'}},
    {source: 'piyopiyo', target: 'hogehoge', style: {connectionType: 'marge'}},
    {source: 'hogehoge', target: 'goal'}
  ]
};

var flowcharty = new Flowcharty();
flowcharty.render(d3.select("svg"), data);

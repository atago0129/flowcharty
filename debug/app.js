import {Flowcharty} from "../src/flowcharty";
import * as d3 from "d3";

var data = {
  nodes: [
    {id: 'start', name: 'スタート'},
    {id: 'hoge', name: 'ほげ'},
    {id: 'fuga', name: 'ふが'},
    {id: 'piyo', name: 'ぴよ'},
    {id: 'hogehoge', name: 'ほげほげ'},
    {id: 'piyopiyo', name: 'ぴよぴよ'},
    {id: 'goal', name: 'ゴール'}
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
    {source: 'fuga', target: 'goal', linkType: 'marge'},
    {source: 'piyopiyo', target: 'hogehoge', linkType: 'marge'},
    {source: 'hogehoge', target: 'goal'}
  ]
};

var hogehoge = new Flowcharty(d3.select("svg"));
hogehoge.render(data);
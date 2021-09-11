'use strict';

let postcss = require('postcss');
let fs = require('fs');
let path = require('path');
let fontFile = fs.readFileSync(path.resolve(__dirname, '../../theme/default/src/icon.scss'), 'utf8');
let nodes = postcss.parse(fontFile).nodes;
let classList = [];
let xClassList = [];

nodes.forEach((node) => {
  let selector = node.selector || '';
  let reg = new RegExp(/\.kui-icon-([^:]+):before/);
  let arr = selector.match(reg);

  if (arr && arr[1]) {
    let xReg = new RegExp(/x-([^:]+)/);
    if (xReg.test(arr[1])) {
      xClassList.push(arr[1]);
    } else {
      classList.push(arr[1]);
    }
  }
});
classList.reverse(); // 希望按 css 文件顺序倒序排列

fs.writeFile(path.resolve(__dirname, '../../examples/icon.json'), JSON.stringify({
  classList,
  xClassList
}), () => {
});

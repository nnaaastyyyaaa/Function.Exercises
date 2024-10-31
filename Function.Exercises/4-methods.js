'use strict';

const obj = {
  m1: (x) => x,
  m2: (x, y) => [x, y],
  m3(x, y, z) {
    return [x, y, z];
  }
};
const methods = (iface) => {
  const names = [];
  for (const name in iface) {
    if (typeof iface[name] === 'function') {
      names.push([name, iface[name].length]);
    }
  }
  return names;
};
console.log(JSON.stringify(methods(obj)));

module.exports = { methods };

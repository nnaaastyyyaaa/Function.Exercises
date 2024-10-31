'use strict';

function ipToInt(ip = '127.0.0.1') {
  return ip.split('.')
    .map(Number)
    .reduce((ac, byte, index) => ac + (byte << ((3 - index) * 8)), 0);
}
console.log(ipToInt());

module.exports = { ipToInt };

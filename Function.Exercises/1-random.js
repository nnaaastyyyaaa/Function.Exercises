'use strict';

const random = (min, max) => {
  if (max === undefined) {
    max = min;
    min = 0;
  }
  return Math.floor(Math.random() * (max - min) + min);
};
console.log(random(40, 45));
console.log(random(15));

module.exports = { random };

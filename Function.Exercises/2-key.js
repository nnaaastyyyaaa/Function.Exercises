'use strict';

const characters = 'fyugyou59854y77854th8543w';
const generateKey = (len, possible) => {
  let b = '';
  for (let i = 0; i < len; i++) {
    const lenOfPossible = possible.length;
    const j = Math.floor(Math.random() * lenOfPossible);
    b += possible[j];
  }
  return b;
};
const key = generateKey(15, characters);
console.log(key);

module.exports = { generateKey };

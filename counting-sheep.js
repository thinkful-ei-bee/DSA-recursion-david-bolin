'use strict';

function countSheep(num) {

  if (num === 0) {
    console.log('All sheep jumped over the fence');
    return;
  }

  console.log(`${num}: Another sheeps jumps over the fence`);
  countSheep(num - 1);
}

'use strict';

function seq(num) {

  if (num === 1) {
    return [1];
  }

  if (num === 2) {
    return [1, 1];
  }

  const sequence = [...seq(num - 1), seq(num - 1)[num - 3] + seq(num - 1)[num - 2]];
  return sequence;
}

function fib(num) {
  console.log(seq(num));
}


'use strict';

function reverseStr(str) {
  
  if (!str.length) {
    return '';
  }

  return reverseStr(str.slice(1)) + str[0];
}

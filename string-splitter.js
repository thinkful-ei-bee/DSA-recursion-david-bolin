'use strict';

function splitter(str) {

  if (str === '') {
    return '';
  }

  if (str[0] === '/') {
    return splitter(str.slice(1));
  } 

  return str[0] + splitter(str.slice(1));
}


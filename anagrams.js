'use strict';

function anagrams(str) {

  if (str.length === 1) {
    return [str];
  }

  const chars = str.split('');
  const arr = [];
  chars.forEach((char, index) => {
    const lessChars = chars.filter((ele, i) => i !== index).join('');
    anagrams(lessChars).forEach(ana => {
      arr.push(char + ana);
    });
  });

  return arr;

}

console.log(anagrams('east'), anagrams('east').length);
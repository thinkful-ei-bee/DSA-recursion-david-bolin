'use strict';

function makeNewMaze(maze, x, y) {
  const newMaze = maze.map(ele => [...ele]);
  newMaze[y][x] = '*';
  return newMaze;
}


function getOut(maze, x = 0, y = 0) {
  const maxY = maze.length - 1;
  const maxX = maze[0].length - 1;
  let available = 4;

  if (x === 0 || maze[y][x - 1] === '*') {
    available--;
  }

  if (y === 0 || maze[y - 1][x] === '*') {
    available--;
  }

  if (x === maxX || maze[y][x + 1] === '*') {
    available--;
  }

  if (y === maxY || maze[y + 1][x] === '*') {
    available--;
  }

  if (available === 0) {
    return [];
  }

  if (available === 1 && x < maxX && maze[y][x + 1] === 'e') {
    return ['R'];
  }

  if (available === 1 && y < maxY && maze[y + 1][x] === 'e') {
    return ['D'];
  }

  const newMaze = makeNewMaze(maze, x, y);
  const solutions = [];

  if (y > 0 && maze[y - 1][x] === ' ') {
    if (getOut(newMaze, x, y - 1).length) {
      getOut(newMaze, x, y - 1).forEach(ele => solutions.push('U' + ele));
    }
  }

  if (y < maxY && maze[y + 1][x] === ' ') {
    if (getOut(newMaze, x, y + 1).length) {
      getOut(newMaze, x, y + 1).forEach(ele => solutions.push('D' + ele));
    }
  }

  if (x > 0 && maze[y][x - 1] === ' ') {
    if (getOut(newMaze, x - 1, y).length) {
      getOut(newMaze, x - 1, y).forEach(ele => solutions.push('L' + ele));
    }
  }

  if (x < maxX && maze[y][x + 1] === ' ') {
    if (getOut(newMaze, x + 1, y).length) {
      getOut(newMaze, x + 1, y).forEach(ele => solutions.push('R' + ele));
    }
  }

  return solutions;
}

const testMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(getOut(testMaze));


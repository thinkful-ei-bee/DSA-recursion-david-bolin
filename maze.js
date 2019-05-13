'use strict';

function makeNewMaze(maze, x, y) {
  const newMaze = maze.map(ele => [...ele]);
  newMaze[y][x] = '*';
  return newMaze;
}


function getOut(maze, x = 0, y = 0) {
  const maxY = maze.length - 1;
  const maxX = maze[0].length - 1;

  if (x < maxX && maze[y][x + 1] === 'e') {
    return 'R';
  }

  if (y < maxY && maze[y + 1][x] === 'e') {
    return 'D';
  }

  const newMaze = makeNewMaze(maze, x, y);

  if (y > 0 && maze[y - 1][x] === ' ') {
    if (getOut(newMaze, x, y - 1)) {
      return 'U' + getOut(newMaze, x, y - 1);
    }
  }

  if (y < maxY && maze[y + 1][x] === ' ') {
    if (getOut(newMaze, x, y + 1)) {
      return 'D' + getOut(newMaze, x, y + 1);
    }
  }

  if (x > 0 && maze[y][x - 1] === ' ') {
    if (getOut(newMaze, x - 1, y)) {
      return 'L' + getOut(newMaze, x - 1, y);
    }
  }

  if (x < maxX && maze[y][x + 1] === ' ') {
    if (getOut(newMaze, x + 1, y)) {
      return 'R' + getOut(newMaze, x + 1, y);
    }
  }
}

const testMaze = [
  [' ', ' ', ' ', '*', ' ', ' ', ' '],
  ['*', '*', ' ', '*', ' ', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', ' '],
  [' ', '*', '*', '*', '*', '*', ' '],
  [' ', ' ', ' ', ' ', ' ', ' ', 'e']
];

console.log(getOut(testMaze));


const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
ctx.fillStyle = '#00000';

const generateRandom2DArray = (cols, rows) => {
  return Array.from({ length: cols }, () =>
    Array.from({ length: rows }, () => Math.floor(Math.random() * 2))
  );
};

const drawGrid = (cols, rows, grid) => {
  ctx.clearRect(0, 0, cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] === 1) {
        ctx.fillRect(i * 8, j * 8, 8, 8);
      }
    }
  }
  // controls the speed the grid is updated
  setTimeout(function() {
    update(cols, rows, grid);
  }, 7);
};

const update = (cols, rows, grid) => {
  let result = [];
  //return the amount of alive neighbours for a cell
  const countNeighbours = (x, y) => {
    const isFilled = (x, y) => grid[x] && grid[x][y];
    let amount = 0;

    if (isFilled(x - 1, y - 1)) amount++;
    if (isFilled(x, y - 1)) amount++;
    if (isFilled(x + 1, y - 1)) amount++;
    if (isFilled(x - 1, y)) amount++;
    if (isFilled(x + 1, y)) amount++;
    if (isFilled(x - 1, y + 1)) amount++;
    if (isFilled(x, y + 1)) amount++;
    if (isFilled(x + 1, y + 1)) amount++;
    return amount;
  };
  grid.forEach((row, x) => {
    result[x] = [];
    row.forEach((cell, y) => {
      let alive = 0;
      count = countNeighbours(x, y);
      if (cell > 0) {
        alive = count === 2 || count === 3 ? 1 : 0;
      } else {
        alive = count === 3 ? 1 : 0;
      }

      result[x][y] = alive;
    });
  });
  grid = result;
  drawGrid(cols, rows, grid);
};

const seed = (cols, rows) => {
  let grid = generateRandom2DArray(cols, rows);

  drawGrid(cols, rows, grid);
};
seed(600, 600);

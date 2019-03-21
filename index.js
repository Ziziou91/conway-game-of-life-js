const c = document.getElementById('myCanvas');
const ctx = c.getContext('2d');
ctx.fillStyle = '#FF0000';

const create2DArray = (cols, rows) => {
  return Array.from({ length: cols }, () =>
    Array.from({ length: rows }, () => Math.floor(Math.random() * 2))
  );
};

const drawgrid = (cols, rows, grid) => {
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      if (grid[i][j] === 1) {
        ctx.fillRect(i * 8, j * 8, 8, 8);
      }
    }
  }
};

const setup = (cols, rows) => {
  let grid = create2DArray(cols, rows);
  console.log(grid);
  ctx.clearRect(0, 0, cols, rows);
  drawgrid(cols, rows, grid);
};
setup(600, 600);

function bomberMan(n, grid) {
  if (n === 0 || n === 1) return grid;

  if (n % 2 === 0) {
    let r = grid.length;
    let c = grid[0].length;

    return new Array(r).fill("O".repeat(c));
  }

  const rows = grid.length;
  const cols = grid[0].length;
  let currentGrid = grid.map((row) => row.split(""));

  const detonatedGrid = new Array(rows)
    .fill()
    .map(() => new Array(cols).fill("O"));

  const detonate = () => {
    const detonatedGridCopy = JSON.parse(JSON.stringify(detonatedGrid));

    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        if (currentGrid[i][j] === "O") {
          detonatedGridCopy[i][j] = ".";
          if (i > 0) detonatedGridCopy[i - 1][j] = ".";
          if (i < rows - 1) detonatedGridCopy[i + 1][j] = ".";
          if (j > 0) detonatedGridCopy[i][j - 1] = ".";
          if (j < cols - 1) detonatedGridCopy[i][j + 1] = ".";
        }
      }
    }
    currentGrid = detonatedGridCopy;
  };

  let detonations;

  if (n % 4 === 3) detonations = 1;
  else detonations = 2;

  for (let i = 0; i < detonations; i++) detonate();

  return currentGrid.map((row) => row.join(""));
}

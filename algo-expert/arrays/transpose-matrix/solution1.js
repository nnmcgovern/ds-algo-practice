function transposeMatrix(matrix) {
  // Write your code here.
  const transpose = [];

  // number of rows in transpose is number of columns in matrix,
  // which will be the number of nested arrays in transpose
  const numRows = matrix[0].length;

  // number of columns in transpose
  // or number of rows (nested arrays) in matrix
  const numCols = matrix.length;

  for (let i = 0; i < numRows; i++) {
    const row = [];

    for (let j = 0; j < numCols; j++) {
      // get each value in matrix column
      row.push(matrix[j][i]);
    }

    transpose.push(row);
  }

  return transpose;
}

// Time: O(w * h), Space: O(w * h)
// where w is the width of the matrix and h is the height

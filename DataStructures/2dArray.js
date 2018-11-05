function rotateClockWise (matrix) {
  const rows = matrix.length, cols = matrix[0].length
  let newMatrix = new Array(cols)
  for(let i = 0; i < cols; i++) {
    newMatrix[i] = new Array(rows)
  }

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      newMatrix[j][i] = matrix[i][j]
    }
  }
  return newMatrix
}

function rotateCounterClockWise (matrix) {
  const rows = matrix.length, cols = matrix[0].length
  let newMatrix = new Array(cols)
  for(let i = 0; i < cols; i++) {
    newMatrix[i] = new Array(rows)
  }
  
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      newMatrix[j][i] = matrix[i][j]
    }
  }
  return newMatrix.reverse()
}

function invertVertical(matrix) {
  return matrix.reverse()
}

function invertHorizontal(matrix) {
  matrix.forEach(e => e.reverse())
  return matrix
}


let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
console.log(arr)
console.log(rotateClockWise(arr))
console.log(rotateCounterClockWise(arr))
console.log(invertVertical(arr))
console.log(invertHorizontal(arr))

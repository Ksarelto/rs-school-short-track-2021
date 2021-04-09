/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum(matrix) {
  const result = matrix.reduce((res, el, ind) => {
    let s = res;
    for (let i = 0; i < el.length; i++) {
      if (ind === 0) {
        s += el[i];
      } else if (matrix[ind - 1][i] !== 0) {
        s += el[i];
      }
    }
    return s;
  }, 0);

  return result;
}

module.exports = getMatrixElementsSum;

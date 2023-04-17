const { NotImplementedError } = require('../extensions/index.js');

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
  //throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here
  
  let last = matrix.length - 1;
  let results = 0;
  for (let j = last; j >= 0; j--) {
    for (let i = 0; i < matrix[j].length; i++) {
      if (j == 0) {
        results = results + matrix[j][i];        
      } else if (matrix[j - 1][i] != 0) {
          results = results + matrix[j][i]; 
        }
    } 
  }
  return results;
}

module.exports = {
  getMatrixElementsSum
};

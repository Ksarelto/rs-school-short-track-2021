/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let result = arr.reduce((res, el) => {
    if (el !== -1) {
      res.push(el);
    }
    return res;
  }, []).sort((a, b) => a - b);

  const sum = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== -1) {
      sum[i] = Number(result.slice(0, 1).join(''));
      result = result.slice(1);
    } else {
      sum[i] = arr[i];
    }
  }

  return sum;
}

module.exports = sortByHeight;

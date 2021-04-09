/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(arr, num) {
  let start = -1;
  let end = arr.length;
  let mid = Math.round((start + end) / 2);

  for (let i = 0; i < arr.length; i++) {
    if (arr[mid] === num) {
      return mid;
    }

    if (arr[mid] > num) {
      end = mid;
    } else {
      start = mid;
    }

    mid = Math.round((start + end) / 2);
  }
  return mid;
}

module.exports = findIndex;

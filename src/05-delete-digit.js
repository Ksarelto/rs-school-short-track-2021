/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const result = [];

  for (let i = 0; i < String(n).length; i++) {
    const num = String(n).split('');
    num[i] = '';
    result[i] = Number(num.join(''));
  }

  return result.sort((a, b) => b - a)[0];
}

module.exports = deleteDigit;

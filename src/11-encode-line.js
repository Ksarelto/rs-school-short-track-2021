/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let counter = 0;
  const arr = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i + 1] === str[i]) {
      counter++;
    } else {
      if (counter < 1) {
        arr.push(str[i]);
      } else {
        arr.push(`${counter + 1}${str[i]}`);
      }
      counter = 0;
    }
  }

  return arr.join('');
}

module.exports = encodeLine;

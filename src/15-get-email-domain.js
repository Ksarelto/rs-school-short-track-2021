/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  const reg = new RegExp('@[A-Z0-9a-z-]+[.].+.+', 'g');
  const str = email.match(reg);
  const result = str[0].slice(1);
  return result;
}

module.exports = getEmailDomain;

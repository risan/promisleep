/**
 * Sleep for the given miliseconds.
 *
 * @param {Number} ms
 * @return {Promise}
 */
const promisleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default promisleep;

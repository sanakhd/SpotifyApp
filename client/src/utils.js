/**
 * Higher-order function for async/await error handling
 * @param {function} fn an async function
 * @returns {function}
 */
export const catchErrors = (fn) => {
  return function (...args) {
    return fn(...args).catch((err) => {
      console.error(err);
    });
  };
};

//Since the Spotify API returns the duration of
//each track in milliseconds, we'll use the formatDuration utility
//function to convert that number into a human-readable format.
/**
 * Format milliseconds to time duration
 * @param {number} ms number of milliseconds
 * @returns {string} formatted duration string
 * @example 216699 -> '3:36'
 */
export const formatDuration = ms => {
  const minutes = Math.floor(ms / 60000);
  const seconds = Math.floor(((ms % 60000) / 1000));
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}
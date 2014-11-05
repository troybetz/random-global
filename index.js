/**
 * Module dependencies
 */

var randomstring = require('randomstring');

/**
 * Expose `globalize
 */

module.exports = globalize;

/**
 * Expose some variable onto the global namespace under
 * a randomly generated string, then return that alias.
 *
 * @param {*} variable to be exposed
 * @returns {String}
 */

function globalize(variable) {
  var alias = randomstring.generate();
  window[alias] = variable;
  return alias;
}

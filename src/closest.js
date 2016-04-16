'use strict';

const toArray = require('lodash/toArray');
const is = require('./is');

module.exports = function closest(ref, ufo, stop) {
  function recurse(element) {
    if (!element || stop && is(element, stop) || element === document.documentElement) {
      return null;
    } else if (is(element, ufo)) {
      return element;
    }

    return recurse(element.parentNode);
  }

  if (ufo instanceof NodeList || ufo instanceof HTMLCollection) ufo = toArray(ufo);

  return recurse(ref);
};

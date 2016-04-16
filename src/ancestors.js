'use strict';

const closest = require('./closest');

module.exports = function (ref, ufo, stop) {
  const ancestors = [];

  let node = ref;

  while (node = closest(node.parentNode, ufo, stop)) {
    ancestors.push(node);
  }

  return ancestors;
};
